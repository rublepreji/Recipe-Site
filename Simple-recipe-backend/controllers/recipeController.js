const recipes = require('../Models/recipeSchema')

exports.getAllRecipes=async(req,res)=>{
    console.log("Inside recipe controller");
    
    try{
        const response = await recipes.find()
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        
    }
}