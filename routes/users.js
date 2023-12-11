var mongoose = require('mongoose')
const plm = require("passport-local-mongoose")


const connectDB = async function(){
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pin")
    console.log("\nDB is connected\n");
    
  } catch (error) {
    console.log("Db Connection Failed",error);
  }
} 
connectDB()

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required:true,
  },
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number,
  boards:[],
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Posts'
    }
  ]

})
userSchema.plugin(plm)

const User = mongoose.model("User",userSchema);
module.exports = User
