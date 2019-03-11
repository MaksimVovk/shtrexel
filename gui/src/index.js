import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components'

import * as serviceWorker from './serviceWorker'
import './styles/index.scss'

const routes = [
  { path: '/home', component: () => import('./pages/home/index.js') },
]

ReactDOM.render((
  <BrowserRouter>
    <Layout pages={routes}/>
  </BrowserRouter>
), document.getElementById('app'))

serviceWorker.unregister()
