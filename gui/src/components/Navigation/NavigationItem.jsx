import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './navigation-item.scss';

function NavigationItem ({ name, selected }) {
  const classes = classNames({
    'navigation-item': true,
    'navigation-item_selected': selected
  })
  return (
    <Link
      to={name.toLowerCase()}
      className={classes}
    >
      <span className="navigation-item__label">
        { name }
      </span>
    </Link>
  );
}

export default NavigationItem
