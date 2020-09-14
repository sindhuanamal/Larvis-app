const express = require('express');

const ordersController = require('../controllers/orders-controller.js');

// Create express router
const router = express.Router();

router.get('/all', ordersController.ordersGetAll);
router.post('/createOrder', ordersController.createOrder);

// Export router
module.exports = router;