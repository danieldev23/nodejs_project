var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mysql = require("mysql");
mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_shop",
});
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(8080);
// localhost:8080
app.get("/", function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs_shop",
  });

  con.query("SELECT * FROM products", (err, result) => {
    res.render("pages/index.ejs", { result: result });
  });
});
