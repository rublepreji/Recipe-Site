const mongoose = require('mongoose')
const connectionString = process.env.connectionString

mongoose.connect(connectionString).then((res)=>{
    console.log("recipeserver is connected to DB");
    
})
.catch((err)=>{
    console.log(`Error ${err}`);
    
})