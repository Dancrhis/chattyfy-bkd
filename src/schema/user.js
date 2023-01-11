import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true,
    },
    
})

export const userModel=mongoose.model("users",userSchema,"users")
//jjhsjkhdjkshds