const mongoose = require("mongoose")
const schema = mongoose.Schema

const customerSchema = new schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Customers",customerSchema)