const {Schema, model} = require('mongoose');
const modelUser = new Schema({
  name:{
    type:String,
    required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
      password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
      },
  
})
const users = model('users',modelUser);
module.exports = users;