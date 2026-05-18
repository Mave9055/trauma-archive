import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getRelatedCases } from './related';

export interface CaseFileMeta {
  slug: string;
  title: string;
  excerpt: string;
  psychological_breakdown?: string;
  survival_function?: string;
  themes: string[];
  related_cases?: string[];
  auto_related_cases?: Array<{ slug: string; score: number }>;
}

export interface CaseFile extends CaseFileMeta {
  content: string;
}

export interface MemoirMeta {
  slug: string;
  title: string;
  excerpt: string;
}

export interface Memoir extends MemoirMeta {
  content: string;
}

function normalizeArray(value: any): string[] {
  if (Array.isArray(value)) {
    return value.map(v => String(v)).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value.split(',').map(s => s.trim()).filter(Boolean);
  }
  return [];
}

function getCaseFilesDir(): string {
  return path.join(process.cwd(), 'content', 'case-files');
}

function getMemoirDir(): string {
  return path.join(process.cwd(), 'content', 'memoir');
}

export function getAllCaseFilesMeta(): CaseFileMeta[] {
  const dir = getCaseFilesDir();
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
  
  return files.map(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = matter(content);
    
    const slug = file.replace('.mdx', '');
    const themes = normalizeArray(frontmatter.themes);
    const manualRelated = normalizeArray(frontmatter.related_cases);
    
    // Use manual related cases if provided, otherwise use auto-generated
    let autoRelated: Array<{ slug: string; score: number }> = [];
    if (!manualRelated || manualRelated.length === 0) {
      autoRelated = getRelatedCases(slug, 5);
    }

    return {
      slug,
      title: frontmatter.title || slug,
      excerpt: frontmatter.excerpt || '',
      psychological_breakdown: frontmatter.psychological_breakdown || '',
      survival_function: frontmatter.survival_function || '',
      themes,
      related_cases: manualRelated.length > 0 ? manualRelated : undefined,
      auto_related_cases: autoRelated.length > 0 ? autoRelated : undefined,
    };
  });
}

export function getAllCaseFiles(): CaseFile[] {
  const dir = getCaseFilesDir();
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
  
  return files.map(file => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');
    const themes = normalizeArray(frontmatter.themes);
    const manualRelated = normalizeArray(frontmatter.related_cases);
    
    let autoRelated: Array<{ slug: string; score: number }> = [];
    if (!manualRelated || manualRelated.length === 0) {
      autoRelated = getRelatedCases(slug, 5);
    }

    return {
      slug,
      title: frontmatter.title || slug,
      excerpt: frontmatter.excerpt || '',
      psychological_breakdown: frontmatter.psychological_breakdown || '',
      survival_function: frontmatter.survival_function || '',
      themes,
      related_cases: manualRelated.length > 0 ? manualRelated : undefined,
      auto_related_cases: autoRelated.length > 0 ? autoRelated : undefined,
      content,
    };
  });
}

export function getCaseFileBySlug(slug: string): CaseFile | null {
  const dir = getCaseFilesDir();
  const filePath = path.join(dir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  
  const themes = normalizeArray(frontmatter.themes);
  const manualRelated = normalizeArray(frontmatter.related_cases);
  
  let autoRelated: Array<{ slug: string; score: number }> = [];
  if (!manualRelated || manualRelated.length === 0) {
    autoRelated = getRelatedCases(slug, 5);
  }

  return {
    slug,
    title: frontmatter.title || slug,
    excerpt: frontmatter.excerpt || '',
    psychological_breakdown: frontmatter.psychological_breakdown || '',
    survival_function: frontmatter.survival_function || '',
    themes,
    related_cases: manualRelated.length > 0 ? manualRelated : undefined,
    auto_related_cases: autoRelated.length > 0 ? autoRelated : undefined,
    content,
  };
}

export function getAllMemoirs(): Memoir[] {
  const dir = getMemoirDir();
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
  
  return files.map(file => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    
    const slug = file.replace('.mdx', '');

    return {
      slug,
      title: frontmatter.title || slug,
      excerpt: frontmatter.excerpt || '',
      content,
    };
  });
}

export function getMemoirBySlug(slug: string): Memoir | null {
  const dir = getMemoirDir();
  const filePath = path.join(dir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  
  return {
    slug,
    title: frontmatter.title || slug,
    excerpt: frontmatter.excerpt || '',
    content,
  };
}

export function getAllTags(): Record<string, string[]> {
  const cases = getAllCaseFilesMeta();
  const tagMap: Record<string, string[]> = {};
  
  for (const caseFile of cases) {
    for (const tag of caseFile.themes) {
      if (!tagMap[tag]) {
        tagMap[tag] = [];
      }
      tagMap[tag].push(caseFile.slug);
    }
  }
  
  return tagMap;
}
