import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';

import OrangePurple1 from '../assets/pattern/orange+purple.png';
import OrangePurple2 from '../assets/pattern/orange+purple2.png';
import TealPurple1 from '../assets/pattern/teal+purple.png';
import TealPurple2 from '../assets/pattern/teal+purple2.png';

const Illustrations = ({ slug }) => {
  const slugsToRotateLeftIllustration = ['showcase', 'rules', 'faq'];
  const slugsToRotateRightIllustration = ['rules', 'faq'];
  return (
    <>
      <img
        alt="Orange and purple patterned design"
        src={
          slugsToRotateLeftIllustration.includes(slug)
            ? OrangePurple2
            : OrangePurple1
        }
        sx={{
          position: 'absolute',
          top: 625,
          left: [-35, 0],
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
          opacity: [0.3, 1],
        }}
      />
      <img
        alt="Teal and purple patterned design"
        src={
          slugsToRotateRightIllustration.includes(slug)
            ? TealPurple2
            : TealPurple1
        }
        sx={{
          position: 'absolute',
          top: [200, 75],
          right: 0,
          height: ['35%', '50%'],
          maxHeight: 300,
          zIndex: '0',
          opacity: [0.5, 1],
        }}
      />
      <svg
        sx={{ position: 'absolute', top: '25vh', left: '20vw', zIndex: 0 }}
        height="20"
        width="20"
      >
        <ellipse cx="10" cy="10" rx="10" ry="10" fill="#FFE4A1" />
      </svg>
    </>
  );
};

export default Illustrations;
