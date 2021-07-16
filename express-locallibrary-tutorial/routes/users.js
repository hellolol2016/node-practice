var express = require('express');
var router = express.Router();
let url = require('url');
/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
