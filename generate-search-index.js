import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CASE_FILES_DIR = path.join(process.cwd(), 'content', 'case-files');
const MEMOIR_DIR = path.join(process.cwd(), 'content', 'memoir');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'search-index.json');

function normalizeArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return value.split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

function generateSearchIndex() {
  try {
    const items = [];

    // Process case files
    if (fs.existsSync(CASE_FILES_DIR)) {
      const files = fs.readdirSync(CASE_FILES_DIR).filter(f => f.endsWith('.mdx'));
      
      for (const file of files) {
        const filePath = path.join(CASE_FILES_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(content);
        
        const slug = file.replace('.mdx', '');
        const themes = normalizeArray(frontmatter.themes);
        
        items.push({
          id: `case-${slug}`,
          type: 'case',
          slug,
          title: frontmatter.title || slug,
          excerpt: frontmatter.excerpt || '',
          psychological_breakdown: frontmatter.psychological_breakdown || '',
          themes: themes.join(' '),
          url: `/case-files/${slug}`,
        });
      }
    }

    // Process memoir files
    if (fs.existsSync(MEMOIR_DIR)) {
      const files = fs.readdirSync(MEMOIR_DIR).filter(f => f.endsWith('.mdx'));
      
      for (const file of files) {
        const filePath = path.join(MEMOIR_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(content);
        
        const slug = file.replace('.mdx', '');
        
        items.push({
          id: `memoir-${slug}`,
          type: 'memoir',
          slug,
          title: frontmatter.title || slug,
          excerpt: frontmatter.excerpt || '',
          url: `/memoir/${slug}`,
        });
      }
    }

    const searchIndex = {
      items,
      options: {
        keys: ['title', 'excerpt', 'themes', 'psychological_breakdown'],
        threshold: 0.3,
        includeScore: true,
      },
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2));
    console.log(`✓ Generated ${OUTPUT_FILE} with ${items.length} items`);

  } catch (error) {
    console.error('Error generating search index:', error);
    process.exit(1);
  }
}

generateSearchIndex();
