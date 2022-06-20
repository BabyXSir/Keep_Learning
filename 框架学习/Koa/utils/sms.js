const { sms } = require("../config/index");
const crypto = require('crypto')
const cryptoJS = require("crypto-js")
require('dotenv').config({ path: '.env' })

const createCode = () => {
  let str = '';
  for (var i = 0; i < 6; i++) {
    str += Math.floor(Math.random() * 10)
  }
  return str;
}


const createSign = (params) => {
  let method = "GET";

  let query = Object.keys(params).sort().map((item) => `${item}=${params[item]}`).join("&")
  let str = `${method}${sms.url}/?` + query;
  console.log(str);

  // let hmac = crypto.createHmac("sha1", process.env.secretKey)
  // let sign = hmac.update(str).digest("base64")
  let sign = cryptoJS.HmacSHA1(str, process.env.secretKey);
  sign = cryptoJS.enc.Base64.stringify(sign)

  return sign
}

module.exports = {
  createCode,
  createSign
}