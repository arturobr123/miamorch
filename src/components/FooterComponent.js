import React from 'react';
import { Footer } from 'react-materialize';

const FooterComponent = props => {
  return (
    <Footer
      className="example"
      copyrights="Arturo & Mili Copyright"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          I love you
        </a>
      }
    >
      <h5 className="white-text">Arturo & Mili for ever</h5>
      <p className="grey-text text-lighten-4">Te amo mucho mucho asi mucho</p>
    </Footer>
  );
};

export default FooterComponent;
