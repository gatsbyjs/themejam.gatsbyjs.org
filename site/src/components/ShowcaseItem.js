/** @jsx jsx */
import { jsx } from 'theme-ui';
import theme from '../gatsby-theme-marketing-sanity/theme';
import { MdLaunch } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const ExternalLink = ({ children, href }) => (
  <a
    sx={{
      display: `grid`,
      gridColumnGap: `1`,
      gridTemplateColumns: `auto 1fr`,
      alignItems: `center`,
      textDecoration: `none`,
    }}
    href={href}
  >
    {children}
  </a>
);

const ShowcaseItem = ({ item }) => {
  return (
    <div>
      <div
        sx={{
          variant: `shadows.elevated`,
          backgroundImage: `url(${item.screenshotUrl})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          paddingBottom: `66.66%`,
        }}
      />
      <div
        sx={{
          display: `grid`,
          gridTemplateAreas: `
          "avatar author"
          "avatar name"
          "avatar links"
        `,
          gridTemplateColumns: `32px auto`,
          gridColumnGap: `2`,
          marginTop: `2`,
        }}
      >
        <div sx={{ gridArea: `avatar` }}>
          <img
            sx={{ variant: `shadows.elevated`, width: `100%` }}
            src={item.avatar}
          />
        </div>
        <div sx={{ gridArea: `author` }}>
          <p sx={{ margin: 0 }}>{item.author}</p>
        </div>
        <div sx={{ gridArea: `name` }}>
          <p sx={{ margin: 0, fontWeight: `bold` }}>{item.name}</p>
        </div>
        <div
          sx={{
            display: `flex`,
            gridArea: `links`,
            fontSize: `0`,
            '* + *': {
              marginLeft: '2',
            },
          }}
        >
          <ExternalLink href={item.demoLink}>
            Demo <MdLaunch />
          </ExternalLink>
          <ExternalLink href={item.sourceLink}>
            Source <FaGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
