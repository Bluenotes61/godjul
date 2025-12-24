var express = require('express');
var router = express.Router();

var defaultpage = require("../routes/default.js");
var jakt = require("../routes/jakt.js");
var freja = require("../routes/freja.js");
var selma = require("../routes/selma.js");
var ella = require("../routes/ella.js");

router.get("/", defaultpage.index);
router.get("/tjejer", defaultpage.index2);
router.get("/jakt", jakt.index);
router.get("/freja", freja.index);
router.get("/selma", selma.index);
router.get("/ella", ella.index);



module.exports = router;
