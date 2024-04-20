import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("Connected to the Database!");
    }).catch(err=>{
        console.log(`Some error occurred while connecting to the database:${err}`);
    })
}