const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-duck', adminController.getAddDuck);

router.post('/add-duck', adminController.postDuck);

module.exports = router;
