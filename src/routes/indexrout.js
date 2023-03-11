const express = require('express');
const bodyParser = require('body-parser')
const indexController = require('../controller/indexController')

const rout = express()

rout.get('/',indexController.home)

module.exports = rout