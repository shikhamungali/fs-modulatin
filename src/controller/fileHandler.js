
const sendMail = require("../email/mailService");

const {uploadFile} =require('../aws/s3')
const Admintemplate = require("../email/Admintemplate");
var path = require("path")
let finalPath = path.resolve(`test2.xlsx`)
const {emails} = require("../controller/fileRead")

require("dotenv").config();

exports.uploadHandler = async (req, res) => {
  try {
 uploadFile(`${finalPath}`)



 sendMail({
    from: 'shikha1081998@gmail.com',
    to: `${emails} , shikha1081998@gmail.com ` ,
    subject: 'EazyShare file sharing',
    text: `${'shikha1081998@gmail.com'} shared a file with you.`,
    html: Admintemplate({
              emailFrom:'shikha1081998@gmail.com', 
              downloadLink: `https://blogapi.s3.us-west-2.amazonaws.com/final.xlsx` ,
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

