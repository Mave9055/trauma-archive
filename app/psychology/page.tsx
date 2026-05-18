export const metadata = {
  title: 'WRH Framework | From the Storm to the Fire',
  description: 'The What Really Happened framework explains survival behavior through sequence, observation, and plain language.',
};

export default function PsychologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        What Really Happened Framework
      </h1>

      <p className="text-ash mb-10 max-w-3xl leading-relaxed">
        The What Really Happened framework is a plain-language method for looking at survival behavior through sequence, observation, and mechanism instead of instant moral judgment. It was built to help people recognize patterns without turning explanation into excuse.
      </p>

      <div className="prose-content space-y-8">
        <section>
          <h2>The Camera Test</h2>
          <p>
            If a camera cannot see it, it is probably explanation, not evidence. The framework starts with what can be observed: the missed call, the deleted message, the silence, the delay, the repeated return, the shutdown, or the unfinished repair.
          </p>
        </section>

        <section>
          <h2>Sequence Over Explanation</h2>
          <p>
            WRH asks what happened before the behavior everyone judged. It looks at the setup, the miss, the shift, and the repeated pattern before trying to explain what it meant.
          </p>
        </section>

        <section>
          <h2>Behavior Before Interpretation</h2>
          <p>
            The framework begins with what the person did, avoided, froze through, repeated, or could not complete. Interpretation comes later, after the visible sequence is clear.
          </p>
        </section>

        <section>
          <h2>Explanation Is Not Excuse</h2>
          <p>
            Understanding the mechanism does not erase responsibility. A survival response can explain a pattern without defending the harm that followed. The goal is clearer accountability, not permission to repeat the same damage.
          </p>
        </section>

        <section>
          <h2>Core Survival Patterns</h2>
          <div className="space-y-4">
            <div>
              <h3>Survival Mode</h3>
              <p>The body may react to old danger before the mind can explain the present moment.</p>
            </div>
            <div>
              <h3>Shame</h3>
              <p>Shame often drives hiding, avoidance, collapse, and relapse instead of repair.</p>
            </div>
            <div>
              <h3>Freeze and Dissociation</h3>
              <p>Some people do not fight or flee. They disappear, shut down, delay, avoid, or go blank.</p>
            </div>
            <div>
              <h3>Trauma Bonding</h3>
              <p>Pain and attachment can become fused when love, fear, relief, and rejection repeat in the same relationship.</p>
            </div>
            <div>
              <h3>Emotional Flashbacks</h3>
              <p>The body can return to an old state before the person has words for why.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Non-Clinical Use</h2>
          <p>
            WRH is psychoeducational and lived-experience based. It is not therapy, diagnosis, medical advice, or clinical treatment. It is designed to make survival patterns easier to discuss in plain language.
          </p>
        </section>
      </div>
    </div>
  );
}
