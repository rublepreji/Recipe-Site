const testimonies = require('../Models/testimonySchema')

exports.addTestimony = async(req,res)=>{
    console.log("Inside the Testimony function");
    const {name,email,message}=req.body
    try{
        const newTestimony = new testimonies({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch(err){
        res.status(400).json(err)
    }
    
}