'use client';

import { useState, useCallback } from 'react';
import { search, SearchItem } from '@/app/lib/search';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (q: string) => {
    setQuery(q);
    
    if (!q.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = await search(q);
      setResults(searchResults.slice(0, 8));
      setIsOpen(true);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search cases, themes, memoir..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full bg-storm border border-ash rounded-lg px-4 py-2 text-white placeholder-ash focus:outline-none focus:border-ember transition"
        />
        {isLoading && (
          <div className="absolute right-3 top-2.5">
            <div className="animate-spin h-5 w-5 border-2 border-ember border-t-transparent rounded-full" />
          </div>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-storm border border-ash rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map(result => (
            <Link
              key={result.id}
              href={result.url}
              onClick={() => {
                setQuery('');
                setResults([]);
                setIsOpen(false);
              }}
              className="block px-4 py-3 hover:bg-charcoal border-b border-ash last:border-b-0 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-ember font-serif font-bold text-sm">{result.title}</p>
                  <p className="text-ash text-xs mt-1 line-clamp-2">{result.excerpt}</p>
                  {result.themes && (
                    <p className="text-ash text-xs mt-2">{result.themes}</p>
                  )}
                </div>
                <span className="text-xs case-file-label ml-2 whitespace-nowrap">
                  {result.type === 'case' ? 'Case' : 'Memoir'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-storm border border-ash rounded-lg p-4 text-center text-ash">
          No results found
        </div>
      )}
    </div>
  );
}
