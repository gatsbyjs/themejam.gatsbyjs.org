/** @jsx jsx */
import { Link } from 'gatsby';
import { Header, jsx, Styled } from 'theme-ui';

import Monogram from './logo/monogram';
import Button from './Button';
import Hamburger from './Hamburger';

const StyledLi = ({ children }) => (
  <li
    sx={{
      fontWeight: `normal`,
      display: ['none', 'list-item'],
    }}
  >
    {children}
  </li>
);

const CustomHeader = () => {
  return (
    <Header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        color: 'primary',
      }}
    >
      <Link sx={{ alignSelf: 'center', zIndex: '2' }} to="/">
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div sx={{ height: 25, marginRight: '2' }}>
            <Monogram height={25} />
          </div>
          <span
            sx={{
              color: 'gray.3',
              marginRight: '1',
              display: ['none', 'inline'],
            }}
          >
            Gatsby
          </span>
          <span>Theme Jam</span>
        </div>
      </Link>
      <nav sx={{ display: 'flex', alignItems: 'center' }}>
        <Styled.ul
          sx={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            '* + *': {
              ml: '4',
            },
          }}
        >
          <StyledLi>
            <Link to="/showcase">Showcase</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/rules">Contest Rules</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/faq">FAQ</Link>
          </StyledLi>
          <li>
            <Button sx={{ margin: 0 }} toLink="/submit" radius={1}>
              Submit{' '}
              <span sx={{ display: ['none', 'inline'] }}>Your Theme</span>
            </Button>
          </li>
        </Styled.ul>
        <Hamburger />
      </nav>
    </Header>
  );
};

export default CustomHeader;
