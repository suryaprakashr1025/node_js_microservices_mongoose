
const express = require("express")
const router = express.Router()

const {createOrder,getOrder} = require("./orderController")

router.post("/createorder",createOrder)
router.get("/getorder",getOrder)

module.exports = router