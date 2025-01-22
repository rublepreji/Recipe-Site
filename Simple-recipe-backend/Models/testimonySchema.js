const mongoose = require('mongoose')

const testimonySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
    
})
const testimonies = mongoose.model('testimonies',testimonySchema)
module.exports=testimonies