import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getCaseFileBySlug, getAllCaseFilesMeta } from '@/app/lib/mdx';

export const revalidate = 3600;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const cases = getAllCaseFilesMeta();
  return cases.map(caseFile => ({
    slug: caseFile.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseFile = getCaseFileBySlug(params.slug);
  
  if (!caseFile) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${caseFile.title} | Trauma Archive`,
    description: caseFile.excerpt,
  };
}

export default function CaseFileDetailPage({ params }: { params: { slug: string } }) {
  const caseFile = getCaseFileBySlug(params.slug);

  if (!caseFile) {
    notFound();
  }

  const relatedCases = caseFile.related_cases || caseFile.auto_related_cases || [];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12 pb-8 border-b-2 border-ember">
        <div className="case-file-label">Case File</div>
        
        <h1 className="text-5xl font-serif font-bold text-ember mb-4">
          {caseFile.title}
        </h1>

        <p className="text-lg text-ash mb-6">
          {caseFile.excerpt}
        </p>

        {/* Themes */}
        {caseFile.themes.length > 0 && (
          <div className="mb-6">
            {caseFile.themes.map(theme => (
              <Link key={theme} href={`/themes/${encodeURIComponent(theme)}`}>
                <span className="theme-badge">
                  {theme}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Metadata */}
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {caseFile.psychological_breakdown && (
            <div>
              <p className="case-file-label mb-2">Psychological Breakdown</p>
              <p className="text-ash">{caseFile.psychological_breakdown}</p>
            </div>
          )}
          {caseFile.survival_function && (
            <div>
              <p className="case-file-label mb-2">Survival Function</p>
              <p className="text-ash">{caseFile.survival_function}</p>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose-content mb-12">
        <MDXRemote source={caseFile.content} />
      </div>

      {/* Related Cases Sidebar */}
      {relatedCases.length > 0 && (
        <aside className="bg-storm border border-ash rounded-lg p-6 mb-12">
          <h2 className="text-xl font-serif font-bold text-ember mb-4">Related Cases</h2>
          <ul className="space-y-3">
            {relatedCases.map((related: any) => (
              <li key={related.slug}>
                <Link
                  href={`/case-files/${related.slug}`}
                  className="text-ember hover:text-white transition font-serif"
                >
                  {related.slug}
                </Link>
                {related.score && (
                  <p className="text-xs text-ash mt-1">
                    Semantic match: {Math.round(related.score * 100)}%
                  </p>
                )}
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-ash">
        <Link href="/case-files" className="text-ember hover:text-white transition">
          ← Back to Cases
        </Link>
        <Link href="/" className="text-ember hover:text-white transition">
          Home
        </Link>
      </nav>
    </article>
  );
}
