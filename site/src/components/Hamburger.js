import React, { useState } from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const StyledLi = ({ children }) => (
  <li
    sx={{
      fontWeight: `bold`,
      fontSize: `5`,
      color: `primary`,
      '&:hover': {
        color: `muted`,
        listStyle: `circle`,
      },
    }}
  >
    {children}
  </li>
);

const Hamburger = ({ ...props }) => {
  const [isOpen, setOpen] = useState(false);

  const shared = {
    backgroundColor: 'primary',
    borderRadius: '0',
    height: 3,
    content: `" "`,
    position: `absolute`,
    transition: theme => `all 250ms ${theme.curve.default}`,
  };

  return (
    <>
      <button
        aria-controls="gatsby-nav"
        aria-expanded={isOpen ? `active` : `inactive`}
        aria-label="Toggle Navigation"
        className={isOpen ? `active` : `inactive`}
        onClick={() => setOpen(!isOpen)}
        sx={{
          height: 24,
          display: ['flex', 'none'],
          backgroundColor: `none`,
          border: 0,
          padding: 0,
          ml: '3',
          position: `relative`,
          cursor: `pointer`,
          transition: theme => `all 250ms ${theme.curve.default}`,
          '&.active': {
            '& .hamburger': {
              '&:after': {
                transform: `rotate(-45deg)`,
              },
              '&:before': {
                transform: `rotate(45deg)`,
              },
              '&:hover': {
                transform: `scale(1.2)`,
              },
            },
          },
        }}
      >
        <div
          className="hamburger"
          sx={{
            width: 24,
            height: 3,
            margin: `10px 0`,
            position: `relative`,
            zIndex: '2',
            borderRadius: '0',
            backgroundColor: isOpen ? 'transparent' : 'primary',
            transition: `all 250ms cubic-bezier(.68,-.55,.265,1.55)`,
            ':before': {
              content: JSON.stringify(``),
              top: isOpen ? 0 : -7,
              width: 20,
              right: 0,
              ...shared,
            },
            ':after': {
              content: JSON.stringify(``),
              top: isOpen ? 0 : 7,
              width: isOpen ? 20 : 16,
              right: 0,
              ...shared,
            },
          }}
        />
      </button>
      {isOpen && (
        <div
          sx={{
            display: [`flex`, `none`],
            alignItems: `center`,
            backgroundColor: `background`,
            transition: theme => `all 250ms ${theme.curve.default}`,
            opacity: isOpen ? `0.95` : `0`,
            position: `fixed`,
            margin: 0,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: `1`,
          }}
        >
          <nav
            sx={{
              my: `6`,
              mx: `5`,
              width: `100%`,
            }}
          >
            <Styled.ul
              sx={{
                alignItems: 'center',
                listStyle: 'none',
              }}
            >
              <StyledLi>
                <Link to="/">Home</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/showcase">Showcase</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/rules">Contest Rules</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/faq">FAQ</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/submit">Submit your Theme</Link>
              </StyledLi>
            </Styled.ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Hamburger;
