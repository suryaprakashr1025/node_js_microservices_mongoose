const mongoose = require("mongoose")
const schema = mongoose.Schema

const orderSchema = new schema({
    customerID:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    bookID:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    initialDate:{
        type:Date,
        require:true
    },
    deliveryDate:{
        type:Date,
        require:true
    }

})

module.exports = mongoose.model("Order",orderSchema)
