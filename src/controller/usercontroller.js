const mongoose = require('mongoose')
const User = require('../model/userModel')
const {sign,verfiy} = require('../helper/jwt')

class userController {
    
    //creating account
    static async createUser(req,res){
       try {
        const {username,age,email} = req.body
        const newUser = await User.create({username,age,email})
        //you can modifie data as you want before it been stored into database
        newUser.email = undefined
        newUser.age +=1
        //create access token 
        const id = newUser._id
        const accessToken = sign({id}) 
        //send token in cookie
        res.cookie('token',accessToken,{maxAge:1000*60*5,httpOnly:true})

        res.status(201).json({message:'user is created',user:newUser})
       } 
       catch (error) {
        res.status(400).json({message:'something went wrong',error:error})
       }
    }

    //user login
    static async login(req,res){
        try {
            
           const {username,email}= req.body
           const foundUser = await User.findOne({username,email}) 
           const id = foundUser._id
           const accessToken = sign({id})
           res.cookie('token',accessToken,{maxAge:1000*60*5,httpOnly:true})
           res.status(200).json({message:'user is found successfully!',user:foundUser})   
        } 
        catch (error) {
            res.status(400).json({message:'something went wrong',error:error})
        }
    }
}


module.exports = userController