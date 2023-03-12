const express = require('express');
const bodyParser = require('body-parser')
const userController =require('../controller/usercontroller');

const rout = express()
rout.use(bodyParser.urlencoded({extended:true}))

rout.post('/create',userController.createUser)

module.exports = rout