var connection = require("./connection")




var orm = {

    selectAll: function (table, callback) {
        // function that takes input of a table name and a callback function.
        // selects all data from table in mysql and passes the data into a callback
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, table, function (err, data) {
            if (err) {
                return data.status(500).end();
            }
            callback(data);
        });
    },

    insertOne: function (table, values, callback) {
        //function that takes input of a table name, data(burger_name), and a callback function
        //inserts data into the table and passes result to callback

        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";

        connection.query(queryString, [table, [values]], function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        })
    },

    updateOne: function (table, setObj, condition, callback) {
        //function that takes input of a table name, setObj - the values which to update, condition which to update, and a callback function
        //updates table and returns the result into a callback function

        var queryString = "UPDATE ?? SET ? WHERE ?"

        connection.query(queryString, [table, setObj, condition], function (err, result) {
            if (err) {
                throw err
            }

            callback(result);
        })
    },

    deleteOne: function (table, condition, callback) {
        //function that takes input of tablename condition which to delete, a callback function
        //removes conditioned element from table and returns result to callback function

        var queryString = " DELETE FROM ?? WHERE ?"

        connection.query(queryString, [table, condition], function (err, result) {
            if (err) {
                throw err
            }

            callback(result);

        })

    }


}

// test functions
// orm.updateOne("burgers", { devoured: true }, { id: 3 }, console.log)
// orm.insertOne("burgers", "cheese", console.log)
// orm.selectAll("burgers", console.log)
// orm.deleteOne("burgers", { id: 3 }, console.log)

module.exports = orm;