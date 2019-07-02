import baseTheme from 'gatsby-theme-marketing-sanity/src/theme';
import { merge } from 'lodash';

// shadowing the base theme defined in the marketing theme to override design tokens
export const theme = merge(baseTheme, {
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ['750px'],
  fonts: {
    heading: `Futura PT`,
    body:
      'Futura PT, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  colors: {
    // gray: ['#efefef', '#ddd', '#333', '#111'],
    // background: '#fff',
    // primary: '#663399',
    muted: '#D9BAE8',
    text: ['#232129', '#635E69'],
    code: '#efefef',
    codeBackground: '#232129',
  },
  radii: [4, 32],
  sizes: {
    default: '90vw',
    max: 'inherit',
  },
  zIndices: [-1, 1],
  styles: {
    Header: {
      backgroundColor: 'background',
      color: 'gray.3',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    Main: {
      maxWidth: '650px',
    },
    code: {
      width: '100%',
      overflowX: 'auto',
      color: 'code',
      backgroundColor: 'codeBackground',
    },
    h2: {
      margin: 0,
    },
    h3: {
      margin: 0,
    },
    ul: {
      margin: 0,
      padding: 0,
      borderTop: 'none',
      listStyle: 'none',
    },
    li: {
      padding: 0,
      borderBottom: 'none',
      color: 'primary',
      '&:focus-within,&:hover': {
        cursor: 'primary',
        backgroundColor: 'transparent',
      },
    },
    p: {
      margin: 0,
      marginBottom: '5',
    },
  },
});

export default theme;
