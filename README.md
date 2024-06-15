# Nx + Next + Material UI Component Selectors Problem

There's a problem running `Nx` + `Next` + `Material UI` when using component selectors inside a library. It does work when using `Emotion` directly or using component selectors inside the application.

To test it out you can run:

```bash
npm install && npx nx dev emotion-test
```

If you then navigate to `http://localhost:3000` you will enouncter an error that component selectors are not allowed without the babel plugin.

The offending component is `libs/event/website/src/lib/event-website.tsx`

## What I tried

### Import Map

It used to work when specifying the import map in the `next.config.js` like so:

```typescript
emotion: {
  sourceMap: true,
  importMap: {
    '@mui/material': {
      styled: {
        canonicalImport: ['@emotion/styled', 'default'],
        styledBaseImport: ['@mui/material', 'styled'],
      },
    },
    '@mui/material/styles': {
      styled: {
        canonicalImport: ['@emotion/styled', 'default'],
        styledBaseImport: ['@mui/material/styles', 'styled'],
      },
    },
  },
},
```

This does not seem to work anymore.

### Using Emotion directly

When replacing all occurances of `import { styled } from '@mui/material';` to `import styled from '@emotion/styled';` it works as expected.

The issue that comes with this, is that one loses the interface of the theme and others that Material UI gives.

### Moving the component selector to the app

When moving the component selector to the application than the library, the application works as expected. Which leads me to believe this is a problem with `Nx`.
