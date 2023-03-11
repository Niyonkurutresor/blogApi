const express = require('express');
const bodyParser = require('body-parser')

const userController =require('../controller/usercontroller');

const rout = express()

rout.get('/',userController.user)

module.exports = rout