const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    user: "root",

    password: "yourRootPassword",
    database: "top_songsDB"
});


connection.connect(function(err){
    if (err) throw err;
    runSearch()
});

function runSearch(){
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "what yould you like to do now?",
        choises: [
            "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "Find artists with a top song and top album in the same year"
         ]
    })
    .then(function(answer){
        switch (answer.action){
            case "Find songs by artist": artistSearch();
            break;
            case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;

      case "Find artists with a top song and top album in the same year":
        songAndAlbumSearch();
        break;
        }
    });
}

