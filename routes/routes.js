var express = require('express');
var router = express.Router();

var defaultpage = require("../routes/default.js");
var jakt = require("../routes/jakt.js");

router.get("/", defaultpage.index);
router.get("/tjejer", defaultpage.index2);
router.get("/jakt", jakt.index);

module.exports = router;
