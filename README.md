# ReserveMate

ReserveMate is a restaurant reservation platform with a React frontend and a Node.js/Express backend that stores bookings in AWS DynamoDB.

## What is implemented
- Marketing-style restaurant landing page with smooth section navigation.
- Menu carousel with dish cards.
- Reservation form with client-side validation.
- Backend API endpoint to create reservations.
- Success page with animated confirmation flow.
- 404 page for unknown routes.

## Current architecture
- `frontend`: React + Vite SPA.
- `backend`: Express app (`app.js`) wrapped for serverless execution (`lambda.js`).
- Database: AWS DynamoDB (`Reservations` table).

## Tech stack
- Frontend: React, Vite, React Router, Axios, Framer Motion, React Hot Toast.
- Backend: Node.js, Express, CORS, AWS SDK v3 (DynamoDB Document Client), UUID.
- Cloud: AWS Lambda + DynamoDB (intended deployment model from current code).

## Project structure
```text
ReserveMate/
  frontend/
    src/
    public/
  backend/
    app.js
    lambda.js
    controller/reservation.js
    routes/reservationRoute.js
    database/dynamoDb.js
    middlewares/error.js
```

## API contract
Base path: `/api/v1/reservation`

### Create reservation
- Method: `POST`
- Path: `/send`
- Body:
```json
{
  "firstName": "Anand",
  "lastName": "Shukla",
  "email": "anand@example.com",
  "date": "2026-03-10",
  "time": "19:30",
  "phone": "9999999999"
}
```
- Success response: `201`
```json
{
  "success": true,
  "message": "Reservation Sent Successfully!"
}
```
- Error response: `4xx/5xx`
```json
{
  "success": false,
  "message": "Please fill full reservation form!"
}
```

## Environment variables

### Frontend (`frontend/.env`)
```bash
VITE_BACKEND_URL=http://localhost:4000
```
Use your deployed API base URL in production.

### Backend
No `.env` variables are currently consumed by backend code. AWS region is hardcoded as `ap-south-1` in `backend/database/dynamoDb.js`.

For production, move these to env vars:
- `AWS_REGION`
- `DYNAMODB_TABLE_NAME`
- `ALLOWED_ORIGIN`

## Local development

### 1. Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Start frontend
```bash
cd frontend
npm run dev
```

### 3. Start backend (important)
Current `backend/package.json` scripts point to `server.js`, but `server.js` is not present in the repository.

You have two valid options:
1. Deploy/run as Lambda using `backend/lambda.js`.
2. Add a local bootstrap file (`server.js`) that imports `app` and starts `app.listen(...)`.

Minimal `server.js` example:
```js
import app from "./app.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
```

## DynamoDB table requirements
Create table: `Reservations`
- Partition key: `id` (String)
- Recommended additional attributes:
  - `firstName`, `lastName`, `email`, `phone`, `date`, `time`, `createdAt`

Ensure Lambda/runner IAM policy allows `dynamodb:PutItem` on this table.

## Deployment notes (production)
- Host frontend on Vercel/Netlify/S3+CloudFront.
- Deploy backend as Lambda behind API Gateway.
- Set strict CORS origins instead of `origin: true`.
- Add request validation/rate limiting.
- Add structured logging and monitoring (CloudWatch).
- Add CI checks (`lint`, build, smoke API test).

## Known gaps in current repository
- Backend runtime scripts reference missing `server.js`.
- Backend `package.json` does not list all currently used imports (`@aws-sdk/client-dynamodb`, `@aws-sdk/lib-dynamodb`, `uuid`, `serverless-http`), even though code imports them.

## License
No license file is currently included. Add `LICENSE` if this will be shared publicly.
