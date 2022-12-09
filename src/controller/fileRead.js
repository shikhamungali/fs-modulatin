const sheetModel = require("../models/model")
var XLSX = require('xlsx');
var path = require("path")



let sheetData = async (req, res,next) => {
    try {
        let finalPath = path.resolve(`i.xlsx`)
        var file = XLSX.readFile(`${finalPath}`)
        let data = []
        const sheets = file.SheetNames
        for (let i = 0; i < sheets.length; i++) {
            const temp = XLSX.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].EMPNAME && data[i].Email && data[i].MOBILENO) {
                data[i]["sucess"] = "registered"
                data[i]["error"] = "N/A"
                data[i]["mail"] = "sent"
                req.body.name = data[i].EMPNAME
                let inputEmail = await sheetModel.findOne({ email: data[i].Email });
                if (!inputEmail) {
                    req.body.email = data[i].Email
                } else {
                    data[i]["sucess"] = "non registered"
                    data[i]["error"] = "email is not unique"
                    data[i]["mail"] = "not sent"
                    continue;
                }
                let inputMobile = await sheetModel.findOne({ phone: data[i].MOBILENO });
                if (!inputMobile) {
                    req.body.phone = data[i].MOBILENO
                } else {
                    data[i]["sucess"] = "non registered"
                    data[i]["error"] = "phoneno. is not unique"
                    data[i]["mail"] = "not sent"
                     continue; 
                    }
                req.body.sucess = "registered"
                let users = await sheetModel.create(req.body)
            }
            else {
                if (!data[i].Email) {
                    data[i]["sucess"] = "non registered"
                    data[i]["error"] = "email is missing"
                    data[i]["mail"] = "not sent"

                }
                if (!data[i].MOBILENO) {
                    data[i]["sucess"] = "non registered"
                    data[i]["error"] = "phone number is missing"
                    data[i]["mail"] = "not sent"
                }
            }
        }
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "test");
        XLSX.writeFile(wb, "test2.xlsx")
        // req.file["path"]= path.resolve(`test2.xlsx`)
        next()
    
    }
 catch (err) {
    res.status(500).send({ status: false, message: err.message })
}
}


module.exports = { sheetData }