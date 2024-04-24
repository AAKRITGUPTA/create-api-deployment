const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [6,"name length atleast 6 character"],
    },
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minLength: [6,"Username length atleast 6 character"],
    },
    email:{
        type: String,
        required: [true, "email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        trim: true,
        select: false, // if anyone can not get password
        minLength: [6,"Password length atleast 6 character"],
        maxLength: [15, "password length almost 15 character"],
        // match: [(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$,'fill a valid password'],


    },
    gender:{
        type: String,
        required: [true, "Gender is required"],
        enum: ["male","female","other"],
    }
});


const User = mongoose.model('user',userModel);

module.exports = User;