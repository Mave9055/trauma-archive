import { unstable_cache } from 'next/cache';

export function withCache<T>(
  fn: () => Promise<T>,
  tags: string[],
  revalidate: number = 3600
): () => Promise<T> {
  return unstable_cache(fn, tags, { revalidate });
}
