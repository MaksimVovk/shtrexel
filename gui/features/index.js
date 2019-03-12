const fs = require('fs')
const { Router } = require('express')
const { getModuleName } = require('../infra/additional')

const router = module.exports = Router()

const features = fs.readdirSync(`${__dirname}`).filter(it => it !== 'index.js').map(it => getModuleName(it))

features.forEach(k => {
  router.use(`/${k}`, require(`./${k}`))
})
