const express = require('express');

// Import users controller
const ordersController = require('../controllers/orders-controller.js');

// Create express router
const router = express.Router();

// Create rout between usersController and '/all' endpoint
// Note:
// Main route (in server.js) for users
// is set to '/users'
// This means that all users routes
// will be prefixed with /users'
// i.e.: '/all' will become '/users/all'
router.get('/all', ordersController.ordersGetAll);
router.post('/createOrder', ordersController.createOrder);

// Export router
module.exports = router;