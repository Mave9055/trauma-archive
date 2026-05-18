import Link from 'next/link';
import { getAllMemoirs } from '@/app/lib/mdx';

export const metadata = {
  title: 'The Book | From the Storm to the Fire',
  description: 'From the Storm to the Fire is Bret Lingar’s memoir and plain-language survival map.',
};

export default function MemoirPage() {
  const memoirs = getAllMemoirs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        From the Storm to the Fire
      </h1>

      <p className="text-ash mb-8 max-w-3xl leading-relaxed">
        From the Storm to the Fire is Bret Lingar’s memoir and framework-based book about survival mode, shame, addiction, grief, relational collapse, and recovery. It is written as a plain-language survival map for people who have lived inside patterns they could not explain at the time.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <section className="bg-storm border border-ash rounded-lg p-6">
          <h2 className="text-2xl font-serif font-bold text-ember mb-3">What the Book Is</h2>
          <p className="text-ash leading-relaxed">
            This book is a memoir, a record of lived experience, and a plain-language framework for recognizing how survival behavior forms under pressure. It connects personal narrative to the What Really Happened method: sequence before judgment, behavior before interpretation, and explanation without excuse.
          </p>
        </section>

        <section className="bg-storm border border-ash rounded-lg p-6">
          <h2 className="text-2xl font-serif font-bold text-ember mb-3">Who It Is For</h2>
          <p className="text-ash leading-relaxed">
            It is for readers who have lived inside survival mode, families trying to understand confusing behavior, peer workers, frontline helpers, and people who reject therapy language but still need words for what happened.
          </p>
        </section>

        <section className="bg-storm border border-ash rounded-lg p-6">
          <h2 className="text-2xl font-serif font-bold text-ember mb-3">What It Is Not</h2>
          <p className="text-ash leading-relaxed">
            It is not a clinical manual, not a substitute for therapy, not a defense of harmful behavior, and not a request for pity. It is educational writing built around responsibility, pattern recognition, and language.
          </p>
        </section>

        <section className="bg-storm border border-ember rounded-lg p-6">
          <h2 className="text-2xl font-serif font-bold text-ember mb-3">Core Line</h2>
          <p className="text-white text-xl font-serif leading-relaxed">
            You were not broken. You adapted.
          </p>
          <a href="https://payhip.com/StormtoFirePress" className="inline-block mt-5 text-ember hover:text-white transition">
            Visit Storm to Fire Press →
          </a>
        </section>
      </div>

      {memoirs.length === 0 ? (
        <div className="text-center py-12 bg-storm border border-ash rounded-lg">
          <p className="text-ash text-lg">Book entries will appear here as the manuscript is prepared for public reading.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {memoirs.map(memoir => (
            <article key={memoir.slug} className="bg-storm border border-ash rounded-lg p-6 hover:border-ember transition">
              <div className="case-file-label">Book Entry</div>
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
