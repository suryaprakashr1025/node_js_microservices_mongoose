const mongoose = require("mongoose")
const schema = mongoose.Schema

const BookSchema = new schema({

    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    numberPages:{
        type:String,
        required:false
    },
    publisher:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model("Book",BookSchema)