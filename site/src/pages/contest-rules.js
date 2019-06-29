import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';

const RulesPage = () => {
  const sanityData = useStaticQuery(graphql`
    query {
      sanityPage(slug: { current: { eq: "rules" } }) {
        id
      }
    }
  `);

  console.log(sanityData);

  return (
    <Layout>
      <Hero
        headline="Contest Rules"
        subHeadline="Everything you need to know to aim for the top"
      />
      Judging criteria
    </Layout>
  );
};

export default RulesPage;
