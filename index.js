require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const sampleRouter = require('./routes/sample'); // sample 라우터 불러오기

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger.js');

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors());
app.use(express.json());

// sample 라우터 연결
app.use('/sample', sampleRouter);

// // MySQL 연결
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('MySQL 연결 실패:', err);
//   } else {
//     console.log('MySQL 연결 성공');
//   }
// });

// 기본 라우터
app.get('/', (req, res) => {
    res.send('BF Server is running!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
