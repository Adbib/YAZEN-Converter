var express = require('express');
var router = express.Router();
var cors = require('cors')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, user:"123"}
  ]);

  
});

module.exports = router;
