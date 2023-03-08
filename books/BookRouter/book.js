const express = require("express")
const {createbook,getbooks,getonebook,deletebook} = require("../BookController/book")
const router = express.Router()

router.post("/book",createbook)
router.get("/getbooks",getbooks)
router.get("/getonebook/:bookid",getonebook)
router.delete("/deletebook/:bookid",deletebook)

module.exports = router
 