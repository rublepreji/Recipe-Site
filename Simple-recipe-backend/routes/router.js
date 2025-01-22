const express = require('express')
const recipecontroller = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const router = new express.Router()

router.get('/allrecipes',recipecontroller.getAllRecipes)
router.post('/addTestimony',testimonyController.addTestimony)
module.exports=router