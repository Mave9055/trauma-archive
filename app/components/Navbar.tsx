'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-storm border-b-2 border-ember sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-6">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-ember hover:text-white transition">
            From the Storm to the Fire
          </Link>

          <button
            className="md:hidden text-ember hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:block md:flex gap-5 text-sm`}>
            <Link href="/" className="text-ash hover:text-ember transition block md:inline">Home</Link>
            <Link href="/about" className="text-ash hover:text-ember transition block md:inline">About Bret</Link>
            <Link href="/memoir" className="text-ash hover:text-ember transition block md:inline">The Book</Link>
            <Link href="/psychology" className="text-ash hover:text-ember transition block md:inline">WRH Framework</Link>
            <Link href="/historical-archive" className="text-ash hover:text-ember transition block md:inline">Lectures</Link>
            <Link href="/case-files" className="text-ash hover:text-ember transition block md:inline">Case Files</Link>
            <Link href="/contact" className="text-ash hover:text-ember transition block md:inline">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
