const User = require("../models/userModel")

exports.home = (req,res,next)=>{
    res.status(202).json({success: true, message:"This is my first trail route."});
    // req -> getting data from frontend
    //res -> sending data to the frontend
    // res.send -> text message
    // res.json -> data json    
    
};

exports.register =async (req,res,next)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({success: true, user});
        
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
};

exports.readall = async (req,res,next)=>{
    try {
        const users = await User.find().select("+password");

        // const users = await User.find().select() //if show the password


        res.status(200).json({success: true, users});
        
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
};