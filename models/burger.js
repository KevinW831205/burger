var orm = require("../config/orm.js")

//add finished

var burger = {

    all: function (callback) {
        //Grabs for burgers table and passes data to callback
        orm.selectAll("burgers", callback)
    },

    add: function (burgerName, callback) {
        //Takes burgerName as argument and pushes it to burgers table 
        orm.insertOne("burgers", burgerName, callback)

    },

    eat: function (burgerID, callback) {
        //Take burgerID as argument and updates the devoured to true
        orm.updateOne("burgers", { devoured: true }, { id: burgerID }, callback)

    }

}

// test functions
// burger.add("double Cheese",console.log)
// burger.eat(5, console.log)
// burger.all(console.log)


module.exports = burger;