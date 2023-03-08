const mongoose = require("mongoose")
const order = require("./orderModel")
const axios = require("axios")

exports.createOrder = async (req, res) => {
    try {

        const getCustomer = await axios.get("http://localhost:3018/getcustomer")
        console.log(getCustomer.data)

        const getBooks = await axios.get("http://localhost:3017/getbooks")
        console.log(getBooks.data)

        const cust = getCustomer.data
        const book = getBooks.data

        const findCust = cust.some(custid => {
            return custid._id === req.body.customerID
        })

        const findBook = book.some(bookid => {
            return bookid._id === req.body.bookID
        })
        if (findCust && findBook) {
            const oneOrder = new order(req.body)

            oneOrder.save().then(() => {
                res.json({ message: "order created" })
            }).catch(() => {
                res.json({ message: "order is not created" })
            })
        } else {
            res.json({ message: "invalid customer and book" })
        }

    } catch (error) {
        res.status(500).json({ message: "somethig went wrong" })
    }
}

exports.getOrder = async (req, res) => {
    try {
        const getorder = await order.find()
        res.json(getorder)
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}
