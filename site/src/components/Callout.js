/** @jsx jsx */
import { jsx } from 'theme-ui';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

const decorativeBeforeStyles = (variant = 'purple', direction = 'left') => ({
  backgroundImage: theme =>
    `linear-gradient(${direction === `left` ? `45deg` : `-45deg`}, ${
      theme.colors.callout[variant].flair
    } 16.67%, #ffffff 16.67%, #ffffff 50%, ${
      theme.colors.callout[variant].flair
    } 50%, ${
      theme.colors.callout[variant].flair
    } 66.67%, #ffffff 66.67%, #ffffff 100%)`,
  left: direction === 'left' && 0,
  right: direction !== 'left' && 0,
  transform:
    direction === 'left' ? `translate(-20px,-85px)` : `translate(20px,-85px)`,
});

const decorativeAfterStyles = (variant = 'purple', direction = 'left') => ({
  left: direction === 'left' && 0,
  right: direction === 'right' && 0,
  transform:
    direction === 'left'
      ? `rotate(135deg) translate(21px, -3px)`
      : `rotate(-135deg) translate(-21px, -3px)`,
  borderLeft: `20px solid transparent`,
  borderRight: `20px solid transparent`,
  borderTop: theme => `20px solid ${theme.colors.callout[variant].flair}`,
});

const Callout = ({ node }) => {
  return (
    <div
      id={node.anchor}
      sx={{
        position: `relative`,
        minHeight: `100px`,
        my: 6,
        padding: [4, 5],
        backgroundColor: theme =>
          theme.colors.callout[node.variant || 'purple'].background,
        '&::before': {
          ...decorativeBeforeStyles(
            node.variant || 'purple',
            node.direction || 'left',
          ),
          position: `absolute`,
          zIndex: `0`,
          width: `100px`,
          height: `100px`,
          content: '""',
          backgroundSize: `5px 5px`,
        },
        '&::after': {
          ...decorativeAfterStyles(
            node.variant || 'purple',
            node.direction || 'left',
          ),
          position: `absolute`,
          content: '""',
          bottom: 0,
        },
        'h2:first-of-type': {
          mt: 0,
        },
      }}
    >
      <PortableText blocks={node.content} />
    </div>
  );
};

export default Callout;
