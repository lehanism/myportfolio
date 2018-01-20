import React, { Component } from 'react';

import Link from 'gatsby-link';

const MenuLink = props =>
  <Link exact to={props.to} activeClassName="cross--active">
    <div className="menu__link"><span className="cross">+ </span>{props.children}</div>
  </Link>

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/now/">Now</MenuLink>
        <MenuLink to="/projects/">Projects</MenuLink>
      </div>
    );
  }
}

export default Menu;
