import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Trauma Archive',
  description: 'A documentary-style MDX archive for trauma and case-study content with privacy-preserving semantic linking.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
