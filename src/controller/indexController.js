
const home = (req,res)=>{
    res.status(200).json({message:'this is home rout'})
}

module.exports ={
    home,
}