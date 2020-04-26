import React from 'react';
import { Card, Icon, CardTitle } from 'react-materialize';

const ParallaxImage = props => {
  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.imageUrl} reveal waves="light" />}
      reveal={<p>{props.revealText}</p>}
      title={props.cardTitle}
    ></Card>
  );
};

export default ParallaxImage;
