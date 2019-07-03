/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby';
import theme from '../gatsby-theme-marketing-sanity/theme';

const Button = ({ children, href, radius = 0, toLink, node, ...props }) => {
  return (
    <button
      onClick={() => {
        // navigate to rel or external link if provided
        toLink && navigate(toLink);
        node && window.location.assign(node.linkUrl);
      }}
      sx={{
        fontSize: '1',
        fontFamily: 'Futura',
        backgroundColor: 'primary',
        borderRadius: radius,
        color: 'background',
        marginBottom: '5',
        paddingTop: '2',
        paddingBottom: '2',
        paddingLeft: '3',
        paddingRight: '3',
        whiteSpace: 'nowrap',
        '&:focus': {
          outline: 0,
          boxShadow: `0 0 0 3px ${theme.colors.muted}`,
        },
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      {...props}
    >
      {(node && node.text) || children}
    </button>
  );
};

export default Button;
