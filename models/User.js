const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    lowercdase:true,
     validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is invalid!")
        }
    }
  },
  password: {
    type: String,
    required: true,
    trim:true,
    length:8,
    lowercase:true,
    validate(value){
        if(value.toLowerCase().includes("password")){
            throw new Error("Password too weak,it musn't contain the word password")
        }
    }

  },
  tokens: [{
    token: {
    type: String,
    required: true
      }
    }]
}, {
  timestamps: true   //automatically creates createdAt and updatedAt 
  
  
 
  
});
// Auth tokens
UserSchema.methods.generateAuthToken = async function () {
  const user = this
   const token = jwt.sign({ _id: user._id.toString()},      process.env.JWT_SECRET)
user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

module.exports = mongoose.model("User", UserSchema);
