var express = require('express');
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerCheck")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires{ email, firstName, lastName, password, confirmPassword} -> req.body
 * @description
 * Keep in mind the concern of Security, Performance and Edge cases.
 * LEVEL - 1:
 * email Validation -> must be a proper email
 * Password Validation -> Min 6, one uppercase, one lowercase, etc.
 * Password Confirm.
 * LEVEL - 2:
 * Check if there is a JS/ SQL Injection.(String JavaScript ya SQL Commands ki tarah na ho) -> THA
 * LEVEL - 3:
 * Check if email already exists.
 * Hash Password
 * Convert email in lowercase.
 * Save
 * 
 */

router.post('/register', )

module.exports = router;