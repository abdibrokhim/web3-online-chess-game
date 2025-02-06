/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/
const express = require("express");
const router = express.Router();
const axios = require('axios');
const asyncErrorHandler = require("../config/middleware")

const util = require("../config/util");

router.get("/token", function (req, res, next) {
    res.send(util.randomString(20)); 
});

module.exports = router;
