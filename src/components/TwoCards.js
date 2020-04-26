import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import CardReveal from './CardReveal';

const TwoCards = props => {
  return (
    <Row>
      <Col m={1} s={1}></Col>

      <Col m={5} s={5}>
        <CardReveal
          revealText="Fue muy bonito ese dia, aunque nuestra foto ps no este tan cool fue el 
          inicio que cambiaria mi vida por completo, gracias por todo mi amor."
          cardTitle="Nuestra primera foto juntos <3"
          imageUrl="/images/primer_foto.jpg"
        />
      </Col>

      <Col m={5} s={5}>
        <CardReveal
          revealText="Nuestra ultima foto hasta ahora, solo puedo decir, GRACIAS"
          cardTitle="Nuestra ultima foto juntos <3 hasta ahora..."
          imageUrl="/images/ultima_foto.jpg"
        />
      </Col>

      <Col m={1} s={1}></Col>
    </Row>
  );
};

export default TwoCards;
