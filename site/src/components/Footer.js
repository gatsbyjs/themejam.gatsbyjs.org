/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footer {
            blurb
            links {
              link
              name
              icon
            }
          }
        }
      }
    }
  `);

  const { blurb, links } = data.site.siteMetadata.footer;

  const icons = {
    twitter: FaTwitter,
    github: FaGithub,
  };

  return (
    <footer sx={{ textAlign: 'left' }}>
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
      <Styled.p sx={{ color: 'text.1' }}>{blurb}</Styled.p>
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
        {links.map(link => {
          const Icon = link.icon ? icons[link.icon] : null;

          return (
            <Styled.li key={link.url}>
              <StyledLink href={link.url}>
                {Icon && <Icon />} {link.name}
              </StyledLink>
            </Styled.li>
          );
        })}
        {/* <Styled.li>
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
        </Styled.li> */}
      </Styled.ul>
    </footer>
  );
};

export default Footer;
