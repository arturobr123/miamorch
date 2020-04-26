import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';

const SliderComponent = props => {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 6000,
      }}
    >
      <Slide image={<img alt="" src="/images/fotoParallax3.jpg" />}>
        <Caption className="background-color-parallax-text" placement="center">
          <h3>1 año juntos !</h3>
          <h5 className="light grey-text text-lighten-3">
            FELIZ ANIVERSARIO MI AMOR
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="/images/fotoParallax4.jpg" />}>
        <Caption className="background-color-parallax-text" placement="left">
          <h3>Te amo super mucho</h3>
          <h5 className="light grey-text text-lighten-3">{'<3'}</h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="/images/fotoParallax5.jpg" />}>
        <Caption className="background-color-parallax-text" placement="right">
          <h3>Gracias por todas las risas</h3>
          <h5 className="light grey-text text-lighten-3">
            Aunque te rias de mi xD
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="/images/titanic.jpg" />}>
        <Caption className="background-color-parallax-text" placement="center">
          <h3>Me encanta que tengas buenos gustos!</h3>
          <h5 className="light grey-text text-lighten-3">
            Tenemos que ver titanic juntos
          </h5>
        </Caption>
      </Slide>
    </Slider>
  );
};

export default SliderComponent;
