import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationItem from './NavigationItem.js'

import './index.scss';

function Navigation ({ pages }) {
  console.log(pages)
  return (
    <div className="navigation custom-scroll">
      <NavigationItem name="PIZDEC"/>
    </div>
  );
}

export default Navigation
