const AWS = require("aws-sdk");
const fs = require("fs");
const path = require('path');
const dotenv = require("dotenv")

dotenv.config({ path: path.resolve(`${process.env.NODE_ENV}.env`) });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.uploadFile = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'final.xlsx',
      Body: data
    };
        s3.upload(params, function (err, data) {
          if (err) return ({ error: err })
          let x = data.Location
          console.log(data.Location);
          return ({ address: data.Location })
        })
  
  })

};

