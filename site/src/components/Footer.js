import React from 'react';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FaGithub, FaTwitter } from 'react-icons/fa';

import MagentaBlue from '../assets/pattern/magenta+blue.png';

const StyledLink = ({ children, ...props }) => (
  <a
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: ['20px auto', 'auto auto'],
      gridGap: '2',
      alignItems: 'center',
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer>
      <img
        alt="Magenta and blue patterned design"
        src={MagentaBlue}
        sx={{
          position: 'absolute',
          right: 0,
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
        }}
      />
      <Styled.p sx={{ color: 'text.1' }}>
        Gatsby is a modern website framework that builds performance into every
        website by leveraging the latest web technologies. Create blazing fast,
        compelling apps and websites without needing to become a performance
        expert.
      </Styled.p>
      <Styled.ul
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          marginTop: '4',
          '* + *': {
            marginLeft: [0, '3'],
            marginTop: ['2', 0],
          },
        }}
      >
        <Styled.li>
          <StyledLink href="https://www.gatsbyjs.org">gatsbyjs.org</StyledLink>
        </Styled.li>
        <Styled.li>
          <StyledLink href="https://www.github.com/gatsbyjs/gatsby">
            <FaGithub /> github.com/gatsbyjs
          </StyledLink>
        </Styled.li>
        <Styled.li>
          <StyledLink href="https://twitter.com/gatsbyjs">
            <FaTwitter />
            gatsbyjs
          </StyledLink>
        </Styled.li>
      </Styled.ul>
    </footer>
  );
};

export default Footer;
