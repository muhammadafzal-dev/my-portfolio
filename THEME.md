# Theme Audit (Source: /portfolio)

This file captures the theme palette and usage patterns observed in the `portfolio` project so we can apply the same visual system to `my-portfolio`.

## Core Palette (Observed)
Primary neutrals are based on Tailwind `zinc`, with a teal accent.

Light mode (dominant usage):
- Background: `zinc-50`
- Surface: `white`
- Text primary: `zinc-800` / `zinc-900`
- Text muted: `zinc-600` / `zinc-500`
- Border: `zinc-100` / `zinc-200`
- Accent: `teal-500` (hover: `teal-600`)

Dark mode (dominant usage):
- Background: `black` / `zinc-900`
- Surface: `zinc-900` / `zinc-800`
- Text primary: `zinc-100` / `zinc-200`
- Text muted: `zinc-400` / `zinc-500`
- Border: `zinc-700/40`
- Accent: `teal-400` (hover: `teal-400`)

Supporting colors used in code blocks (Prism):
- `pink-400`, `sky-200`, `teal-300`, `zinc-300/400/500`

## How It’s Applied in `portfolio`
- Base UI uses neutral zinc ramps for text/background/borders.
- Accent color is teal for links, focus/hover states, and gradient underline.
- Dark mode is class-based (`darkMode: 'class'`), with explicit `dark:` variants.
- Typography plugin uses zinc/teal tokens for prose.

## Token Mapping in `my-portfolio`
These tokens are now defined in `app/globals.css` and mapped to Tailwind color utilities:

Light:
- `--color-background` → `zinc-50`
- `--color-surface` → `white`
- `--color-foreground` → `zinc-800`
- `--color-foreground-strong` → `zinc-900`
- `--color-muted` → `zinc-600`
- `--color-muted-foreground` → `zinc-500`
- `--color-border` → `zinc-200`
- `--color-accent` → `teal-500`
- `--color-accent-strong` → `teal-700`
- `--color-accent-soft` → `teal-100`

Dark:
- `--color-background` → `black`
- `--color-surface` → `zinc-900`
- `--color-foreground` → `zinc-200`
- `--color-foreground-strong` → `zinc-100`
- `--color-muted` → `zinc-400`
- `--color-muted-foreground` → `zinc-500`
- `--color-border` → `zinc-700`
- `--color-accent` → `teal-400`
- `--color-accent-strong` → `teal-300`
- `--color-accent-soft` → `teal-900`

## Usage Guidance
Prefer semantic tokens instead of raw colors:
- Backgrounds: `bg-background`, `bg-surface`
- Text: `text-foreground`, `text-foreground-strong`, `text-muted`
- Accents: `text-accent`, `hover:text-accent`, `bg-accent`
- Borders: `border-border`

This keeps the UI consistent with the original `portfolio` theme while staying flexible for future adjustments.
