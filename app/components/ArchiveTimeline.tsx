'use client';

import { CaseFileMeta } from '@/app/lib/mdx';
import CaseFileCard from './CaseFileCard';

interface ArchiveTimelineProps {
  cases: CaseFileMeta[];
  title?: string;
}

export default function ArchiveTimeline({ cases, title }: ArchiveTimelineProps) {
  if (cases.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-ash text-lg">No cases found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {title && (
        <h2 className="text-3xl font-serif font-bold text-ember mb-8 documentary-header">
          {title}
        </h2>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {cases.map(caseFile => (
          <CaseFileCard key={caseFile.slug} caseFile={caseFile} />
        ))}
      </div>
    </div>
  );
}
