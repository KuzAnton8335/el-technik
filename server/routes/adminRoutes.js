const express = require('express');
const router = express.Router();
const { login, getMe } = require('../controllers/adminAuthController');
const { protect, authorize } = require('../middleware/adminAuthMiddleware');

router.post('/auth', login);
router.get('/auth/me', protect, authorize('admin'), getMe);

module.exports = router;
/* Доделать маршрут для админ страницы  что бы открывалась админ страница */
