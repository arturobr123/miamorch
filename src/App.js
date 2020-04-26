import React from 'react';
import './App.css';
import ParallaxImage from './components/ParallaxImage';
import SliderComponent from './components/SliderComponent';
import CardText from './components/CardText';
import ToastComponent from './components/ToastComponent';
import NavBar from './components/NavBar';
import TwoCards from './components/TwoCards';
import CarouselComponent from './components/CarouselComponent';
import { Row, Col, CardPanel } from 'react-materialize';

import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment/min/moment-with-locales';

Moment.globalMoment = moment;
Moment.globalLocale = 'es';

function App() {
  return (
    <div>
      <NavBar />
      <SliderComponent />

      <CardText
        leftSpace={3}
        rightSpace={0}
        widthCard={6}
        text="HOLA MI AMOR. Yo nunca he sido muy bueno para hacer manualidades,
         me encantaria poder hacerte cosas a mano, por ejemplo los dibujos en los sobres
         se que no soy muy bueno, asi que pense que podria demostrarte mi amor en algo
         en lo que si soy bueno, y ps es programar xD espero que te guste esta pequeña pagina que
         hice para ti. Te amo y espero te guste."
      />

      <TwoCards />

      <div className="section white">
        <div className="row container">
          <h2 className="header center">Tiempo juntos:</h2>
          <Row>
            <Col s={2}></Col>
            <Col s={8}>
              <CardPanel className="blue">
                <span className="white-text">
                  <h3>
                    {moment().diff('2019-06-08', 'years')} Años de muchas
                    aventuras
                  </h3>
                  <h3>
                    {moment().diff('2019-06-08', 'months')} Meses super
                    romanticos
                  </h3>
                  <h3>
                    {moment().diff('2019-06-08', 'days')} Dias de mucho amor
                  </h3>
                  <h3>
                    {moment().diff('2019-06-08', 'hours')} Horas de felicidad
                  </h3>
                </span>
              </CardPanel>
            </Col>
            <Col s={2}></Col>
          </Row>
        </div>
      </div>

      <ParallaxImage image="http://materializecss.com/images/parallax2.jpg" />

      <div className="section white">
        <div className="row container center">
          <h2 className="header">
            Quieres muchos besos ?
            <ToastComponent
              className="center"
              toastButtonText="Presiona aqui"
              toastMessageText="Muah! :*"
            />
          </h2>
        </div>
      </div>

      <ParallaxImage image="http://materializecss.com/images/parallax2.jpg" />

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

      <CarouselComponent />
    </div>
  );
}

export default App;
