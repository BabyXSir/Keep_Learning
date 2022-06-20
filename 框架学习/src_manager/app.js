// 学习目标：用koa框架完成密码加密、请求token验证、短信发送、微信支付等功能。
const Koa = require("koa")
const app = new Koa();
const static = require("koa-static")
const path = require("path")

const mysql = require("mysql");
const conn = mysql.createConnection({
  host:"120.55.171.5",
  port: 3306,
  user: 'letao_server',
  password: '1234',
  database: "letao_server",
})
conn.query('select * from code',function(err,res) {
  if (err) console.log(err);
  console.log(res);
});



app.use(async (ctx, next) => {
  ctx.body = "This is azheng's server."
  await next();
})

// 静态资源访问器
app.use(static(path.join(__dirname, 'public')))

app.listen(9999)