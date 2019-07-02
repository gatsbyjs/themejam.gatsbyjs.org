/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const CodeBlock = ({ node }) => {
  return (
    <Styled.code>
      <Styled.pre>{node.code}</Styled.pre>
    </Styled.code>
  );
};

export default CodeBlock;
