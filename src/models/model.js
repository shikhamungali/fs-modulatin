const mongoose = require('mongoose')

const excelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    error:{
        type:String,
        default:"N/A"
    },
    sucess:{
        type:String,
        default:"not registered"
    }
},
    { timestamps: false });

module.exports = mongoose.model('excelSheet', excelSchema)