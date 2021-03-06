var mysql = require("mysql");

var connection;

//setup connection to mysql either jawsdb for heroku or localhost mysql

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Asdflkjh1!",
        database: "burger_db"
    });

}
// test connection
// connection.query("SELECT * FROM burgers", function (err, data) {
//     if (err) {
//         return res.status(500).end();
//     }

//     console.log(data)

//     });


//logs if connected
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;