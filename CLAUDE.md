# CLAUDE.md

## Project Overview

## Commands

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
pnpm typecheck    # TypeScript type checking (tsc --noEmit)
```


## Path Aliases

- `@/*` → project root (e.g., `@/components/ui/button`, `@/lib/utils`)

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add <component-name>
```


## GENERAL CODE RULES

- ALWAYS use npm/CLI commands for package installation and project initialization first, THEN edit config files.
- NEVER manually write package.json dependencies - use `npm install` commands instead.
- NEVER insert emoji into any file. Use unicode codepoints instead.
- ONLY use valid, working unicode codepoints that render correctly.
- For i18n/translation files: ALWAYS write actual language characters (Amharic, Arabic). NEVER use unicode escape sequences like \u1230.
- ALWAYS respect `.gitignore` patterns.
- NEVER allow a branch or PR to contain more than 40 changed files. Split into smaller branches.
- ALWAYS check latest official docs (NextJS, Prisma, React..) BEFORE writing code.
- ALWAYS verify installed package versions.
- NEVER assume API patterns from older versions.
- ALWAYS test each small step before moving to the next.

---

## GIT COMMIT RULES

- ALWAYS use single-line commit messages only.
- NEVER include multi-line body text.
- NEVER include "Co-Authored-By" or "Generated with Claude Code".
- ALWAYS use conventional commit: `type(scope): description`
- Example: `feat(auth): add login endpoint`
- ALWAYS commit when changes exceed 8 new files OR 10 edited files.
- NEVER let a single commit grow too large.

---

## TYPESCRIPT RULES

- ALWAYS use `const`. NEVER use `let` or `var`.
- ALWAYS respect biome config in `biome.jsonc`.
- ALWAYS specify exact package versions in `package.json`.
- NEVER add unnecessary `console.log()`.
- NEVER use relative paths for imports. Use aliases.
- ALWAYS use import aliases (`#api/*`, `#admin/*`). This is MANDATORY and CRITICAL.
- NEVER add `.js` extension to imports. Use extensionless imports.
- NEVER add explicit types if inferable.
- ALWAYS add `as const` to object literals when helpful.
- NEVER add return type annotations unless type stubs.
- NEVER use try/catch (use Result pattern or let errors propagate).
- ALWAYS prefer functional style. Avoid mutable variables.
- NEVER add code comments unless requested.
- NEVER allow a file larger than 600 lines.
- NEVER allow a function larger than 100 lines (except React components).
- NEVER use `window`. Use `globalThis`.
- NEVER use `forEach()`. Use `for...of`.
- ALWAYS use arrow functions. Never function declarations unless overloads needed.
- NEVER use `.then()` promises. Use `async`/`await`.
- NEVER use magic numbers/strings. Use named constants.
- ALWAYS define config values in constant object with `as const`.

---

## REACT RULES

- ALWAYS use `React.useCallback()` for functions inside components.
- ALWAYS use `React.useMemo()` for computed values inside components.
- ALWAYS use `React.memo()` for all components.
- ALWAYS provide `displayName` to all components.
- ALWAYS provide comparison function to `React.memo()`.
- NEVER set state from `scroll`, `resize`, `keyDown`, `keyPress` handlers.
- NEVER allow a component larger than 300 lines.
- NEVER render a component as function call. Use JSX element.
- NEVER create `index.ts` barrel files except rare essential cases.
- ALWAYS make components responsive (mobile, tablet, desktop).
- ALWAYS use TanStack Table for data tables.
- ALWAYS use TanStack Query for data fetching. NEVER use `useEffect` for fetching.

---

## MEMORY LEAK PREVENTION (React)

- ALWAYS cleanup subscriptions, timers, event listeners in useEffect cleanup.
- NEVER create subscriptions/timers without cleanup.
- ALWAYS use AbortController for fetch requests that may cancel.
- NEVER store component refs in module-level variables.
- ALWAYS check mounted state before updating state in async callbacks.
- NEVER create closures capturing large objects unnecessarily.
- ALWAYS use WeakMap/WeakSet when caching component instances.
- NEVER add window/document listeners without cleanup.
- NEVER create new object/array refs in render without useMemo.
- ALWAYS use stable callback refs with useCallback for handlers passed to children.

---



```

---

## FRONTEND PATTERNS

### Data Fetching (TanStack Query)

```typescript
// ✅ Good
const MenuList = React.memo(() => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['menuItems'],
    queryFn: menuItemService.getAll,
  });
  
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <List items={data} />;
});
MenuList.displayName = 'MenuList';

// ❌ Bad - useEffect for fetching
useEffect(() => {
  fetch('/api/items').then(r => r.json()).then(setData);
}, []);
```

### Component with Memo

```typescript
'use client';

interface Props {
  readonly count: number;
  readonly onIncrement: () => void;
}

const Counter = React.memo(
  ({ count, onIncrement }: Props) => (
    <button onClick={onIncrement}>{count}</button>
  ),
  (prev, next) => prev.count === next.count
);
Counter.displayName = 'Counter';
```

---



## FILE NAMING

- Components: `PascalCase.tsx` → `MenuItemCard.tsx`
- Hooks: `useMenuItems.ts`
- Services: `menu-item.service.ts`
- Tests: `menu-item.service.spec.ts`
- DTOs: `create-menu-item.dto.ts`

---

## TESTING RULES

- DEFAULT: Always test through the browser UI using Playwright MCP tools (click, type, snapshot, navigate).
- Do NOT use API fetch calls, curl, or `browser_evaluate` with HTTP requests unless explicitly instructed to.
- To verify data, navigate to the relevant UI page and read it visually.


## YOUR ROLE

You write code. I test it. If I report a bug, fix it and ask me to verify.

Ask questions when unclear. Don't assume.

Read files before making changes.

---
