/** @jsx jsx */
import { jsx } from 'theme-ui';
import ShowcaseItem from './ShowcaseItem';
import Pagination from './Pagination';

const showcaseItems = [
  {
    author: 'Kyle Gill',
    name: 'box-shadow-2.0',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
    winner: true,
  },
  {
    author: 'Jason Lengstorf',
    name: 'simple-docs',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/jlengstorf',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars2.githubusercontent.com/u/163561?s=460&v=4',
    winner: false,
  },
  {
    author: 'Preston So',
    name: 'drupal-blog',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
    winner: false,
  },
  {
    author: 'Kyle Gill',
    name: 'Anotha One',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/21114044?s=460&v=4',
    winner: false,
  },
  {
    author: 'Jason Lengstorf',
    name: 'docs-theme',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/jlengstorf',
    screenshotUrl:
      'http://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg',
    avatar: 'https://avatars2.githubusercontent.com/u/163561?s=460&v=4',
    winner: false,
  },
  {
    author: 'Preston So',
    name: 'contentful-theme',
    demoLink: 'https://kylegill.com',
    sourceLink: 'https://github.com/gillkyle',
    screenshotUrl:
      'https://images.ctfassets.net/fo9twyrwpveg/2RH1HMrIaQIYgqmO2oyUgi/6b57a5e139e8a8bdc5257b7548f4cdee/Gatsby_Contentful.jpg?fm=jpg&fl=progressive&q=90&w=2156',
    avatar: 'https://avatars0.githubusercontent.com/u/484252?s=460&v=4',
    winner: false,
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
          <ShowcaseItem key={index} item={item} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default Showcase;
