const mongoose = require('mongoose');
const User = require('./userModel');
const Comment = require('./comentModel')

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    outhor:{type:mongoose.Types.ObjectId,ref:User},
    comment:[{type:mongoose.Types.ObjectId,ref:Comment}],
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog