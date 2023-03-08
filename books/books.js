const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const book = require("./BookRouter/book")


mongoose.connect(process.env.db,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Book Database connected")
}).catch(()=>{
    console.log("Book Database is not connected")
})

//Middlewares
app.use(bodyParser.json())

//Router Middleware
app.use("/",book)

app.get("/",(req,res)=>{
    res.send("This is the books service")
})

app.listen(3017,()=>{
    console.log("server running...")
})