const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 Food_name:String,
 cuisine:String,
 calories:Number
}) 
 
module.exports = mongoose.model("Food",foodSchema)