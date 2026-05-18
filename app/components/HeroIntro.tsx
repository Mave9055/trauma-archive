'use client';

import Link from 'next/link';

export default function HeroIntro() {
  return (
    <section className="bg-charcoal border-b-2 border-ember py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="case-file-label mb-4">Bret Lingar • What Really Happened • Capitol Contracts LLC</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-ember mb-6">
          From the Storm to the Fire
        </h1>

        <p className="text-xl text-white mb-6 leading-relaxed max-w-3xl">
          A lived-experience archive on CPTSD, survival mode, shame, addiction, and recovery.
        </p>

        <p className="text-lg text-ash mb-8 leading-relaxed max-w-3xl">
          This public companion site supports Bret Lingar’s memoir, lecture series, and What Really Happened framework. It translates survival behavior into plain language using observable sequence instead of blame, labels, or clinical jargon. It is non-clinical, psychoeducational, and built for readers, families, peer workers, frontline helpers, and organizations.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/psychology" className="px-6 py-3 bg-ember text-charcoal font-serif font-bold rounded hover:bg-white transition">
            Explore the Framework
          </Link>
          <Link href="/memoir" className="px-6 py-3 border-2 border-ember text-ember font-serif font-bold rounded hover:bg-ember hover:text-charcoal transition">
            Read About the Book
          </Link>
          <Link href="/historical-archive" className="px-6 py-3 border-2 border-ember text-ember font-serif font-bold rounded hover:bg-ember hover:text-charcoal transition">
            View Lectures
          </Link>
          <Link href="/contact" className="px-6 py-3 border-2 border-ember text-ember font-serif font-bold rounded hover:bg-ember hover:text-charcoal transition">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
