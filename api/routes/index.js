var express = require("express");
var router = express.Router();
const ioShared = require("./../socket");

/* GET home page. */
router.get("/", function (req, res, next) {
  ioShared.getIO().emit("test", { data: { test: "que loco" } });
  res.json({ name: "hello" });
});

module.exports = router;
