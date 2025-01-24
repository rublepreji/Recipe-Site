const jwt = require('jsonwebtoken')

const jwtMiddlewares = (req,res,next) =>{
    console.log("Inside jwtMiddlewares");
    try{
        const token = req.headers['authorization'].slice(7);
        console.log(token);   
        if(token){
            jwtTokenVerification = jwt.verify(token,process.env.jwtkey) 
            console.log(jwtTokenVerification);
            req.payload = jwtTokenVerification.userId;  
            next()
        }
        else{
            res.status(404).json("Please provide the token")
        }
    }
    catch(err){
        res.status(401).json("Please Login")
        console.log(err);
    }
}
module.exports=jwtMiddlewares