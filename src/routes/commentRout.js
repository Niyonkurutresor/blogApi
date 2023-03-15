const express = require('express')
const bodyParser = require('body-parser')
const commentController = require('../controller/commentController')
const rout = express()
rout.use(bodyParser.urlencoded({extended:false}))

rout.post('/',commentController.comment)

module.exports = rout