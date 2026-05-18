'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXRendererProps {
  source: any;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div className="prose-content">
      <MDXRemote {...source} />
    </div>
  );
}
