const express = require('express');
const bodyParser = require('body-parser')

const blogController = require('../controller/blogController')

const rout = express()
rout.use(bodyParser.urlencoded({extended:false}))

rout.get('/all',blogController.allBlog)
rout.post('/delete',blogController.deletAll)
rout.get('/single/:id',blogController.singleBlog)
rout.post('/create',blogController.createBlog)
rout.post('/delete/:id',blogController.deletBlog)

module.exports = rout