import React from 'react';
import { Carousel } from 'react-materialize';

const CarouselComponent = props => {
  return (
    <Carousel
      carouselId="Carousel-2"
      images={[
        '/images/foto1.jpg',
        '/images/foto2.jpg',
        '/images/foto3.jpg',
        '/images/foto4.jpg',
        '/images/foto5.jpg',
        '/images/foto6.jpg',
        '/images/foto7.jpg',
        '/images/foto8.jpg',
        '/images/foto9.jpg',
        '/images/foto10.jpg',
        '/images/foto11.jpg',
      ]}
      options={{
        dist: -100,
        duration: 200,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: null,
        padding: 0,
        shift: 0,
      }}
    />
  );
};

export default CarouselComponent;
