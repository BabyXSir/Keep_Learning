const jwt = require("jsonwebtoken");
const { base: { jwt_secret }, sms: smsParams } = require("../config/index");
const { query } = require("../utils/query");
const { createCode, createSign } = require("../utils/sms")
const axios = require("axios");

async function sendRegisterCode(ctx,next) {
  let paramsError = {
    status: 400,
    msg: "参数未填写完整"
  }
  let successRes = {
    status: 200,
    msg: "请求成功"
  }
  let sendError = {
    status: 401,
    msg: "短信发送失败"
  }

  let mobile = ctx.request.body.mobile;
  if (!mobile) {
    ctx.body = paramsError;
  } else {
    let code = createCode();
    console.log(`code`, code)
    // 发验证码
    let url = "https://" + smsParams.url;
    let params = smsParams.params;
    params["PhoneNumberSet.0"] = `+86${mobile}`
    params["TemplateParamSet.0"] = code
    params["Nonce"] = Number(createCode())
    params["Timestamp"] = Math.floor(Date.now() / 1000).toString();
    params["Signature"] = createSign(params)
    console.log(`params`, JSON.stringify(params))

    let res1 = await axios({
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: url,
      params: params,

    })
    console.log(`res1`, res1.data.Response)
    if (res1.status != 200) {
      ctx.body = sendError;
      return next();
    }

    let time = Date.now();
    let res2 = await query("INSERT INTO code (CODE,TIME,MOBILE) VALUES (?,?,?)", [code, time, mobile])
    if (res2.affectedRows > 0) {
      ctx.body = successRes;
    }
  }

  next();
  
}

async function register(ctx,next) {
  let successRes = {
    status: 200,
    msg: "注册成功"
  }
  let paramsError = {
    status: 400,
    msg: "参数未填写完整"
  }
  let outtimeError = {
    status: 400,
    msg: "验证码超时"
  }
  let codeError = {
    status: 400,
    msg: "验证码错误"
  }
  let sameMobileError = {
    status: 400,
    msg: "该电话号码已被注册"
  }
  let sameUsernameError = {
    status: 400,
    msg: "该用户名已被注册"
  }

  let username = ctx.request.body.username;
  let mobile = ctx.request.body.mobile;
  let password = ctx.request.body.password;
  let code = ctx.request.body.code;

  ctx.body = successRes;
  if (!(username && mobile && password && code)) {
    // 参数不完整
    ctx.body = paramsError;
  } else {
    let res = await query("SELECT * FROM code WHERE  MOBILE = ? AND code = ?", [mobile, code])
    console.log(`res`, res)
    if (res[0]) {
      let time = Date.now() - res[0].time;
      // code超时
      if (time > 100000) {
        ctx.body = outtimeError;
      }
    } else {
      // code错误
      ctx.body = codeError;
    }

    let res2 = await query("SELECT * FROM user WHERE  USERNAME = ?", [username])
    // 用户名重复
    if (res2[0]) ctx.body = sameUsernameError;

    let res3 = await query("SELECT * FROM user WHERE  USERNAME = ?", [username])
    // 电话号码重复
    if (res3[0]) ctx.body = sameMobileError;
  }

  if (ctx.body.status == 200) {
    let res = await query("INSERT INTO user (USERNAME,PASSWORD,MOBILE) VALUES (?)", [[username, password, mobile]])

  }
  // ctx.body = successRes
  next();
  
}

async function login(ctx,next) {
  let token = ctx.request.get("Authorization");
  try {
    let res = jwt.verify(token.slice(7), jwt_secret);
    ctx.body = {
      msg: "success"
    }
  } catch (err) {
    console.log(err);
    ctx.status = 401
    ctx.body = { err }
  }
  console.log(1);

  next();
}

module.exports = {
  sendRegisterCode,
  register,
  login
}