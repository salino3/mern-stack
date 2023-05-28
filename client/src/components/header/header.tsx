import React from 'react';
import { Navbar } from '.';
import './header.styles.scss';

export const Header: React.FC = () => {

  return (
    <header>
      <h1>
        <u>MERN App MySQL</u>
      </h1>
      <Navbar />
      <hr />
    </header>
  );
}
