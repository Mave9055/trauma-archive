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
          <h2 className="text-3xl font-serif font-bold text-ember mb-6 documentary-header">
            What This Project Does
          </h2>
          <p className="text-ash max-w-3xl mb-8 leading-relaxed">
            From the Storm to the Fire is the public companion site for Bret Lingar’s memoir, lecture series, and What Really Happened framework. The work translates survival behavior into plain language using sequence, observation, and lived-experience education. It is not therapy, not diagnosis, and not a clinical program.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-storm border border-ash rounded-lg p-6">
              <h3 className="text-xl font-serif font-bold text-ember mb-3">Translates Survival Behavior</h3>
              <p className="text-ash leading-relaxed">
                The framework looks at what happened before the behavior everyone judged: the freeze, the avoidance, the shutdown, the relapse, the silence, or the missed repair.
              </p>
            </div>

            <div className="bg-storm border border-ash rounded-lg p-6">
              <h3 className="text-xl font-serif font-bold text-ember mb-3">Explains Without Excusing</h3>
              <p className="text-ash leading-relaxed">
                Explanation is not excuse. Understanding the mechanism underneath survival behavior does not erase responsibility, consequences, or the need for repair.
              </p>
            </div>

            <div className="bg-storm border border-ash rounded-lg p-6">
              <h3 className="text-xl font-serif font-bold text-ember mb-3">Builds Usable Language</h3>
              <p className="text-ash leading-relaxed">
                The site is built for readers, families, peer groups, frontline helpers, and organizations that need clear trauma-informed language without clinical barriers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-storm border border-ember rounded-lg p-8">
          <p className="case-file-label mb-3">Built Around One Question</p>
          <h2 className="text-3xl font-serif font-bold text-ember mb-4">
            What really happened before the behavior everyone judged?
          </h2>
          <p className="text-ash leading-relaxed max-w-3xl">
            The What Really Happened framework starts with observable sequence instead of instant interpretation. It asks what the body did, what the person avoided, what broke the pattern, and what repeated over time. The goal is plain-language understanding, not pity and not a clinical label.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-ember mb-8 documentary-header">
            WRH Case Files
          </h2>
          <p className="text-ash max-w-3xl mb-8 leading-relaxed">
            These case files are educational pattern examples. They are not clinical diagnoses and not profiles of real patients. Each file shows how survival responses can appear through observable behavior.
          </p>
          <ArchiveTimeline cases={cases} />
        </section>
      </div>
    </>
  );
}
