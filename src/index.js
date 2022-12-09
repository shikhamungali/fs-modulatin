const route = require("./routes/route")
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const express =  require('express');
const app =  express();
const path = require('path'); 
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1/exceldata",{
     useNewUrlParser: true 
    })
    .then(()=>console.log("MONGO-DB is connected on port 27017"))
    .catch((error)=>console.log(error))




dotenv.config({
    path: path.resolve(`${process.env.NODE_ENV}.env`)
});
console.log(path.resolve(`${process.env.NODE_ENV}.env`))

  let  NODE_ENV = process.env.NODE_ENV 
  let  HOST = process.env.HOST 
  let  PORT = process.env.PORT 


app.use("/",route)

app.listen(PORT, HOST, () => {
    console.log(`APP LISTENING ON http://${HOST}:${PORT}`);
})