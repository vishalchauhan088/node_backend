import mongoose from "mongoose";
import dbName from './constant.js';

const uri = process.env.URI
const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(uri,{
            dbName : dbName
        });
        console.log(`${mongoose.connection.name}`);
        console.log(`data connected ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(`Connection Failed ${error}`);
        process.exit(1);
    }
}

export default connectDB;