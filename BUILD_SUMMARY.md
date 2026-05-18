# Trauma Archive - Build Summary

## Project Overview

A complete, production-ready Next.js 14 + React 18 documentary-style MDX archive for trauma/case-study content with **privacy-preserving semantic auto-linking**.

## Key Features Implemented

### 1. Privacy-First Architecture
- **Local Embeddings**: All semantic analysis computed at build time using Transformers.js
- **No Vector Shipping**: Raw embeddings never leave the build process
- **Derived Data Only**: Only `public/related-cases.json` contains relationship scores
- **No External APIs**: Complete offline capability with `TRANSFORMERS_OFFLINE=1`

### 2. Build Scripts
- `generate-search-index.js`: Creates searchable index from all MDX content
- `generate-related-cases.js`: Computes semantic similarity using Xenova/all-MiniLM-L6-v2

### 3. Core Libraries
- `app/lib/cache.ts`: Next.js unstable_cache wrapper (3600s revalidation)
- `app/lib/related.ts`: Load and serve related cases with scores
- `app/lib/mdx.ts`: MDX file parsing with theme normalization and manual override support
- `app/lib/search.ts`: Client-side Fuse.js search functionality

### 4. UI Components
- `Navbar.tsx`: Navigation with responsive menu
- `CaseFileCard.tsx`: Case display with related cases sidebar
- `SearchBar.tsx`: Real-time search with dropdown results
- `MDXRenderer.tsx`: MDX content rendering
- `GrainOverlay.tsx`: Documentary aesthetic grain effect
- `HeroIntro.tsx`: Landing page hero section
- `LayoutWrapper.tsx`: Consistent layout structure
- `ArchiveTimeline.tsx`: Grid display of cases

### 5. Pages
- `/` - Home page with featured cases
- `/case-files` - Browse all cases with search
- `/case-files/[slug]` - Case detail with related cases sidebar
- `/themes/[tag]` - Filter cases by psychological theme
- `/memoir` - Personal narratives
- `/memoir/[slug]` - Memoir detail pages
- `/about` - Project information and privacy policy
- `/contact` - Contact and support resources
- `/historical-archive` - Alphabetical case listing
- `/psychology` - Psychological framework and concepts

### 6. Content Files
- `content/case-files/hypervigilance.mdx` - Threat detection response
- `content/case-files/trauma-bonding.mdx` - Shared trauma connections
- `content/case-files/emotional-flashbacks.mdx` - Emotional re-experiencing
- `content/memoir/ember-season.mdx` - Personal resilience narrative

## Build Output Validation

✓ **No embeddings.json**: Raw vectors never written to disk
✓ **related-cases.json**: Contains only slug + score pairs
✓ **search-index.json**: Serializable items for client-side Fuse.js
✓ **22 Static Pages**: All routes pre-rendered for ISR
✓ **TypeScript**: All errors resolved, strict type checking
✓ **Privacy**: Complete offline build capability

## Generated Files

```
public/
├── related-cases.json    (semantic relationships, no vectors)
├── search-index.json     (searchable content index)
.next/
├── server/               (optimized Next.js runtime)
├── static/               (client-side assets)
└── [pre-rendered pages]  (22 static HTML pages)
```

## Manual Override Feature

Case files can override auto-linking by specifying `related_cases` in frontmatter:

```yaml
---
title: "Case Title"
related_cases:
  - manual-case-slug
  - another-case-slug
---
```

If `related_cases` is present and non-empty, auto-linked cases are ignored.

## Deployment

### First Build
```bash
npm install
npm run build
```

### Offline Rebuild (after model cache)
```bash
TRANSFORMERS_OFFLINE=1 npm run build
```

### Development
```bash
npm run dev
```

### Production Start
```bash
npm start
```

## Design System

- **Colors**: Charcoal (#1a1a1a), Storm (#2a2a2a), Ash (#8b8b8b), Ember (#d4a574)
- **Typography**: Georgia serif for headings, Courier mono for labels
- **Aesthetic**: Documentary archive feel with grain overlay
- **Responsive**: Mobile-first design with Tailwind CSS

## Technology Stack

- Next.js 14.2.0
- React 18.3.1
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- next-mdx-remote 5.0.0
- Fuse.js 7.0.0
- @huggingface/transformers 4.2.0
- gray-matter 4.0.3
- framer-motion 10.16.4

## Privacy Compliance

✓ No external API calls for embeddings
✓ No telemetry or tracking
✓ No raw vector data in public assets
✓ Deterministic build process
✓ Complete source transparency
✓ Offline-capable architecture

## Production Ready

This codebase is:
- ✓ Fully typed with TypeScript
- ✓ Pre-rendered for static hosting
- ✓ Optimized for performance
- ✓ Privacy-compliant
- ✓ Deployable to any Node.js host or static CDN
- ✓ Scalable for additional content

---

**Build Date**: May 17, 2026
**Build Status**: ✓ Successful
**Next.js Version**: 14.2.35
