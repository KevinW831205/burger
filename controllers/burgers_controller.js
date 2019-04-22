var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function () {
    burger.all(function (data) {
        var allBurgers = data;
        console.log(allBurgers);
    });
});


module.exports = router;