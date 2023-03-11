const blog = require('../model/blogModel')

//find all blogs
const allBlog = async(req,res)=>{
    try {
        const allBlog = await blog.find({},{_id:0})
        res.status(200).json({message:'all blog found successfuly',result:allBlog})
    } 
    catch (error) {
        res.status(404).json({message:'blogs not found',error:error})
    }
}

//delet all blogs
const deletAll = async(req,res)=>{
    try {
        const deleted = await blog.deleteMany()
        res.status(200).json({message:'all blog are deleted', result:deleted})
    } 
    catch (error) {
        res.status(400).json({message:'something went wrong',error:error})
    }
}

//find specific blog
const singleBlog = async(req,res)=>{
    try {
        const singleBlog = await blog.findOne({_id:req.params.id})
        res.status(200).json({message:'blog is found successfuly',result:singleBlog})
    } 
    catch (error) {
        res.status(404).json({message:'no such blog',error:error})
    }
}

//create blog
const createBlog = async(req,res)=>{
   const {title,content} = req.body
    try {
        const newBlog = blog.create({title, content, publishDate: Date.now()})
        res.status(201).json({message:'user is created'})
    } 
    catch (error) {
        res.json(error)
    }
}


const deletBlog = async(req,res)=>{
    try {
      const deletedBlog = await blog.findByIdAndDelete({_id:req.params.id}) 
       res.status(200).json({message:'blog is deleted',result:deletedBlog})
    } 
    catch (error) {
        res.status(400).json({message:'not deleted',error:error})
    }
}


module.exports ={
    allBlog,
    deletAll,
    singleBlog,
    createBlog,
    deletBlog,
}