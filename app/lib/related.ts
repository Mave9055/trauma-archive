import fs from 'fs';
import path from 'path';

export interface RelatedCaseScore {
  slug: string;
  score: number;
}

export type RelatedCasesMap = Record<string, RelatedCaseScore[]>;

let cachedRelatedCases: RelatedCasesMap = {};

export function loadRelatedCasesMap(): RelatedCasesMap {
  if (cachedRelatedCases) {
    return cachedRelatedCases;
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'related-cases.json');
    
    if (!fs.existsSync(filePath)) {
      console.warn('related-cases.json not found, returning empty map');
      cachedRelatedCases = {};
      return cachedRelatedCases;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    cachedRelatedCases = JSON.parse(content);
    return cachedRelatedCases;
  } catch (error) {
    console.error('Error loading related cases map:', error);
    cachedRelatedCases = {};
    return cachedRelatedCases;
  }
}

export function getRelatedCases(slug: string, limit: number = 5): RelatedCaseScore[] {
  const map = loadRelatedCasesMap();
  const cases = map[slug] || [];
  return cases.slice(0, limit);
}
