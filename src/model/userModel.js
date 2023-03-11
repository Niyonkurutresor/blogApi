const mongoose = require('mongoose');

const userSchema = new mongoose.model({
    username:String,
    age:Number,
    email:String,
})

const User = mongoose.model('User',userSchema)
module.exports = User