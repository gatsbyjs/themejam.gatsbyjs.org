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
        <meta
          name="description"
          content="Gatsby example site using Styled Components"
        />
        <html lang="en-US" />
      </Helmet>
      <Header />
      <Main>
        <Container sx={{ textAlign: 'center' }}>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
