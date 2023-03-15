const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    commentaName:String,
    content:String,
})

module.exports = mongoose.model('Comment',commentSchema)