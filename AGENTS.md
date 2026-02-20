# AGENTS.md - Project Architecture Documentation

> **Purpose**: This document describes the architecture of the valeronlol.github.io personal website project for AI assistants working in this codebase.

## Project Overview

A static personal website built with **Astro** (v5.15.9) and **Svelte** (v5.43.10) featuring:
- Multi-language support (English/Russian)
- Dark/light theme toggle with localStorage persistence
- Markdown-based content management
- Static site generation for GitHub Pages deployment

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.15.9 | Static site generator, SSR framework |
| Svelte | 5.43.10 | Reactive UI components |
| @astrojs/svelte | 7.2.2 | Astro-Svelte integration |
| marked | 16.4.2 | Markdown parsing |
| TypeScript | 5.9.3 | Type safety |

---

## Project Structure

```
/home/va/work/valeronlol.github.io/
├── astro.config.mjs          # Astro configuration
├── svelte.config.js          # Svelte compiler options
├── tsconfig.json             # TypeScript with path aliases
├── package.json              # Dependencies
├── deploy.sh                 # Deployment script
├── public/                   # Static assets (images, fonts, favicons)
│   ├── assets/               # Images, icons, PDFs
│   ├── fonts/                # Lato, SourceSansPro
│   └── fav/                  # Favicon files
├── src/
│   ├── pages/                # Astro pages (routes)
│   ├── layouts/              # Page layouts
│   ├── components/           # Reusable components
│   │   ├── common/           # Shared components
│   │   ├── Header/           # Header section components
│   │   ├── Footer/           # Footer section components
│   │   └── hoc/              # Higher-order components
│   ├── store/                # Svelte stores (global state)
│   ├── i18n/                 # Internationalization
│   │   ├── languages.js      # Language configuration
│   │   └── translations/     # JSON translation files
│   ├── utils/                # Utility functions
│   ├── constants.js          # Application constants
│   ├── styles/               # Global CSS
│   └── markdown/             # Markdown content (by page)
│       ├── main/             # About me content
│       ├── work_experience/  # Work experience content
│       ├── hobby/            # Hobby content
│       └── blog/             # Blog content
```

---

## Path Aliases (tsconfig.json)

```typescript
"$/*"       → "./src/*"
"$public/*"  → "./public/*"
"$comp/*"    → "./src/components/*"
"$store/*"   → "./src/store/*"
"$i18n/*"    → "./src/i18n/*"
"$const"     → "./src/constants.js"
"$utils/*"   → "./src/utils/*"
```

---

## State Management

### Svelte Stores (`src/store/index.js`)

| Store | Type | Purpose |
|-------|------|---------|
| `lang` | `writable<string>` | Current language ('en' or 'ru') |
| `theme` | `writable<string \| null>` | Current theme ('dark' or null for light) |

**Usage Pattern**:
```svelte
<script>
  import { lang, theme } from '$store/index.js'
  
  // Reactive subscription
  $: currentLang = $lang
  $: currentTheme = $theme
</script>
```

---

## Routing

### Page Structure (`src/pages/`)

| File | Route | Content |
|------|-------|---------|
| `index.astro` | `/` | Main/About page |
| `work_experience.astro` | `/work_experience` | Work experience |
| `blog.astro` | `/blog` | Blog posts |
| `hobby.astro` | `/hobby` | Hobby section |

### Route Configuration (`src/utils/routes.json`)

```json
[
  { "target": "/", "title": "main_page" },
  { "target": "/work_experience", "title": "work_experience" },
  { "target": "/blog", "title": "blog" },
  { "target": "/hobby", "title": "hobby" }
]
```

---

## Internationalization (i18n)

### Supported Languages (`src/i18n/languages.js`)

```javascript
const languages = ['en', 'ru']
const mapLanguages = { en: 'en', ru: 'ru' }
```

### Translation Keys (`src/i18n/translations/*.json`)

| Key | Description |
|-----|-------------|
| `my_name` | Author name |
| `main_page` | Navigation label |
| `work_experience` | Navigation label |
| `hobby` | Navigation label |
| `blog` | Navigation label |
| `en` | Language label |
| `ru` | Language label |

### Browser Language Detection (`src/utils/languages.js`)

Auto-detects browser language and falls back to 'en' if unsupported.

---

## Theme System

### Constants (`src/constants.js`)

```javascript
const themes = {
  DEFAULT: 'default',  // Light theme
  DARK: 'dark'         // Dark theme
}
const storageThemeName = 'theme'
const app = 'app'
```

### Theme Flow

1. **Initialization** (`ThemeProvider.svelte`):
   - Reads `localStorage.getItem('theme')` on mount
   - Applies 'dark' class to `#app` element if dark theme stored
   - Sets theme store to null (light) or 'dark'

2. **Toggle** (`ThemeToggle.svelte`):
   - Click sun icon → removes dark theme, clears localStorage
   - Click moon icon → applies dark theme, saves to localStorage
   - Updates CSS via `#app.dark` class

