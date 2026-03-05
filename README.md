# ReserveMate

A full-stack restaurant reservation web application with a modern React frontend and a Node.js/Express backend powered by AWS DynamoDB.

ReserveMate helps users explore a restaurant landing page, browse dishes, and submit table reservations through a responsive, animated booking flow.

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [API Reference](#api-reference)
- [Data Model](#data-model)
- [Deployment Notes](#deployment-notes)
- [Troubleshooting](#troubleshooting)
- [Known Gaps](#known-gaps)
- [Suggested Improvements](#suggested-improvements)
- [License](#license)

## Project Overview
ReserveMate is designed as a restaurant booking platform with:
- A single-page marketing and reservation interface (React + Vite)
- A reservation API service (Express)
- Cloud persistence in DynamoDB (`Reservations` table)
- Optional serverless deployment via AWS Lambda (`serverless-http` wrapper)

## Key Features
### Frontend
- Responsive landing page with multiple sections: Hero, About, Services, Menu, Team, Reservation, Footer
- Sticky/animated navbar with smooth section scrolling
- Interactive menu carousel containing Indian dishes with categories and prices
- Reservation form with required-field validation and toast notifications
- Success page with confetti animation and auto-redirect to home
- Custom 404 page with animated UI

### Backend
- REST API endpoint for reservation creation
- Basic input presence validation for all required fields
- Structured error handling middleware
- Reservation persistence with unique UUID records in DynamoDB
- Root health route (`/`) for service availability check

## Tech Stack
### Frontend
- React 18
- Vite 5
- React Router DOM
- Axios
- React Hot Toast
- Framer Motion
- Canvas Confetti
- React Icons
- React Scroll

### Backend
- Node.js (ES Modules)
- Express 4
- CORS
- AWS SDK v3 (`@aws-sdk/client-dynamodb`, `@aws-sdk/lib-dynamodb`)
- UUID
- Serverless HTTP

### Infrastructure
- AWS DynamoDB
- AWS Lambda (optional runtime path in current codebase)

## Architecture
1. User submits reservation form on frontend.
2. Frontend sends `POST` request to backend endpoint.
3. Backend validates required request fields.
4. Backend writes reservation record to DynamoDB.
5. Backend returns success/error response.
6. Frontend shows toast feedback and routes to success page.

## Project Structure
```text
ReserveMate/
  frontend/
    public/images/
    src/
      Pages/
      components/
      App.jsx
      main.jsx
    package.json
    vite.config.js
  backend/
    app.js
    lambda.js
    controller/
      reservation.js
    routes/
      reservationRoute.js
    database/
      dynamoDb.js
    middlewares/
      error.js
    package.json
  README.md
```

## Getting Started
### Prerequisites
- Node.js 18+
- npm 9+
- AWS account and credentials with permission to write to DynamoDB

### 1. Clone and enter the project
```bash
git clone <your-repository-url>
cd ReserveMate
```

### 2. Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure environment
Create frontend env file:
```bash
# frontend/.env
VITE_BACKEND_URL=http://localhost:4000
```

### 4. Run frontend
```bash
cd frontend
npm run dev
```
Default Vite URL is typically `http://localhost:5173`.

### 5. Run backend
Current backend scripts expect `backend/server.js`, but that file is not present in the repository.

Use one of these approaches:
- Add `server.js` for local Express runtime.
- Run as Lambda handler through your serverless setup using `backend/lambda.js`.

Minimal local `server.js`:
```js
import app from "./app.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
```

## Environment Configuration
### Frontend
- `VITE_BACKEND_URL`: Base URL of backend API.

Example:
```bash
VITE_BACKEND_URL=http://localhost:4000
```

### Backend
Current code hardcodes some backend values:
- AWS region is set as `ap-south-1` in `backend/database/dynamoDb.js`
- DynamoDB table name is set as `Reservations` in `backend/controller/reservation.js`

Recommended production env vars:
- `AWS_REGION`
- `DYNAMODB_TABLE_NAME`
- `ALLOWED_ORIGIN`
- `PORT` (for local/non-serverless runtime)

## API Reference
Base URL (local example):
```text
http://localhost:4000
```

Base path:
```text
/api/v1/reservation
```

### Health Check
- Method: `GET`
- Endpoint: `/`

Success response:
```json
{
  "success": true,
  "message": "Backend Running 🚀"
}
```

### Create Reservation
- Method: `POST`
- Endpoint: `/api/v1/reservation/send`
- Content-Type: `application/json`

Request body:
```json
{
  "firstName": "Anand",
  "lastName": "Shukla",
  "email": "anand@example.com",
  "phone": "9999999999",
  "date": "2026-03-10",
  "time": "19:30"
}
```

Success response (`201`):
```json
{
  "success": true,
  "message": "Reservation Sent Successfully!"
}
```

Validation error example (`400`):
```json
{
  "success": false,
  "message": "Please fill full reservation form!"
}
```

## Data Model
DynamoDB table: `Reservations`

Recommended schema:
- Partition key: `id` (String)

Stored attributes:
- `id` (UUID)
- `firstName`
- `lastName`
- `email`
- `phone`
- `date`
- `time`
- `createdAt` (ISO timestamp)

## Deployment Notes
### Frontend
Deploy to any static host (Vercel, Netlify, S3 + CloudFront).

### Backend
Deploy Express app as AWS Lambda using `lambda.js` + API Gateway.

### Production checklist
- Restrict CORS origins
- Move hardcoded settings to env vars
- Add request validation and sanitization
- Add rate limiting and security headers
- Enable structured logs and monitoring
- Add CI/CD for lint, build, and smoke tests

## Troubleshooting
### `Backend URL not configured!` in frontend
Set `VITE_BACKEND_URL` in `frontend/.env` and restart Vite dev server.

### `npm run dev` fails in backend
`server.js` is missing. Create it (see example above) or run via serverless setup.

### Reservation not saving to database
Check:
- AWS credentials are available to runtime
- Region matches your DynamoDB table region
- Table name is exactly `Reservations`
- IAM policy allows `dynamodb:PutItem`

## Known Gaps
- `backend/package.json` currently misses some dependencies used in code (`@aws-sdk/client-dynamodb`, `@aws-sdk/lib-dynamodb`, `uuid`, `serverless-http`).
- `backend/server.js` is referenced in scripts but absent.
- Some backend dependencies listed are currently unused (`mongoose`, `validator`, `dotenv` in present code path).
