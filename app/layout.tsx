import type { Metadata, Viewport } from 'next';
import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'From the Storm to the Fire | What Really Happened',
  description: 'Public companion site for Bret Lingar, From the Storm to the Fire, the What Really Happened framework, and Capitol Contracts LLC educational materials.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
