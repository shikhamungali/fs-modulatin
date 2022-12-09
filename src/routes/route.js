const express = require("express")
const router = express.Router()
const {sheetData}= require("../controller/fileRead")
const {uploadHandler}= require("../controller/fileHandler")
const {uploads}=require("../aws/multer");




router.post("/sheetData",uploads.single("File"),sheetData,uploadHandler)







module.exports=router