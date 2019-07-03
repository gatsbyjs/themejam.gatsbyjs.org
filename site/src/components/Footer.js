/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

import MagentaBlue from '../assets/pattern/magenta+blue.png';

const StyledLink = ({ children, ...props }) => (
  <a
    {...props}
    sx={{
      color: 'inherit',
      display: 'grid',
      gridTemplateColumns: ['20px auto', 'auto auto'],
      gridGap: '2',
      alignItems: 'center',
      whiteSpace: 'nowrap',
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
    <footer
      sx={{
        margin: '0 auto',
        maxWidth: '650px',
        textAlign: 'left',
      }}
    >
      <div sx={{ padding: '3' }}>
        <img
          alt="Magenta and blue patterned design"
          src={MagentaBlue}
          sx={{
            position: 'absolute',
            right: [-35, 0],
            height: ['35%', '50%'],
            maxHeight: 250,
            zIndex: '0',
          }}
        />
        <Styled.p sx={{ marginBottom: '2', color: 'text.1' }}>{blurb}</Styled.p>
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
        </Styled.ul>
      </div>
    </footer>
  );
};

export default Footer;
