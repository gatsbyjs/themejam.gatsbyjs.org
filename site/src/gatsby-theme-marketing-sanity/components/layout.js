/** @jsx jsx */
import Helmet from 'react-helmet';
import { jsx, Layout as ThemeLayout, Main, Container } from 'theme-ui';
import Header from '../../components/Header';
import useSiteMetadata from 'gatsby-theme-marketing-sanity/src/hooks/use-site-metadata';

// Import Futura PT typeface
import '../../fonts/Webfonts/futurapt_book_macroman/stylesheet.css';
import '../../fonts/Webfonts/futurapt_demi_macroman/stylesheet.css';
import '../../fonts/Webfonts/futurapt_bold_macroman/stylesheet.css';

const Layout = ({ title, description, children }) => {
  const meta = useSiteMetadata();

  return (
    <ThemeLayout>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={description} />
        <html lang="en-US" />
        <link href="https://cdn.sanity.io/" rel="preconnect" crossorigin />
        <link
          rel="preload"
          href="/static/ftn65-webfont-0ddc10d20bd3c3e162e4ea9b49c82856.woff2"
          as="font"
        />
        <link
          rel="preload"
          href="/static/ftn45-webfont-c2439033a37a428d148b673062131f47.woff2"
          as="font"
        />
      </Helmet>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
