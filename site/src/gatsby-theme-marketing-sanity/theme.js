import baseTheme from 'gatsby-theme-marketing-sanity/src/theme';
import { merge } from 'lodash';

// shadowing the base theme defined in the marketing theme to override design tokens
export const theme = merge(baseTheme, {
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ['750px'],
  buttons: {
    primary: {
      fontSize: '1',
      fontFamily: 'Futura',
      backgroundColor: 'primary',
      border: 'none',
      borderRadius: '0',
      color: 'background',
      marginTop: 4,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      whiteSpace: 'nowrap',
      '&:focus': {
        outline: 0,
        boxShadow: `0 0 0 3px #D9BAE8`,
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
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
  shadows: {
    elevated: {
      boxShadow: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
    },
  },
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
    b: {
      fontSize: '1',
      fontFamily: 'Futura',
      backgroundColor: 'primary',
      border: 'none',
      borderRadius: '0',
      color: 'background',
      marginTop: 4,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      whiteSpace: 'nowrap',
      '&:focus': {
        outline: 0,
        boxShadow: `0 0 0 3px #D9BAE8`,
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
    code: {
      width: '100%',
      overflowX: 'auto',
      color: 'code',
      backgroundColor: 'codeBackground',
    },
    h1: {
      marginTop: 4,
      textAlign: 'center',
    },
    h2: {
      margin: 0,
      marginTop: 5,
    },
    h3: {
      margin: 0,
    },
    ul: {
      marginTop: 3,
      borderTop: 'none',
      listStyle: 'none',
    },
    ol: {
      paddingLeft: 3,
    },
    li: {
      marginTop: 2,
      padding: 0,
      borderBottom: 'none',
      color: 'text',
      '&:focus-within,&:hover': {
        cursor: 'primary',
        backgroundColor: 'transparent',
      },
    },
    p: {
      color: 'text',
      margin: 0,
      marginTop: 3,
    },
  },
});

export default theme;
