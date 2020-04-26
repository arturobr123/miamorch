import React from 'react';
import { Parallax } from 'react-materialize';

const ToastSection1 = props => {
  return (
    <Parallax
      image={<img alt="" src={props.image} />}
      options={{
        responsiveThreshold: 0,
      }}
    />
  );
};

export default ToastSection1;
