/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { MdArrowDownward } from 'react-icons/md';

import Illustration from '../assets/themejam.png';
import OrangePurple from '../assets/pattern/orange+purple.png';
import TealPurple from '../assets/pattern/teal+purple.png';

const Hero = ({ headline, subHeadline, subDescription }) => {
  return (
    <>
      <img
        alt="Orange and purple patterned design"
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
        alt="Teal and purple patterned design"
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
        }}
      >
        <img
          alt="Trumpets playing music around the Gatsby logo"
          src={Illustration}
          sx={{
            height: 280,
          }}
        />
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <Styled.h1 sx={{ letterSpacing: '-0.15px' }}>{headline}</Styled.h1>
          <Styled.p sx={{ fontSize: '3', color: 'text.1' }}>
            {subHeadline}
          </Styled.p>
        </div>
        {subDescription && (
          <Styled.p sx={{ fontSize: '3', color: 'text.0' }}>
            {subDescription}
          </Styled.p>
        )}
        <Link to="#get-started">
          <MdArrowDownward sx={{ color: 'muted' }} size={24} />
        </Link>
      </section>
    </>
  );
};

export default Hero;
