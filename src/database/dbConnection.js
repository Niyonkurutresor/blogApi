const mongoose = require('mongoose');

const dbConntection = async()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect('mongodb://127.0.0.1:27017/solvitBlogApi')
        console.log('database is connecte successfuly')
    } 
    catch (error) {
        console.log('something went wrong, db is not connected')
    }
}


module.exports = dbConntection