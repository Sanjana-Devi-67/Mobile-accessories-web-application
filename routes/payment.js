const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');

router.post('/payment', paymentController.createOrder);

module.exports = router;
