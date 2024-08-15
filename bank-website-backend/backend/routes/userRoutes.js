// /backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Get logged-in user
router.get('/', auth, userController.getUser);

module.exports = router;
