import React from 'react';
import { Navbar, Icon } from 'react-materialize';

const NavBar = props => {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <a className="brand-logo" href="#hola">
          Arturo & Mili
        </a>
      }
      centerLogo
      id="mobile-nav"
      menuIcon={null} //<Icon>menu</Icon>
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    ></Navbar>
  );
};

export default NavBar;
