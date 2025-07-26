const mysql = require('mysql2/promise');

// DB 연결 풀
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

exports.getInvestments = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM invest');
    res.status(200).json({ investments: rows });
  } catch (error) {
    console.error('투자 상품 조회 실패:', error);
    res.status(500).json({ message: '서버 오류' });
  }
};
