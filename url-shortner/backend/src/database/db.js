import mongoose from "mongoose";
import dbName from "./constant.js";
const uri = process.env.URI;
const connectDB = async ()=>{
   try{
    const databaseInstance = await mongoose.connect(uri,{
      dbName:dbName
    });
    console.log('database connected successfully');
   }
   catch(err){
        console.log(`Error while connecting to database: ${err}`);
   }
}

export default connectDB;