import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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

    uid:{
        type:String,
        required: true,
        minLength: [12, "PLease Enter a Valid Aadhar Number"],
        maxLength: [12, "PLease Enter a Valid Aadhar Number!"]
    },

    dob:{
        type:Date,
        required: [true, "DOB is required!"]
    },

    gender:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required: true,
        minLength: [4, "Password must contain atleast 4 characters!"],
        select:false
    },

    role:{
        type:String,
        required:true,
        enum:["Admin","Patient","Doctor"]
    },

    doctorDepartment:{
        type:String
    },

    docAvatar:{
        public_id:String,
        url:String
    }
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    })
}
export const User = mongoose.model("User", userSchema);