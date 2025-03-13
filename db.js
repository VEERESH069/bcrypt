const {connect} = require('mongoose')

const connectDB = async(url)=>{
  try{
    await connect(url);
    // return res.status("200").json({message:"Database connected successfully"})
    console.log("Database Connected Successfully")

  }
  catch(err){
    console.log("Database not connected",err)
  }
}
module.exports = connectDB;