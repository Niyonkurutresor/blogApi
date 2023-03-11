const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    publishDate:String,
})

const Blog = mongoose.model('User',blogSchema)
module.exports = Blog