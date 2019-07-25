/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Showcase } from '@jlengstorf/gatsby-theme-showcase';
import Arrow from '../../components/Arrow';
import BlockRenderer from 'gatsby-theme-marketing-sanity/src/components/block-renderer';
import Figure from 'gatsby-theme-marketing-sanity/src/components/figure';
import ButtonBlock from '../../components/ButtonBlock';
import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';
import Lede from '../../components/Lede';
import Rule from '../../components/Rule';
// import Showcase from '../../components/Showcase';

console.log(Showcase);
export default {
  marks: {
    code: Styled.code,
  },
  types: {
    // if you want to change headings, etc., you have to edit this component
    arrow: Arrow,
    block: BlockRenderer,
    button: ButtonBlock,
    callout: Callout,
    code: CodeBlock,
    lede: Lede,
    'page-image': ({ node }) => (
      <div
        sx={{
          alignItems: 'center',
          margin: '0 auto',
          width: 360,
        }}
      >
        <Figure node={node} />
      </div>
    ),
    rule: Rule,
    showcase: Showcase,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  list: ({ type, children }) => {
    if (type === 'number') {
      return <Styled.ol>{children}</Styled.ol>;
    }
    return <Styled.ul>{children}</Styled.ul>;
  },
  listItem: Styled.li,
};
