export const metadata = {
  title: 'Contact | Trauma Archive',
  description: 'Get in touch with the Trauma Archive team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
        Contact
      </h1>

      <div className="max-w-2xl">
        <p className="text-ash mb-8">
          Have questions, suggestions, or would like to contribute to the archive? We'd love to hear from you.
        </p>

        <div className="bg-storm border border-ash rounded-lg p-8 space-y-6">
          <div>
            <p className="case-file-label mb-2">Email</p>
            <p className="text-ash">
              <a href="mailto:contact@trauma-archive.local" className="text-ember hover:text-white transition">
                contact@trauma-archive.local
              </a>
            </p>
          </div>

          <div>
            <p className="case-file-label mb-2">Mailing Address</p>
            <p className="text-ash">
              Trauma Archive<br />
              Documentary Research Initiative<br />
              Contact us for details
            </p>
          </div>

          <div>
            <p className="case-file-label mb-2">Support Resources</p>
            <p className="text-ash">
              If you or someone you know is struggling with trauma, please reach out to:
            </p>
            <ul className="list-disc list-inside text-ash space-y-1 mt-2">
              <li>National Suicide Prevention Lifeline: 988</li>
              <li>Crisis Text Line: Text HOME to 741741</li>
              <li>RAINN: 1-800-656-4673</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
