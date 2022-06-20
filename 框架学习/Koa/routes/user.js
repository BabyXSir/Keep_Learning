const routers = require("koa-router")();
const { sendRegisterCode, register, login } = require("../controllers/user")

routers.post("/register_code", sendRegisterCode)

routers.post('/register', register)

routers.post("/login", login)


module.exports = routers;