import React from 'react'
import { Switch, Link } from 'react-router-dom'

import './navigation-item.scss';

function NavigationItem ({ name }) {
  console.log(name)
  return (
    <Link
      to={name.toLowerCase()}
      className="navigation-item"
    >
      <span className="navigation-item__label">
        { name }
      </span>
    </Link>
  );
}

export default NavigationItem
