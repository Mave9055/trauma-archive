import Link from 'next/link';
import { getAllMemoirs } from '@/app/lib/mdx';

export const metadata = {
  title: 'Memoir | Trauma Archive',
  description: 'Personal memoirs and narratives from the archive.',
};

export default function MemoirPage() {
  const memoirs = getAllMemoirs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        Memoir
      </h1>

      <p className="text-ash mb-8 max-w-2xl">
        Personal narratives and reflections exploring trauma, resilience, and the journey toward healing.
      </p>

      {memoirs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-ash text-lg">No memoirs found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {memoirs.map(memoir => (
            <article key={memoir.slug} className="bg-storm border border-ash rounded-lg p-6 hover:border-ember transition">
              <div className="case-file-label">Memoir</div>
              
              <Link href={`/memoir/${memoir.slug}`}>
                <h2 className="text-2xl font-serif font-bold text-ember hover:text-white transition mb-2">
                  {memoir.title}
                </h2>
              </Link>

              <p className="text-ash mb-4">{memoir.excerpt}</p>

              <Link href={`/memoir/${memoir.slug}`} className="text-ember hover:text-white transition">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
