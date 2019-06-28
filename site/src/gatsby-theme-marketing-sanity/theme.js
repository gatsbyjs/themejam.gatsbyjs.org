export const theme = {
  space: [0, 4, 8, 16, 32],
  breakpoints: ['750px'],
  fonts: {
    heading: `Futura PT`,
    body:
      'Futura PT, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    text: ['#232129', '#635E69'],
    gray: ['#efefef', '#ddd', '#333', '#111'],
    background: '#fff',
    primary: '#663399',
    muted: '#D9BAE8',
  },
  radii: [4, 32],
  sizes: {
    default: '90vw',
    max: '100%',
  },
  zIndices: [-1, 1],
  styles: {
    Layout: {
      color: 'gray.2',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
    },
    Header: {
      backgroundColor: 'background',
      color: 'gray.3',
      fontWeight: 'bold',
      margin: '0 auto',
      maxWidth: 'max',
      padding: 3,
      width: 'default',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    Main: {
      margin: '0 auto',
      maxWidth: '100%',
      width: 'default',
    },
    Container: {
      padding: 3,
    },
    h1: {
      color: 'gray.3',
      fontSize: 5,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0',
    },
    ul: {
      margin: 0,
      listStyle: 'none',
      padding: 0,
    },
    li: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridGap: '2',
      alignItems: 'center',
      color: 'muted',
      '&:focus-within,&:hover': {
        color: 'primary',
      },
    },
    code: {
      display: 'inline-block',
      backgroundColor: 'gray.0',
      border: '1px solid',
      borderColor: 'gray.1',
      borderRadius: 4,
      fontSize: 0,
      lineHeight: 'heading',
      padding: 1,
    },
    p: {
      margin: 0,
    },
  },
};

export default theme;
