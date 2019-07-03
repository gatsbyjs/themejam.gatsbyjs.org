/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const Lede = ({ node }) => {
  return (
    <Styled.p
      sx={{
        textAlign: 'center',
        display: 'block',
        color: 'text.1',
        fontSize: '3',
      }}
    >
      {node.text}
    </Styled.p>
  );
};

export default Lede;
