const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BF Server API',
      version: '1.0.0',
      description: '경제교육 프로젝트 백엔드 API 문서입니다.',
    },
  },
  apis: ['./routes/*.js'], // 여기에 API 주석 달린 파일 경로 지정
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
