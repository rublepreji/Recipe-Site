const mongoose =require('mongoose')
const { type } = require('os')
const recipeschema = mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    } ,
    ingredients: {
        type:Array,
        required:true
    },
     
    instructions: {
        type:String,
        required:true
    },
    prepTimeMinutes: {
        type:String,
        required:true
    },
    cookTimeMinutes: {
        type:String,
        required:true
    },
    servings: {
        type:String,
        required:true
    },
    difficulty: {
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    caloriesPerServing:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    mealType: {
        type:Array,
        required:true
    }
})

const recipemodel = mongoose.model('recipes',recipeschema)
module.exports=recipemodel