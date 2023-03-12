const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    outhor:{type:mongoose.Types.ObjectId},
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog