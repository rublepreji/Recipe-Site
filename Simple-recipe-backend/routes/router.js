const express = require('express')
const recipecontroller = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const registerController = require('../controllers/registerController')
const router = new express.Router()

router.get('/allrecipes',recipecontroller.getAllRecipes)
router.post('/addTestimony',testimonyController.addTestimony)
router.post('/register',registerController.registerAPI)
router.post('/login',registerController.loginAPI)

module.exports=router