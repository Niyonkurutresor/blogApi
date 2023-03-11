const express = require('express');
const path = require('path')

const dbConntection = require('./database/dbConnection')
const index  = require('./routes/indexrout')
const user = require('./routes/userRout');
const blog = require('./routes/blogRout');
const { json } = require('body-parser');

const app = express()

dbConntection()

app.use(express.static(path.join(__dirname,'public')))
app.use(json())

app.use('/api',index)
app.use('/api/user',user)
app.use('/api/blog',blog)

module.exports = app