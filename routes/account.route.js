const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller');

// 투자 실행
router.post('/invest', accountController.invest);

module.exports = router;
