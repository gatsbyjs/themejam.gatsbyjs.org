import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';

import OrangePurple from '../assets/pattern/orange+purple.png';
import TealPurple from '../assets/pattern/teal+purple.png';

const Illustrations = ({ slug }) => {
  return (
    <>
      <img
        alt="Orange and purple patterned design"
        src={OrangePurple}
        sx={{
          position: 'absolute',
          top: [800, 625],
          left: [-35, 0],
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
        }}
      />
      <img
        alt="Teal and purple patterned design"
        src={TealPurple}
        sx={{
          position: 'absolute',
          top: [200, 75],
          right: [-15, 0],
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
    </>
  );
};

export default Illustrations;
