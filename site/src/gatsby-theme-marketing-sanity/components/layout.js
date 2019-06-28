import React from 'react';
import { Layout as ThemeLayout, Main, Container } from 'theme-ui';
import Header from '../../components/Header';
import { Link } from 'gatsby';
import useSiteMetadata from 'gatsby-theme-marketing-sanity/src/hooks/use-site-metadata';

const Layout = ({ children }) => {
  const meta = useSiteMetadata();

  return (
    <ThemeLayout>
      <Header>
        <Link to={meta.basePath}>{meta.title}</Link>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
