require('dotenv').config({ path: '.env' })


const base = {
  jwt_secret: "secret"
}
const mysql = {
  host: "120.55.171.5",
  port: '3306',
  user: "letao_server",
  password: '1234',
  database: "letao_server"
}
const sms = {
  url: "sms.tencentcloudapi.com",
  params: {
    // 公共参数
    Action: "SendSms",
    Region: "ap-guangzhou",
    Timestamp:"",
    Nonce:"",
    SecretId: process.env["secretId"],
    Version: "2021-01-11",
    // 短信发送参数
    SmsSdkAppId: process.env["SmsSdkAppId"],
    TemplateId: process.env["TemplateId"],
    SignName: "达简网络",
  }
}

module.exports = {
  base,
  mysql,
  sms
}