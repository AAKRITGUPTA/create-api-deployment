const mongoose = require("mongoose")

exports.mongooseconnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("connection established")
        
    } catch (error) {
        console.log(error.message)
        
    }
};