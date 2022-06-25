const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');

router.get('/', noteController.index);
router.get('/:id', noteController.show);
router.post('/', noteController.create);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.delete);

module.exports = router;
