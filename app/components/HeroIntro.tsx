'use client';

import Link from 'next/link';

export default function HeroIntro() {
  return (
    <section className="bg-charcoal border-b-2 border-ember py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-ember mb-6">
          Trauma Archive
        </h1>
        
        <p className="text-lg text-ash mb-8 leading-relaxed max-w-2xl">
          A documentary-style collection of case studies, psychological breakdowns, and survival narratives. 
          This archive explores trauma through a lens of understanding, resilience, and the human capacity to endure.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/case-files"
            className="px-6 py-3 bg-ember text-charcoal font-serif font-bold rounded hover:bg-white transition"
          >
            Browse Cases
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border-2 border-ember text-ember font-serif font-bold rounded hover:bg-ember hover:text-charcoal transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
