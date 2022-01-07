const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wpt",
};

const addUser = async (data) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into data(message) values(?)`;
  await connection.queryAsync(sql, [data.message]);
  console.log("Conection success");
  await connection.endAsync();
};
// let data = {
//     message:"Hello"
// }
// addUser(data);
const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `select * from data`;
  let list = await connection.queryAsync(sql, []);
  console.log("Data Sent Successfully");
  await connection.endAsync();
  return list;
};
// selectUser();

module.exports = {
  addUser,
  selectUser,
};
