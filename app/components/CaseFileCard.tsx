'use client';

import Link from 'next/link';
import { CaseFileMeta } from '@/app/lib/mdx';

interface CaseFileCardProps {
  caseFile: CaseFileMeta;
}

export default function CaseFileCard({ caseFile }: CaseFileCardProps) {
  const relatedCases = caseFile.related_cases || caseFile.auto_related_cases || [];

  return (
    <article className="bg-storm border border-ash rounded-lg p-6 hover:border-ember transition">
      <div className="case-file-label">Case File</div>

      <Link href={`/case-files/${caseFile.slug}`}>
        <h3 className="text-xl font-serif font-bold text-ember hover:text-white transition mb-2">
          {caseFile.title}
        </h3>
      </Link>

      <p className="text-ash mb-4 line-clamp-3">{caseFile.excerpt}</p>

      <div className="mb-4">
        {caseFile.themes.map(theme => (
          <Link key={theme} href={`/themes/${encodeURIComponent(theme)}`}>
            <span className="theme-badge">
              {theme}
            </span>
          </Link>
        ))}
      </div>

      {relatedCases.length > 0 && (
        <div className="border-t border-ash pt-4 mt-4">
          <p className="text-xs case-file-label mb-2">Related Cases</p>
          <ul className="space-y-1">
            {relatedCases.slice(0, 3).map((related: any) => (
              <li key={related.slug}>
                <Link href={`/case-files/${related.slug}`} className="text-sm text-ash hover:text-ember transition">
                  • {related.slug}
                  {related.score && (
                    <span className="text-xs text-ash ml-2">
                      (semantic match {Math.round(related.score * 100)}%)
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
