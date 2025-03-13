const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const users = require('./model.js')

router.post('/signup',async(req,res)=>{
  const {name,password,email} = req.body;
  try{
    if (!name || !password || !email){
      return res.status(404).json({message:"Required all fields"})
    }
  const hashpass = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password,hashpass);

  const user = new users({
    name:name,email:email,password:pass
  })
  await user.save();
  res.status(200).json({message:"Register done Successfully"})
  }
  catch(err){
    return res.status(404).json({messgae:"Can't signup this email ID",err})
  }
})
module.exports = router;