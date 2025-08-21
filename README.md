# 프로젝트명: economic-education-server-project
초, 중등 경제 교육 프로그램 서버 프로젝트입니다.

## 🌉 배경 및 목적
어린이·청소년 대상 금융 교육을 위한 실시간 모의 경제 시뮬레이션 앱 개발 프로젝트입니다.
단순한 이론 학습을 넘어, 실시간 자산 운용과 데이터 기반 변화를 직접 체험함으로써 경제 개념과 의사결정 능력 향상을 목표로 합니다.

## 🔧 기술 스택
BackEnd: Node.js, Express, MySQL2
Infra/Tooling: dotenv, CORS
API 문서화: Swagger-jsdoc, Swagger-ui-express
기타: UUID

## 📖 담당 역할
- DB 구조 검토 및 개선 피드백
- 회원가입 API: `POST /api/register` (username, password 저장)
- 계좌 조회 API: `GET /api/account/{id}` (사용자 계좌 정보 반환)

## 🧩 주요 기능
회원가입 및 사용자 관리
사용자 계좌 조회
JWT 기반 인증 (확장 가능 구조)
Swagger를 활용한 API 문서화
