import React from 'react';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { MdArrowDownward } from 'react-icons/md';

import Illustration from '../assets/themejam.png';
import OrangePurple from '../assets/pattern/orange+purple.png';
import TealPurple from '../assets/pattern/teal+purple.png';

const Hero = () => {
  return (
    <>
      <img
        src={OrangePurple}
        sx={{
          position: 'absolute',
          top: [800, 625],
          left: [-25, 0],
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
        }}
      />
      <img
        src={TealPurple}
        sx={{
          position: 'absolute',
          top: [200, 75],
          right: [-10, 0],
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
        }}
      />
      <svg
        sx={{ position: 'absolute', top: '25vh', left: '20vw' }}
        height="20"
        width="20"
      >
        <ellipse cx="10" cy="10" rx="10" ry="10" fill="#FFE4A1" />
      </svg>
      <section
        sx={{
          display: 'grid',
          gridTemplateRows: '300px auto auto 24px',
          gridGap: '4',
          justifyItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={Illustration}
          sx={{
            height: 280,
          }}
        />
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <Styled.h1 sx={{ letterSpacing: '-0.15px' }}>
            Announcing Gatsby Theme Jam!
          </Styled.h1>
          <Styled.p sx={{ fontSize: '3', color: 'text.1' }}>
            Build a Gatsby theme and win exclusive swag and prizes
          </Styled.p>
        </div>
        <Styled.p sx={{ fontSize: '3', color: 'text.0' }}>
          To celebrate the launch of Gatsby themes, we’re holding a theme
          building contest! Remix our blog theme and enter the Theme Jam contest
          to get exclusive swag designed by Maggie Appleton. The top two entries
          will win an all-expenses-paid trip to Gatsby Days!
        </Styled.p>
        <MdArrowDownward sx={{ color: 'muted' }} size={24} />
      </section>
    </>
  );
};

export default Hero;
