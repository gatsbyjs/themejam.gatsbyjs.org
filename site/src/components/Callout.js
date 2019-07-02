/** @jsx jsx */
import { jsx } from 'theme-ui';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

const Callout = ({ node }) => {
  return (
    <div
      sx={{
        position: `relative`,
        backgroundColor: `#FCFAFF`,
        minHeight: `100px`,
        // these will need to change
        marginTop: `8rem`,
        marginBottom: `8rem`,
        // --------------------
        padding: `4rem`,
        textAlign: `left`,
        '&::before': {
          position: `absolute`,
          zIndex: `-1`,
          width: `100px`,
          height: `100px`,
          transform: `translate(-5.75rem,-5.75rem)`,
          content: '""',
          backgroundImage: `linear-gradient(45deg, #B17ACC 16.67%, #ffffff 16.67%, #ffffff 50%, #B17ACC 50%, #B17ACC 66.67%, #ffffff 66.67%, #ffffff 100%)`,
          backgroundSize: `4.24px 4.24px`,
        },
        '&::after': {
          position: `absolute`,
          content: '""',
          bottom: 0,
          left: 0,
          transform: `rotate(135deg) translate(21px, -3px)`,
          borderLeft: `20px solid transparent`,
          borderRight: `20px solid transparent`,
          borderTop: `20px solid #B17ACC`,
        },
      }}
    >
      {/* {`Get started`.toUpperCase()}
      <p>
        Lorem ipsum sunt, sicilia est insula. Here's a quick start for those of
        you who are familiar with Gatsby - I'm not sure about this copy at all.
      </p>

      <ul>
        <li>Contest Rules</li>
        <li>Themes Docs</li>
        <li>Official Blog Theme on GitHub</li>
      </ul> */}
      <PortableText blocks={node.calloutContent} />
    </div>
  );
};

export default Callout;
