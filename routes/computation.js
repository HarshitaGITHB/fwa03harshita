var express = require("express");
var router = express.Router();



/* GET users listing. */

router.get("/", function (req, res, next) {
  randomNumber1 = Math.random() * (100 - 1) + 1;
  randomNumber2 = Math.random() * (100 - 1) + 1;

  hypot = Math.hypot(randomNumber1,randomNumber2)

  ceil = Math.ceil(randomNumber2) 

  clz = Math.clz32(randomNumber1) 

  res.send(`(hypot) applied to (${randomNumber1}, ${randomNumber2}) is ${hypot} <br>

            (ceil) applied to (${randomNumber2}) is ${ceil} <br>

            (clz) applied to (${randomNumber1}) is ${clz}`);
});

module.exports = router;