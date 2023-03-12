const mongoose = require('mongoose')
const User = require('../model/userModel')

class userController {
    static async createUser(req,res){
       try {
        const {username,age,email} = req.body
        const newUser = await User.create({username,age,email})
        //you can modifie data as you want before it been stored into database
        newUser.email = undefined;
        newUser.age +=1
        
        res.status(201).json({message:'user is created',user:newUser})
       } 
       catch (error) {
        res.status(400).json({message:'something went wrong',error:error})
       }
    }
}


module.exports = userController