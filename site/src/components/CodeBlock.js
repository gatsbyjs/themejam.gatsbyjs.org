import React from 'react';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

const CodeBlock = ({ node }) => {
  return (
    <Styled.code>
      <Styled.pre>
        {node.code}
        {/* <PortableText blocks={node.codeBlockContent} /> */}
      </Styled.pre>
    </Styled.code>
  );
};

export default CodeBlock;
