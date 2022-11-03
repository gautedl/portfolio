import React from 'react';
import '../styles/general.scss';

function Nav() {
  return (
    <nav className="nav-container">
      <h3 className="nav-title">Gaute Degré Lorentsen</h3>
      <div className="route-container">
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </nav>
  );
}

export default Nav;
