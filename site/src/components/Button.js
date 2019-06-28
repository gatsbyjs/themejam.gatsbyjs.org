import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = ({ children, radius = 0, ...props }) => {
  return (
    <button
      sx={{
        fontSize: '1',
        fontFamily: 'Futura',
        backgroundColor: 'primary',
        borderRadius: radius,
        color: 'background',
        paddingTop: '2',
        paddingBottom: '2',
        paddingLeft: '3',
        paddingRight: '3',
        whiteSpace: 'nowrap',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
