const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.index);
router.get('/create', userController.showCreateForm);
router.post('/create', userController.create);
router.get('/:id', userController.show);

module.exports = router;
