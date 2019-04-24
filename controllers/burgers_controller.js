var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    // when root url hits a get requets, gets all burger data and renders result with index.handlebars
    burger.all(function (data) {

        var allBurgers = { burger: data };

        console.log(allBurgers)
        res.render("index", allBurgers)

    });
});

router.put("/api/burgers/:id", function (req, res) {
    // when api/burgers/:id route hits a put request with id params, update id burger devoured to true

    burger.eat(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })

});

router.post("/api/burgers", function (req, res) {

    // when api/burgers route hit a post request add burger information to mysql. Expects a name in the post request body

    burgerName = req.body.name;

    burger.add(burgerName, function (result) {


        res.json({ id: result.insertId });

    });


});




module.exports = router; 