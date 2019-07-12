/** @jsx jsx */
import { jsx } from 'theme-ui';
import ShowcaseItem from './ShowcaseItem';

const showcaseItems = [
  {
    author: 'Kyle Gill',
    name: 'box-shadow-2.0',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
  },
  {
    author: 'Jason Lengstorf',
    name: 'simple-docs',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/jlengstorf',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars2.githubusercontent.com/u/163561?s=460&v=4',
  },
  {
    author: 'Preston So',
    name: 'drupal-blog',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
  },
  {
    author: 'Kyle Gill',
    name: 'Anotha One',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
  },
  {
    author: 'Jason Lengstorf',
    name: 'more-docs',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/jlengstorf',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars2.githubusercontent.com/u/163561?s=460&v=4',
  },
  {
    author: 'Preston So',
    name: 'auth0',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
  },
];

const Showcase = ({ node: { numDisplay } }) => {
  return (
    <section sx={{ my: '4' }}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
          gridColumnGap: '5',
          gridRowGap: '3',
        }}
      >
        {showcaseItems.map((item, index) => (
          <ShowcaseItem item={item} winner={index === 0} />
        ))}
      </div>
      <div>Pagination</div>
    </section>
  );
};

export default Showcase;
