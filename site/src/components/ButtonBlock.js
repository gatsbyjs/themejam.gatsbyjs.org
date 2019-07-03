/** @jsx jsx */
import { jsx, as } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const ButtonBlock = ({ node }) => {
  return (
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <OutboundLink
        href={node.linkUrl}
        sx={{
          variant: 'buttons.primary',
          textDecoration: 'none',
          borderRadius: '0',
        }}
      >
        {node && node.text}
      </OutboundLink>
    </div>
  );
};

export default ButtonBlock;
