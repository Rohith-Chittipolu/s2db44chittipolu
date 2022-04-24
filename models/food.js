const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 Food_name:String,
 cuisine:{type:String,
minLength:3,
maxLength:20},
 calories:{type:Number,
min: 20,
max:500
}
}) 
 
module.exports = mongoose.model("Food",foodSchema)