const express = require('express');
const config = require('./helper/config')
const app = require('./app');

const server = express()
server.use(app)

const port = config.PORT ||4000
server.listen(port,()=>{
    console.log(`port is runing on  prot ${port}`)
})