var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql650.main-hosting.eu",
  user: "u423481971_codexavion",
  password: "Studying17",
  database: "u423481971_mgateway"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE suppliers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});