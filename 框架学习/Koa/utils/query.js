let mysql = require("mysql");
let { mysql: config } = require("../config/index")

// 创建连接池
let pool = mysql.createPool(config)

// 连接数据库
let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err);
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
        console.log(err);
        reject(err);
          } else {
            resolve(rows);
          }

          connection.release()
        })
      }
    })
  })
}

module.exports.query = query;