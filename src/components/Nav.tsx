import React from 'react';
import '../styles/general.scss';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className="nav-container">
      <h3 className="nav-title">Gaute Degré Lorentsen</h3>
      <div className="route-container">
        <h3>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </h3>
        <h3>
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </h3>
        <h3>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </h3>
      </div>
    </nav>
  );
}

export default Nav;
