const customer = require("./customerModel")


exports.createCustomer = async (req, res) => {
    try {
        const createCustomer = await new customer(req.body)

        createCustomer.save().then(() => {
            res.json({ message: "customer created" })
        }).catch(() => {
            res.json({ message: "customer created error" })
        })
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}

exports.getCustomer = async (req, res) => {
    try {
        const getCustomer = await customer.find()
        res.json(getCustomer)
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}

exports.getOneCustomer = async (req, res) => {
    try {
        const _id = req.params.customerid
        const getonecustomer = await customer.findById(_id)
        res.json(getonecustomer)
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const _id = req.params.customerid
        const findcustomer = await customer.findOne({_id:_id})
        console.log(findcustomer)
        if (findcustomer) {
            const deletecustomer = await customer.findByIdAndRemove(_id)
            res.json({ message: "customer deleted" })
        }else{
            res.json({message:"customer delete error"})
        }

    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}