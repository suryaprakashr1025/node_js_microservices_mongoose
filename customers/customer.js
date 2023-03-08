const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()
const app = express()
const customer = require("./customerRoutes")


mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Customer database connected")
}).catch(() => {
    console.log("customer database is not connected")
})

//MIDDLEWARE
app.use(bodyParser.json())

//Router Middleware
app.use("/",customer)
app.listen(3018, () => {
    console.log("server running on 3018 port")
})
