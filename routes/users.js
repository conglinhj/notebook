var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controler');

/* GET users listing. */
router.get('/', usersController.index);
router.get('/:id', usersController.show);

module.exports = router;
