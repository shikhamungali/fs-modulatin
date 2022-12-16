const express = require("express")
const router = express.Router()
const {sheetData}= require("../controller/fileRead")
const {uploadHandler}= require("../controller/fileHandler")





router.post("/sheetData",sheetData,uploadHandler)







module.exports=router