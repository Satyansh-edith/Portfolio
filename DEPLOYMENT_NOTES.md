# Deployment & Fix Notes

## Latest Changes (2025-07-07)

### Fixed: Next.js 16 Turbopack Disk-Bloat Bug
- **Issue**: Unbounded growth of `.next/cache/turbopack` during dev sessions (16.x bug)
- **Solution**: Disabled `turbopackFileSystemCacheForDev` in `next.config.ts`
- **Safe to re-enable**: Once Next.js 16.3 is released as stable

### Dependency Updates
- Next.js: `16.2.6` → `16.2.10` (latest stable 16.x)
- React: `19.2.4` (already latest)
- React-DOM: `19.2.4` (already latest)

### Dev Server Performance
- `.next` folder stays at ~10MB (no unbounded growth)
- Build time: ~1.5s
- Dev startup: ~119ms

## Live Contribution Graph
The GitHub contribution graph fetches live data from:
- **Contributions API**: `https://github-contributions-api.jogruber.de/v4/{username}?y=last`
- **User Stats**: `https://api.github.com/users/{username}`
- **Repositories**: `https://api.github.com/users/{username}/repos`

Cache: 15-minute localStorage cache with fallback to mock data if APIs fail

## Setup Instructions
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```
