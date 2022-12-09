
const sendMail = require("../email/mailService");

const {uploadFile} =require('../aws/s3')
const Admintemplate = require("../email/Admintemplate");
const link = require("../models/link");

require("dotenv").config();

exports.uploadHandler = async (req, res) => {
  try {
 uploadFile("test2.xlsx")
 sendMail({
    from: 'shikha1081998@gmail.com',
    to: 'shikha1081998@gmail.com',
    subject: 'EazyShare file sharing',
    text: `${'rvsharma2652@gmail.com'} shared a file with you.`,
    html: Admintemplate({
              emailFrom:'shikha1081998@gmail.com', 
              downloadLink: `${link}` ,
              size: parseInt(1000) + ' KB',
              expires: '24 hours'
          })
  })
  .then(() => {
    console.log({success: true});
    res.status(200).send({status:true})
  })
  .catch(err => {
    console.log({error: 'Error in email sending.'});
  });


  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};