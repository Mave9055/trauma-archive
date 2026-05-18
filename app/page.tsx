import HeroIntro from './components/HeroIntro';
import ArchiveTimeline from './components/ArchiveTimeline';
import { getAllCaseFilesMeta } from './lib/mdx';

export default function Home() {
  const cases = getAllCaseFilesMeta().slice(0, 6);

  return (
    <>
      <HeroIntro />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-ember mb-8 documentary-header">
            Featured Cases
          </h2>
          <ArchiveTimeline cases={cases} />
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-storm border border-ash rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-ember mb-3">Privacy First</h3>
            <p className="text-ash">
              All semantic linking is computed locally at build time. No embeddings are shipped to the client.
            </p>
          </div>

          <div className="bg-storm border border-ash rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-ember mb-3">Documentary Archive</h3>
            <p className="text-ash">
              Explore trauma narratives with psychological context and survival frameworks.
            </p>
          </div>

          <div className="bg-storm border border-ash rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-ember mb-3">Semantic Discovery</h3>
            <p className="text-ash">
              Discover related cases through intelligent semantic linking based on content analysis.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
