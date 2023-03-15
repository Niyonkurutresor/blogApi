const commentModel = require('../model/comentModel')
const blog = require('../model/blogModel')

exports.comment = async (req,res)=>{
    try {
        const {commentaName,content,bookId} = req.body;
        const comment = await commentModel.create({commentaName:commentaName,content:content})
        await blog.findOneAndUpdate({_id:bookId},{$push:{comment:comment._id}})

        res.status(201).json({message:'comment is created',comment:comment})
    } 
    catch (error) {
      res.status(401).json({message:'something went wrong',error:error})  
    }
}