export const metadata = {
  title: 'About | Trauma Archive',
  description: 'Learn about the Trauma Archive project and its mission.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        About This Archive
      </h1>

      <div className="prose-content space-y-6">
        <section>
          <h2>Mission</h2>
          <p>
            The Trauma Archive is a documentary-style collection dedicated to understanding trauma through case studies, 
            psychological analysis, and personal narratives. Our mission is to provide a resource for education, research, 
            and healing.
          </p>
        </section>

        <section>
          <h2>Privacy & Security</h2>
          <p>
            This archive prioritizes user privacy above all else. All semantic linking and content analysis is performed 
            locally at build time using open-source models. No raw embeddings or sensitive data are ever transmitted to external 
            servers or shipped to the client.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Embeddings computed locally using Transformers.js</li>
            <li>No external API calls for content analysis</li>
            <li>Only derived relationship data is published</li>
            <li>Complete transparency in our technical approach</li>
          </ul>
        </section>

        <section>
          <h2>Technology</h2>
          <p>
            Built with Next.js 14, React 18, and Tailwind CSS. The archive uses semantic similarity analysis to automatically 
            discover and suggest related cases, helping readers explore interconnected narratives.
          </p>
        </section>

        <section>
          <h2>Content</h2>
          <p>
            All content is carefully curated and presented with appropriate context. Each case file includes psychological 
            breakdowns, survival functions, and thematic tagging for easy discovery.
          </p>
        </section>
      </div>
    </div>
  );
}
