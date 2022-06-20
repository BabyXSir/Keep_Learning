const routers = require("koa-router")();

routers.get('/', (ctx, next) => {

  ctx.body = {
    status: 200,
    content: "首页"
  }
})


module.exports = routers;