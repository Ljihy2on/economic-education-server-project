const express = require('express');
const router = express.Router();

// routes/sample.js

router.get('/', (req, res) => {
    res.json({ message: '샘플 라우터 작동 완료!' });
});

module.exports = router;
