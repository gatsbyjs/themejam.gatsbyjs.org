/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { navigate } from 'gatsby';

const Button = ({ children, href, radius = 0, toLink, ...props }) => {
  return (
    <Styled.b
      as="button"
      onClick={() => {
        if (toLink) {
          navigate(toLink);
        }
      }}
      sx={{
        borderRadius: radius,
      }}
      {...props}
    >
      {children}
    </Styled.b>
  );
};

export default Button;
