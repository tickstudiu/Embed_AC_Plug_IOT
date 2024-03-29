// Header.js
import React from 'react';
const Header = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://bulma.io">
          {props.title}
        </a>
      </div>
    </nav>
  )
}
export default Header