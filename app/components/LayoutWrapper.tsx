'use client';

import Navbar from './Navbar';
import GrainOverlay from './GrainOverlay';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-charcoal">
        {children}
      </main>
      <GrainOverlay />
    </>
  );
}
