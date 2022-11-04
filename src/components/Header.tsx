import React from 'react';
import '../styles/general.scss';

function Header() {
  return (
    <>
      <div id="header" className="header-container">
        <h1>
          <span className="hi">Hi,</span> <span>I'm</span> <span>Gaute</span>
        </h1>
        <h2>Frontend Developer, Crypto Enthusiast, Photographer</h2>
      </div>
    </>
  );
}

export default Header;
