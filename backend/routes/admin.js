const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-duck', adminController.getAddDuck);

router.get('/edit-duck/:duckId', adminController.getEditDuck);

router.post('/add-duck', adminController.postDuck);

router.post('/edit-duck', adminController.postEditDuck);

router.get('/:duckId', adminController.getDuck);

router.post('/delete', adminController.postDelete);

module.exports = router;
