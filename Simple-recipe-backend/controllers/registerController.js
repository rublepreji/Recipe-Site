const register = require('../Models/registerSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerAPI=async(req,res)=>{
    console.log("Inside RegisterAPI");
    
  const{username,email,password}=req.body
    const existingUser = await register.findOne({email})
    if(existingUser){
        res.status(400).json("User already exist")
    }else{
        const encryptedPassword = await bcrypt.hash(password,10)
        console.log(encryptedPassword);
        
        const newUser = new register({
            username,email,password:encryptedPassword
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}

exports.loginAPI=async(req,res)=>{
    console.log("Inside loginAPI");
    
    const {email,password}=req.body
    const existingUser = await register.findOne({email})
    if(existingUser){
        const actualPswd = await bcrypt.compare(password,existingUser.password)
        if(actualPswd){
            //token generation
            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)
            console.log(token);
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(400).json("Incorrect password")
        }
    }
       
    else{
        res.status(400).json("Invaild User")
    }
}