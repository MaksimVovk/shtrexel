import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home'
import { Navigation } from '../index.js'

import './index.scss';

function Layout ({ pages }) {
  console.log(pages)
  return (
    <div className="layout">
      <Navigation />
      <div className="layout__page custom-scroll">
        <Switch>
          {pages.map((p, i) =>
            <Route key={i} path="`${p.path}`" component={p.component}/>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default Layout
