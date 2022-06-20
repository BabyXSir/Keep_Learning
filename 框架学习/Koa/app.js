// 学习目标：用koa框架完成密码加密、请求token验证、短信发送、微信支付等功能。
const Koa = require("koa")
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const static = require("koa-static")
const path = require("path")
const jwt = require("jsonwebtoken");
const koaJwt = require("koa-jwt")
const { base: { jwt_secret } } = require("./config/index")
const routers = require("koa-router")();



app.use(async (ctx, next) => {
  ctx.body = "default response"
  await next();
})

// body解析器
app.use(bodyparser());

// token拦截
app.use(koaJwt({ secret: jwt_secret }).unless({
  path: [ '/login', '/register_code', '/register']
}))

// 静态资源访问器
app.use(static(path.join(__dirname, 'public')))

// 定义路由
const indexRouters = require("./routes/index");
routers.use(indexRouters.routes())
const userRouters = require("./routes/user");
routers.use(userRouters.routes())

app.use(routers.routes())
app.use(routers.allowedMethods())


module.exports = app;