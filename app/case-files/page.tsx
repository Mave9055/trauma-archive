import SearchBar from '@/app/components/SearchBar';
import ArchiveTimeline from '@/app/components/ArchiveTimeline';
import { getAllCaseFilesMeta } from '@/app/lib/mdx';

export const metadata = {
  title: 'Case Files | Trauma Archive',
  description: 'Browse all case files in the trauma archive.',
};

export default function CaseFilesPage() {
  const cases = getAllCaseFilesMeta();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
          Case Files
        </h1>
        <p className="text-ash mb-6 max-w-2xl">
          A comprehensive archive of trauma case studies, psychological analyses, and survival narratives.
        </p>
        <SearchBar />
      </div>

      <ArchiveTimeline cases={cases} />
    </div>
  );
}
