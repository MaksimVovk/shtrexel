import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Home from '../../pages/home'
import { Navigation } from '../index.js'

import './index.scss';

function Layout ({ pages, options }) {
  return (
    <div className="layout">
      <Navigation options={options} />
      <div className="layout__page custom-scroll">
        <Switch>
          <Route  component={ Home }/>
        </Switch>
      </div>
    </div>
  );
}

export default Layout
