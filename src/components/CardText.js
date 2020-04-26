import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const CardText = props => {
  return (
    <Row>
      <Col s={props.leftSpace}></Col>
      <Col s={props.widthCard}>
        <CardPanel className="blue">
          <span className="white-text">{props.text}</span>
        </CardPanel>
      </Col>
      <Col s={props.rightSpace}></Col>
    </Row>
  );
};

export default CardText;
