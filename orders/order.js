const express = require("express")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const order = require("./orderRouter")
const app = express()

mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("orderservice database connected")
}).catch(() => {
    console.log("orderservice database is not connected")
})

//Middleware
app.use(bodyParser.json())

//Router Middleware
app.use("/",order)

app.listen(3019, () => {
    console.log("server running 3019 Port...")
})