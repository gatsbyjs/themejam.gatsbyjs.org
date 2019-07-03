/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const ButtonBlock = ({ node }) => {
  return (
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <Styled.b
        as={OutboundLink}
        href={node.linkUrl}
        sx={{
          textDecoration: 'none',
          borderRadius: '0',
        }}
      >
        {node && node.text}
      </Styled.b>
    </div>
  );
};

export default ButtonBlock;
