import { Styled } from 'theme-ui';
import BlockRenderer from 'gatsby-theme-marketing-sanity/src/components/block-renderer';
import Figure from 'gatsby-theme-marketing-sanity/src/components/figure';
import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';
import Rule from '../../components/Rule';

export default {
  marks: {
    code: Styled.code,
  },
  types: {
    // if you want to change headings, etc., you have to edit this component
    callout: Callout,
    code: CodeBlock,
    block: BlockRenderer,
    'page-image': Figure,
    rule: Rule,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  list: Styled.ul,
  listItem: Styled.li,
};
