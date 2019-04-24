var orm = require("../config/orm.js")

//add finished

var burger = {

    all: function (callback) {
        orm.selectAll("burgers", callback)
    },

    add: function (burgerName, callback) {

        orm.insertOne("burgers", burgerName, callback)

    },

    eat: function (burgerID, callback) {

        orm.updateOne("burgers", { devoured: true }, { id: burgerID }, callback)

    }

}


// burger.add("double Cheese",console.log)
// burger.eat(5, console.log)
// burger.all(console.log)


module.exports = burger;