3. **Styling**:
   - Light theme: Default styles
   - Dark theme: `:global(#app.dark ...)` selectors override colors

---

## Content Management (Markdown)

### Architecture

Content is stored as Markdown files in `src/markdown/{page}/{lang}.md`

```
src/markdown/
├── main/
│   ├── en.md          # About me (English)
│   └── ru.md          # About me (Russian)
├── work_experience/
│   ├── en.md
│   └── ru.md
├── hobby/
│   ├── en.md
│   └── ru.md
└── blog/
    ├── en.md
    └── ru.md
```

### Rendering Flow

1. **Page** (`src/pages/*.astro`):
   ```astro
   <MarkdownProvider page='main' />
   ```

2. **MarkdownProvider.astro** (Build-time):
   - Reads both language versions using `node:fs/promises`
   - Parses Markdown with `marked.parse()`
   - Passes HTML to Svelte component

3. **MarkdownLanguageProvider.svelte** (Runtime):
   ```svelte
   <script>
     export let EN = ''
     export let RU = ''
     
     $: markdown = {
       [mapLanguages.ru]: RU,
       [mapLanguages.en]: EN,
     }[$lang]
   </script>
   
   {@html markdown}
   ```

---

## Component Architecture

### Higher-Order Components (`src/components/hoc/`)

| Component | Responsibility |
|-----------|--------------|
| `ThemeProvider.svelte` | Initializes theme from localStorage on client |
| `MarkdownProvider.astro` | Loads and parses Markdown at build time |
| `MarkdownLanguageProvider.svelte` | Switches between language versions at runtime |
| `WithTranslations.svelte` | (Present but usage not confirmed) |

### Header Components (`src/components/Header/`)

| Component | Framework | Hydration |
|-----------|-----------|-----------|
| `index.astro` | Astro | - |
| `Avatar.astro` | Astro | - |
| `Title.svelte` | Svelte | `client:load` |
| `LanguageToggle.svelte` | Svelte | `client:load` |
| `ThemeToggle.svelte` | Svelte | `client:load` |
| `Navigation.svelte` | Svelte | `client:load` |
| `CurrentPageTitle.svelte` | Svelte | `client:load` |

**Note**: Most header components use `client:load` because they interact with browser APIs (localStorage, window.location) and stores.

### Footer Components (`src/components/Footer/`)

| Component | Framework |
|-----------|-----------|
| `index.astro` | Astro |
| `SocialPanel.astro` | Astro |

---

## Layout System

### Main Layout (`src/layouts/Main.astro`)

```astro
<html lang={mapLanguages.en}>
  <head><!-- Meta tags, favicons --></head>
  <body>
    <div id='app'>
      <ThemeProvider client:load />
      <Header/>
      <main>
        <div class='wrapper'>
          <slot />  <!-- Page content -->
        </div>
      </main>
      <Footer/>
    </div>
  </body>
</html>
```

**Responsive Breakpoints**:
- 1200px: Max content width
- 1024px: Reduced padding (90px → 20px in header)
- 760px: Further reduced padding (50px → 30px)
- 680px: Header height increases (mobile layout)
- 420px: Minimal padding (10px)

---

## Build Configuration

### Astro Config (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
    integrations: [svelte()],
});
```

### Svelte Config (`svelte.config.js`)

```javascript
import { vitePreprocess } from '@astrojs/svelte';

export default {
    preprocess: vitePreprocess(),
    compilerOptions: {
        experimental: {
            async: true  // Enable async/await in components
        }
    }
}
```

---

## Common Patterns

### Adding a New Page

1. Create page file: `src/pages/my-page.astro`
2. Create content files: `src/markdown/my-page/en.md` and `src/markdown/my-page/ru.md`
3. Add route to `src/utils/routes.json`:
   ```json
   { "target": "/my-page", "title": "translation_key" }
   ```
4. Add translation key to `src/i18n/translations/en.json` and `ru.json`

### Using the Language Store

```svelte
<script>
  import { lang } from '$store/index.js'
  
  $: isEnglish = $lang === 'en'
</script>
```

### Theme-aware Styling

```css
/* Light theme (default) */
.my-component {
  background: #fff;
  color: #333;
}

/* Dark theme override */
:global(#app.dark .my-component) {
  background: #15161B;
  color: #fff;
}
```

---

## Deployment

- **Target**: GitHub Pages
- **Homepage**: https://valeronlol.github.io/
- **Script**: `deploy.sh`

---

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Key Constraints

1. **Static Generation**: Site is pre-built; dynamic content requires client-side JavaScript
2. **Svelte Stores**: Only reactive in `.svelte` components, not `.astro` files
3. **Hydration**: Components using browser APIs must use `client:*` directives
4. **Markdown**: Content is loaded at build time; edits require rebuild
5. **Language**: Only English and Russian supported; uses 2-letter codes