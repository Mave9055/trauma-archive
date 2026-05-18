import { getAllCaseFilesMeta, getAllTags } from '@/app/lib/mdx';
import ArchiveTimeline from '@/app/components/ArchiveTimeline';
import Link from 'next/link';

export const revalidate = 3600;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const tags = getAllTags();
  return Object.keys(tags).map(tag => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);
  return {
    title: `${decodedTag} | Trauma Archive`,
    description: `Case files tagged with "${decodedTag}"`,
  };
}

export default function ThemePagePage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);
  const allCases = getAllCaseFilesMeta();
  const filteredCases = allCases.filter(caseFile =>
    caseFile.themes.includes(decodedTag)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/case-files" className="text-ember hover:text-white transition mb-4 inline-block">
          ← Back to Cases
        </Link>
        
        <h1 className="text-4xl font-serif font-bold text-ember mb-4 documentary-header">
          {decodedTag}
        </h1>

        <p className="text-ash mb-6">
          {filteredCases.length} case{filteredCases.length !== 1 ? 's' : ''} tagged with this theme
        </p>
      </div>

      <ArchiveTimeline cases={filteredCases} />
    </div>
  );
}
