const express = require('express')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.config')

const { Router } = require('express')

const app = express()

const compiler = webpack(webpackConfig)
const instance = webpackDevMiddleware(compiler, { noInfo: true, lazy: false })

const port = 8080

app.use(instance)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(`${__dirname}/../public`))
app.use(express.static(`${__dirname}/../features`))
app.use('/', require('../features'))
app.use((req, res, next) => res.sendFile(path.resolve(`${__dirname}/../public/index.html`)))

const server = app.listen(port)

process.on('SIGINT', () => {
  server.close()
  instance.close()
})
