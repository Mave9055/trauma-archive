import { getAllCaseFilesMeta } from '@/app/lib/mdx';
import Link from 'next/link';

export const metadata = {
  title: 'Historical Archive | Trauma Archive',
  description: 'Browse the complete historical archive of case files.',
};

export default function HistoricalArchivePage() {
  const cases = getAllCaseFilesMeta().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        Historical Archive
      </h1>

      <p className="text-ash mb-8 max-w-2xl">
        A complete chronological and alphabetical listing of all case files in the archive.
      </p>

      {cases.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-ash text-lg">No cases found in the archive.</p>
        </div>
      ) : (
        <div className="bg-storm border border-ash rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-ash bg-charcoal">
                <th className="text-left px-6 py-4 case-file-label">Title</th>
                <th className="text-left px-6 py-4 case-file-label">Themes</th>
                <th className="text-left px-6 py-4 case-file-label">Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseFile, index) => (
                <tr
                  key={caseFile.slug}
                  className={`border-b border-ash hover:bg-charcoal transition ${
                    index % 2 === 0 ? 'bg-storm' : 'bg-charcoal'
                  }`}
                >
                  <td className="px-6 py-4 text-ember font-serif">{caseFile.title}</td>
                  <td className="px-6 py-4 text-ash text-sm">
                    {caseFile.themes.join(', ') || '—'}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/case-files/${caseFile.slug}`}
                      className="text-ember hover:text-white transition text-sm"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
