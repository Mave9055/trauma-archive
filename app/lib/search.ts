'use client';

import Fuse from 'fuse.js';

export interface SearchItem {
  id: string;
  type: 'case' | 'memoir';
  slug: string;
  title: string;
  excerpt: string;
  psychological_breakdown?: string;
  themes?: string;
  url: string;
}

export interface SearchIndex {
  items: SearchItem[];
  options: any;
}

let fuseInstance: Fuse<SearchItem> | null = null;

async function loadSearchIndex(): Promise<Fuse<SearchItem>> {
  if (fuseInstance) {
    return fuseInstance;
  }

  try {
    const response = await fetch('/search-index.json');
    if (!response.ok) {
      throw new Error('Failed to load search index');
    }

    const data: SearchIndex = await response.json();
    fuseInstance = new Fuse(data.items, data.options);
    return fuseInstance;
  } catch (error) {
    console.error('Error loading search index:', error);
    throw error;
  }
}

export async function search(query: string): Promise<SearchItem[]> {
  const fuse = await loadSearchIndex();
  const results = fuse.search(query);
  return results.map(result => result.item);
}
