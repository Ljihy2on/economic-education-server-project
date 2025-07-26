const { v4: uuidv4 } = require('uuid');
const pool = require('../db'); // mysql2/promise 풀 연결

exports.invest = async (req, res) => {
  try {
    const { userId, productId, amount } = req.body;

    if (!userId || !productId || !amount) {
      return res.status(400).json({ message: '필수 값 누락' });
    }

    const investHistoryId = uuidv4();
    const now = new Date();

    await pool.query(
      `INSERT INTO invest_history (invest_history_id, invest_id, user_id, invest_advantage, invested_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [investHistoryId, productId, userId, amount, now, now]
    );

    return res.status(201).json({
      success: true,
      message: '투자 내역 등록 완료',
      investmentId: investHistoryId,
    });
  } catch (err) {
    console.error('투자 실행 실패:', err);
    return res.status(500).json({ message: '서버 오류' });
  }
};
