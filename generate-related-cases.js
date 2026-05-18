import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { pipeline, env } from '@huggingface/transformers';

// Allow remote model download on first run, then use offline mode
const isOfflineMode = process.env.TRANSFORMERS_OFFLINE === '1';
if (!isOfflineMode) {
  env.allowRemoteModels = true;
  env.allowLocalModels = true;
} else {
  env.allowRemoteModels = false;
  env.allowLocalModels = true;
}

const CASE_FILES_DIR = path.join(process.cwd(), 'content', 'case-files');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'related-cases.json');

// Cosine similarity calculation
function cosineSimilarity(a, b) {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
}

// Normalize embedding to array
function normalizeEmbedding(embedding) {
  if (Array.isArray(embedding)) {
    return embedding;
  }
  if (embedding && typeof embedding === 'object' && 'data' in embedding) {
    return Array.from(embedding.data);
  }
  return [];
}

// Build embedding text from frontmatter
function buildEmbeddingText(frontmatter) {
  const parts = [];
  
  if (frontmatter.title) parts.push(frontmatter.title);
  if (frontmatter.excerpt) parts.push(frontmatter.excerpt);
  if (frontmatter.psychological_breakdown) {
    parts.push(frontmatter.psychological_breakdown);
  }
  if (frontmatter.survival_function) {
    parts.push(frontmatter.survival_function);
  }
  if (Array.isArray(frontmatter.themes)) {
    parts.push(frontmatter.themes.join(' '));
  } else if (typeof frontmatter.themes === 'string') {
    parts.push(frontmatter.themes);
  }
  
  return parts.join(' ').trim();
}

// Main function
async function generateRelatedCases() {
  try {
    // Check if case files directory exists
    if (!fs.existsSync(CASE_FILES_DIR)) {
      console.log('Case files directory not found, creating empty related-cases.json');
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify({}, null, 2));
      return;
    }

    // Read all MDX files
    const files = fs.readdirSync(CASE_FILES_DIR).filter(f => f.endsWith('.mdx'));
    
    if (files.length === 0) {
      console.log('No MDX files found, creating empty related-cases.json');
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify({}, null, 2));
      return;
    }

    console.log(`Found ${files.length} case files. Generating embeddings...`);

    // Initialize the embedding model
    const extractor = await pipeline(
      'feature-extraction',
      'Xenova/all-MiniLM-L6-v2',
      { 
        progress_callback: (progress) => {
          if (progress.status === 'progress') {
            console.log(`Model loading: ${Math.round(progress.progress * 100)}%`);
          }
        }
      }
    );

    // Parse all files and build embeddings
    const caseData = [];
    
    for (const file of files) {
      const filePath = path.join(CASE_FILES_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter } = matter(content);
      
      const slug = file.replace('.mdx', '');
      const embeddingText = buildEmbeddingText(frontmatter);
      
      if (!embeddingText) {
        console.warn(`Skipping ${slug}: no embedding text found`);
        continue;
      }

      // Generate embedding
      const embedding = await extractor(embeddingText, {
        pooling: 'mean',
        normalize: true,
      });

      const normalizedEmbedding = normalizeEmbedding(embedding);
      
      caseData.push({
        slug,
        embedding: normalizedEmbedding,
        title: frontmatter.title || slug,
      });
    }

    console.log(`Generated embeddings for ${caseData.length} cases`);

    // Compute related cases using cosine similarity
    const relatedCasesMap = {};

    for (let i = 0; i < caseData.length; i++) {
      const current = caseData[i];
      const similarities = [];

      for (let j = 0; j < caseData.length; j++) {
        if (i === j) continue;

        const other = caseData[j];
        const score = cosineSimilarity(current.embedding, other.embedding);

        similarities.push({
          slug: other.slug,
          score: Math.round(score * 100) / 100, // Round to 2 decimals
        });
      }

      // Sort by score descending and keep top 10
      similarities.sort((a, b) => b.score - a.score);
      relatedCasesMap[current.slug] = similarities.slice(0, 10);
    }

    // Write output (no raw embeddings, only relationships)
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(relatedCasesMap, null, 2));
    console.log(`✓ Generated ${OUTPUT_FILE}`);
    console.log('Privacy check: No raw embeddings were written to the output.');

  } catch (error) {
    console.error('Error generating related cases:', error);
    process.exit(1);
  }
}

generateRelatedCases();
