/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MdArrowDownward } from 'react-icons/md';

const Arrow = ({ children, href, radius = 0, toLink, ...props }) => {
  return (
    <div sx={{ display: 'flex', justifyContent: 'center', my: '4' }}>
      <MdArrowDownward size={24} sx={{ color: 'muted' }} />
    </div>
  );
};

export default Arrow;
