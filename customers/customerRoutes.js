const express = require("express")
const router = express.Router()

const {createCustomer,getCustomer,getOneCustomer, deleteCustomer} = require("./customerController")

router.post("/createcustomer",createCustomer)
router.get("/getcustomer",getCustomer)
router.get("/getonecustomer/:customerid",getOneCustomer)
router.delete("/deletecustomer/:customerid", deleteCustomer)

module.exports = router