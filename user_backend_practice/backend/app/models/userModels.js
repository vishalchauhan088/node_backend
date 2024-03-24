import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const User = mongoose.model('UserInfo',userSchema);

export default User;