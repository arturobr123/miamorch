import React from 'react';
import { Row, Col } from 'react-materialize';
import ToastComponent from './ToastComponent';

const ToastSection1 = props => {
  return (
    <div className="section white">
      <div className="row container center">
        <h2 className="header center">Q&A</h2>
        <Row>
          <Col s={4}>
            <h4 className="header">
              Cuanto te amo ?
              <ToastComponent
                className="center"
                toastButtonText="Respuesta aqui."
                toastMessageText="MUCHISISISISISIMOOOO ASI MUCHO MUCHO MUCHO MUCHO MUCHO MUCHOMUCHO MUCHO MUCHOMUCHO MUCHO MUCHOMUCHO MUCHO MUCHOMUCHO MUCHO MUCHO AAAAAH ME ENCANTAAAAAAAS"
              />
            </h4>
          </Col>
          <Col s={4}>
            <h4 className="header">
              Te extraño ?
              <ToastComponent
                className="center"
                toastButtonText="Respuesta aqui."
                toastMessageText=":( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( SIIIIIIII :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :("
              />
            </h4>
          </Col>
          <Col s={4}>
            <h4 className="header">
              Dime algo bonito
              <ToastComponent
                className="center"
                toastButtonText="Respuesta aqui."
                toastMessageText="TE VEZ GUAPISIMAAAA, NO IMPORTA CUANDO LEAS ESTO :)"
              />
            </h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ToastSection1;
