import React from 'react';

import './WelcomeBox.scss';

const WelcomeBox = ({ name }) => (
  <div className="welcome-box" >
    <div className="container">
      <span> Bem vindo <strong>{name}</strong></span>
    </div>
  </div>
);

export default WelcomeBox;
