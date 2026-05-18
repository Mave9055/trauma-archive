# Deployment Guide

## Quick Start

### Local Development
```bash
cd trauma-archive
npm install
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Option 3: Node.js Host
```bash
npm install --production
npm run build
npm start
```

### Option 4: Static Export (CDN)
```bash
# Modify next.config.js to add:
# output: 'export'
npm run build
# Upload .next/out to CDN
```

## Environment Variables

No environment variables required. The project is fully self-contained.

## Offline Builds

After first build, use offline mode to avoid re-downloading the model:

```bash
TRANSFORMERS_OFFLINE=1 npm run build
```

## Adding New Content

### Add a Case File
1. Create `content/case-files/my-case.mdx`
2. Include frontmatter:
```yaml
---
title: "Case Title"
excerpt: "Brief description"
psychological_breakdown: "Analysis"
survival_function: "Function"
themes:
  - "Theme 1"
  - "Theme 2"
related_cases:  # Optional: override auto-linking
  - "other-case"
---
```
3. Run `npm run build`

### Add a Memoir
1. Create `content/memoir/my-memoir.mdx`
2. Include frontmatter:
```yaml
---
title: "Memoir Title"
excerpt: "Brief description"
---
```
3. Run `npm run build`

## Performance Optimization

- **ISR**: All pages revalidate every 3600 seconds
- **Static Generation**: 22 pages pre-rendered at build time
- **Search**: Client-side Fuse.js (no server calls)
- **Caching**: Next.js automatic cache optimization

## Monitoring

Check build logs for:
- ✓ Search index generation
- ✓ Embedding computation
- ✓ Related cases generation
- ✓ Static page pre-rendering

## Troubleshooting

### Model Download Issues
```bash
# Clear cache and rebuild
rm -rf node_modules/.cache
npm run build
```

### TypeScript Errors
```bash
# Regenerate types
rm -rf .next
npm run build
```

### Search Not Working
- Verify `public/search-index.json` exists
- Check browser console for fetch errors
- Ensure JSON is valid: `npm run build`

## Security

- No external API calls
- No user data collection
- No authentication required
- Static content delivery
- CSP headers recommended

## Scaling

To add more content:
1. Add MDX files to `content/case-files/` or `content/memoir/`
2. Run `npm run build`
3. All indexing and linking happens automatically
4. No database required

---

For questions or issues, refer to BUILD_SUMMARY.md
