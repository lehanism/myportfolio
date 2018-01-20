import React, { Component } from 'react';

import { Link } from 'gatsby-link';

const MenuLink = props =>
  <Link to={this.props.linkref} activeClassName="cross--active">
    <div className="menu__link"><span className="cross">+ </span>{this.props.linkname}</div>
  </Link>
