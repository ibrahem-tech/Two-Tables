const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    user: "root",

    password: "yourRootPassword",
    database: "top_songsDB"
});


