const express = require('express');
const bodyParser = require('body-parser')
const cookiePerser = require('cookie-parser')

const userController =require('../controller/usercontroller');

const rout = express()
rout.use(bodyParser.urlencoded({extended:true}))
rout.use(cookiePerser())


rout.post('/create',userController.createUser)
rout.post('/login',userController.login)

module.exports = rout