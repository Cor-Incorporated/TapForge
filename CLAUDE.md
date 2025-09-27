# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format all files with Prettier

### Code Quality Checks

- `npx astro check` - Run TypeScript type checking for Astro files

## Architecture

### Tech Stack

- **Astro 5.8** - Static site generator with island architecture
- **React 19** - For interactive components
- **TypeScript** - Strict mode enabled
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **MDX** - For rich content with components

### Project Structure

- `src/pages/` - File-based routing, each `.astro` file becomes a route
- `src/components/` - Reusable Astro components (Hero, FAQ, Features, etc.)
- `src/layouts/` - Page layouts containing:
  - `components/` - Layout-specific components
  - `shortcodes/` - MDX shortcode components (Button, Accordion, Video, etc.)
- `src/content/` - Content collections for structured content
- `src/types/` - TypeScript type definitions

### Import Path Aliases

```typescript
@/components/* → ./src/layouts/components/*
@/shortcodes/* → ./src/layouts/shortcodes/*
@/helpers/* → ./src/layouts/helpers/*
@/partials/* → ./src/layouts/partials/*
@/* → ./src/*
```

### Key Architectural Decisions

- **Mobile-first**: 80% of users expected on smartphones
- **Multilingual**: 5-language support (JP, EN, ZH, KO, ES) with prefix-based routing
- **Component-based**: Astro components for static parts, React for interactivity
- **Performance-focused**: Static generation with selective hydration

## Internationalization (i18n)

### Language Support
- Japanese (ja) - Default language, no prefix
- English (en) - `/en/` prefix
- Chinese (zh) - `/zh/` prefix
- Korean (ko) - `/ko/` prefix
- Spanish (es) - `/es/` prefix

### Translation System
- **Translation Files**: `src/locales/{lang}/translation.json`
- **Dynamic Loading**: Translations are loaded asynchronously for better performance
- **Utility Functions**: `src/utils/i18n.ts` provides translation loading and language detection
- **Fallback**: Automatic fallback to Japanese if translation fails

### URL Structure
- Main pages: `/`, `/en/`, `/zh/`, `/ko/`, `/es/`
- Legal pages: `/terms/`, `/en/terms/`, `/zh/terms/`, etc.
- All URLs use trailing slashes (configured in `astro.config.mjs`)

### Components Pattern
```astro
const { lang } = Astro.props;
const locale = lang || getLocaleFromPathname(Astro.url.pathname);
const translations = await loadTranslation(locale);
const t = translations.componentName;
```

### Legal Pages
- Language-specific pages in `src/pages/{lang}/terms.astro` and `src/pages/{lang}/privacy.astro`
- Japanese pages in `src/pages/terms.astro` and `src/pages/privacy.astro` (no prefix)
- Company: Cor.株式会社 (https://cor-jp.com/)
- Last updated: 2025年9月20日
