require('dotenv').config()
const express = require("express")
const cors = require('cors')
const recipeserver = express()
const db = require('./DB/connection')
const router = require('./routes/router')

recipeserver.use(cors())
recipeserver.use(express.json())
recipeserver.use(router)
const PORT = 3000 ||process.env.PORT
recipeserver.listen(PORT,()=>{
    console.log("Server runs in:",PORT);
    
})
recipeserver.get('/',(req,res)=>{
    res.status(200).json("Welcome to recipeserver")
})