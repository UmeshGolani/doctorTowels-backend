const express = require('express');
const { addOrderItems } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addOrderItems);

module.exports = router;
