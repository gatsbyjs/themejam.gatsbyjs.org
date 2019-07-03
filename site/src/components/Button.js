/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby';

const Button = ({ children, href, radius = 0, toLink, ...props }) => {
  return (
    <button
      as="button"
      onClick={() => {
        if (toLink) {
          navigate(toLink);
        }
      }}
      sx={{
        variant: 'buttons.primary',
        borderRadius: radius,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
