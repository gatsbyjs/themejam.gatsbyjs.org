import React from 'react';
import Figure from 'gatsby-theme-marketing-sanity/src/components/figure'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Icon from "./Icon"

const RuleBlock = ({ node }) => {
  return (
    <div sx={{ display: 'grid', gridRowGap: '2', gridColumnGap: '4', gridTemplateAreas: `"icon title" "icon description"`, gridTemplateRows: '', textAlign: 'left', marginBottom: '4' }}>
        <Icon node={node.icon} />
        <Styled.h3 sx={{gridArea: 'title'}}>{node.title}</Styled.h3>
        <Styled.p sx={{gridArea: 'description'}}>{node.description}</Styled.p>
    </div>
  );
};

export default RuleBlock;
