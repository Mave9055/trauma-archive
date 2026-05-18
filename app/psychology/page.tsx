export const metadata = {
  title: 'Psychology | Trauma Archive',
  description: 'Psychological frameworks and concepts used in the archive.',
};

export default function PsychologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        Psychological Framework
      </h1>

      <div className="prose-content space-y-8">
        <section>
          <h2>Understanding Trauma</h2>
          <p>
            Trauma is a psychological response to deeply distressing or disturbing events. It can manifest in various ways 
            and affects individuals differently. This archive explores trauma through multiple lenses: clinical, personal, 
            and sociological.
          </p>
        </section>

        <section>
          <h2>Key Concepts</h2>
          
          <div className="space-y-4">
            <div>
              <h3>Hypervigilance</h3>
              <p>
                An elevated state of sensory sensitivity accompanied by an exaggerated intensity of behaviors aimed at 
                detecting threats. Often a survival mechanism in response to trauma.
              </p>
            </div>

            <div>
              <h3>Trauma Bonding</h3>
              <p>
                The formation of intense emotional bonds between individuals who have experienced shared traumatic events. 
                Can be both protective and potentially problematic depending on context.
              </p>
            </div>

            <div>
              <h3>Emotional Flashbacks</h3>
              <p>
                Sudden, involuntary re-experiencing of emotional states associated with past trauma. Often triggered by 
                sensory cues or situations reminiscent of the original event.
              </p>
            </div>

            <div>
              <h3>Survival Function</h3>
              <p>
                The adaptive purpose that traumatic responses serve. Understanding the survival function helps contextualize 
                seemingly maladaptive behaviors as originally protective mechanisms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Thematic Organization</h2>
          <p>
            Case files in this archive are organized by psychological themes, allowing readers to explore how similar 
            patterns emerge across different individuals and contexts. This thematic approach facilitates understanding 
            of universal trauma responses while respecting individual variation.
          </p>
        </section>

        <section>
          <h2>Resources</h2>
          <p>
            This archive is educational in nature. For professional mental health support, please consult with qualified 
            mental health professionals. If you're in crisis, please reach out to appropriate crisis resources.
          </p>
        </section>
      </div>
    </div>
  );
}
