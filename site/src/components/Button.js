/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby'
import theme from '../gatsby-theme-marketing-sanity/theme'

const Button = ({ children, href, radius = 0, toLink, ...props }) => {
  console.log(theme)
  return (
    <button
      onClick={() => {
        // navigate to rel or external link if provided
        href && window.location.assign(href)
        toLink && navigate(toLink)
      }}
      sx={{
        fontSize: '1',
        fontFamily: 'Futura',
        backgroundColor: 'primary',
        borderRadius: radius,
        color: 'background',
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
      {children}
    </button>
  );
};

export default Button;
