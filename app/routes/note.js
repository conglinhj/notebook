const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');

router.get('/', noteController.index);
router.get('/create', noteController.showCreateForm);
router.post('/create', noteController.create);
router.get('/:id', noteController.show);

module.exports = router;
