import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [2, "First Name must contain atleast 2 Characters!"]
    },

    lastName:{
        type:String,
        required: true,
        minLength: [2, "Last Name must contain atleast 2 Characters!"]
    },

    email:{
        type:String,
        required: true,
        validate: [validator.isEmail, "Please Enter a Valid Email Id!"]
    },

    phone:{
        type:String,
        required: true,
        minLength: [10, "PLease Enter a Valid Phone Number!"],
        maxLength: [10, "PLease Enter a Valid Phone Number!"]
    },

    message:{
        type:String,
        required: true,
        minLength: [10, "PLease Etype in a valid message"]
    }


});

export const Message = mongoose.model("Message", messageSchema);