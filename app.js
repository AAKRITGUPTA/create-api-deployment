// setting dotnev file
require("dotenv").config({path: "./.env"});
const express = require("express");
const app = express();

//mongodb connection
require("./models/connect").mongooseconnection();

// router
const indexRouter = require("./routes/indexRouter")

//setting logger
app.use(require("morgan")("common"));

//bodyparsar
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router setup -> must be second last
app.use("/api/user",indexRouter)

//wildcart routes / not found routes
app.all("*",(req,res)=>{
    res.status(404).json({ url: req.url, message:"page ot found 404"})
})

// creating server -- must be at last
app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT}`)
})
