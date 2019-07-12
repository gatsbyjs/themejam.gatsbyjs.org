/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MdArrowForward } from 'react-icons/md';

const Pagination = ({}) => {
  return (
    <div
      sx={{
        my: `5`,
        display: `grid`,
        gridTemplateColumns: [`0.8fr 1fr`, `2fr 1fr`],
        alignItems: `center`,
        width: `100%`,
      }}
    >
      <button
        sx={{
          variant: `buttons.base`,
          position: `relative`,
          display: `flex`,
          alignItems: `center`,
          color: `text.2`,
          fontSize: `0`,
          fontWeight: `normal`,
          backgroundColor: `#FCFAFF`,
          p: `3`,
          clipPath: `polygon(
            0 0, 
            100% 0, 
            90% 100%, 
            0% 100%, 
            0 100% 
            )`,
          '&:focus': {
            outlineOffset: -3,
            outline: theme => `3px solid ${theme.colors.muted}`,
          },
          '&:active': {
            backgroundColor: `#f7f1ff`,
            outlineOffset: -4,
          },
        }}
      >
        <MdArrowForward />
        <span sx={{ ml: '1' }}>Next page</span>
      </button>
      <div sx={{ color: `text.1`, justifySelf: `flex-end` }}>
        Showing page
        <select
          sx={{
            mx: '2',
            border: `none`,
            fontSize: `1`,
            color: `primary`,
          }}
        >
          <option sx={{ p: '1' }}>1</option>
        </select>
        of {8}
      </div>
    </div>
  );
};

export default Pagination;
