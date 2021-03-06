/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

import MagentaBlue from '../assets/pattern/magenta+blue.png';

const StyledLink = ({ children, ...props }) => (
  <a
    {...props}
    sx={{
      color: 'primary',
      display: 'grid',
      gridTemplateColumns: ['20px auto', 'auto auto'],
      gridGap: '2',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      height: ['48px', 'inherit'],
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
              name
              icon
              url
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
    <footer sx={{ mt: 150 }}>
      <img
        alt="Magenta and blue patterned design"
        src={MagentaBlue}
        sx={{
          position: 'absolute',
          right: 0,
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
          opacity: [0.3, 1],
        }}
      />
      <Styled.p sx={{ mb: '2', color: 'text.1' }}>{blurb}</Styled.p>
      <Styled.ul
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          mt: '4',
          '* + *': {
            ml: [0, '3'],
            mt: ['2', 0],
          },
        }}
      >
        {links.map(link => {
          const Icon = link.icon ? icons[link.icon] : null;

          return (
            <Styled.li sx={{ mt: 0 }} key={link.url}>
              <StyledLink href={link.url}>
                {Icon && <Icon />} {link.name}
              </StyledLink>
            </Styled.li>
          );
        })}
      </Styled.ul>
    </footer>
  );
};

export default Footer;
