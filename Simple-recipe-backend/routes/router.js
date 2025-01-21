const express = require('express')
const recipecontroller = require('../controllers/recipeController')
const router = new express.Router()

router.get('/allrecipes',recipecontroller.getAllRecipes)

module.exports=router