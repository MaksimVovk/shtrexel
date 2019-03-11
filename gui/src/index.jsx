import { map, groupBy } from 'lodash'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components'

import './styles/index.scss'

const routes = [
  { path: '/home', component: () => import('./pages/home/index.jsx') },
]

const context = require.context('../../etc/shtrexel/shots')

const items = context.keys().map(k => {
  const [category, ...names] = k.replace(/\.png$/, '').split('/').slice(1)

  return ({
    category,
    name: names
  })
})

const shots = map(groupBy(items, it => it.category), (images, name) => ({ name, options: images.map(it => it.name[0]) }))

ReactDOM.render((
  <BrowserRouter>
    <Layout pages={routes} options={shots}/>
  </BrowserRouter>
), document.getElementById('app'))
