var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {

        var allBurgers = { burger: data };

        console.log(allBurgers)
        res.render("index", allBurgers)

    });
});

router.put("/api/burgers/:id", function (req, res) {

    burger.eat(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })

});

router.post("/api/burgers", function (req, res) {

    burgerName = req.body.name;

    burger.add(burgerName, function (result) {


        res.json({ id: result.insertId });

    });


});




module.exports = router; 