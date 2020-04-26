import React from 'react';
import { Parallax } from 'react-materialize';

const ParallaxImage = props => {
  return (
    <Parallax
      image={<img alt="" src={props.image} width="500" height="800" />}
      options={{
        responsiveThreshold: 0,
      }}
    />
  );
};

export default ParallaxImage;
