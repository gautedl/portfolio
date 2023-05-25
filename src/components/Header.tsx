import React from 'react';
import '../styles/general.scss';

function Header() {
  return (
    <>
      <div id="header" className="header-container">
        <h1>
          <span className="hi">Hi,&nbsp;</span>
          <div className="name-text">
            <span className="first"> I'm</span> <span>Gaute</span>
          </div>
        </h1>
        <h2>Fullstack Developer, Crypto Enthusiast, Photographer</h2>
      </div>
    </>
  );
}

export default Header;
