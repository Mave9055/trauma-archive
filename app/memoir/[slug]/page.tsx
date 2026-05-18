import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMemoirBySlug, getAllMemoirs } from '@/app/lib/mdx';

export const revalidate = 3600;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const memoirs = getAllMemoirs();
  return memoirs.map(memoir => ({
    slug: memoir.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const memoir = getMemoirBySlug(params.slug);
  
  if (!memoir) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${memoir.title} | Trauma Archive`,
    description: memoir.excerpt,
  };
}

export default function MemoirDetailPage({ params }: { params: { slug: string } }) {
  const memoir = getMemoirBySlug(params.slug);

  if (!memoir) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12 pb-8 border-b-2 border-ember">
        <div className="case-file-label">Memoir</div>
        
        <h1 className="text-5xl font-serif font-bold text-ember mb-4">
          {memoir.title}
        </h1>

        <p className="text-lg text-ash">
          {memoir.excerpt}
        </p>
      </header>

      {/* Content */}
      <div className="prose-content mb-12">
        <MDXRemote source={memoir.content} />
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-ash">
        <Link href="/memoir" className="text-ember hover:text-white transition">
          ← Back to Memoir
        </Link>
        <Link href="/" className="text-ember hover:text-white transition">
          Home
        </Link>
      </nav>
    </article>
  );
}
