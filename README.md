
# ReserveMate

**ReserveMate** is a full-stack restaurant reservation web application built with **React**, **Node.js/Express**, and **AWS DynamoDB**.  
Users can explore a restaurant landing page, browse dishes, and reserve tables through a responsive booking interface.

---

# Project Overview

ReserveMate includes:

- **Single-page frontend** built with React + Vite  
- **Reservation API** built with Express  
- **Cloud database** using DynamoDB (`Reservations` table)  
- **Optional serverless deployment** using AWS Lambda

---

# Key Features

## Frontend
- Responsive landing page (Hero, About, Services, Menu, Team, Reservation)
- Sticky navbar with smooth scrolling
- Menu carousel with categorized dishes
- Reservation form with validation
- Success page with confetti animation
- Custom animated 404 page

## Backend
- REST API for reservation creation
- Required field validation
- Error handling middleware
- DynamoDB storage with UUID records
- Health check endpoint (`/`)

---

# Tech Stack

## Frontend
- React 18
- Vite 5
- React Router DOM
- Axios
- React Hot Toast
- Framer Motion
- Canvas Confetti
- React Icons
- React Scroll

## Backend
- Node.js
- Express
- CORS
- AWS SDK v3
- UUID
- Serverless HTTP

## Infrastructure
- AWS DynamoDB
- AWS Lambda (optional)

---

# Architecture

1. User submits reservation form from frontend.
2. Frontend sends a **POST request** to backend API.
3. Backend validates request fields.
4. Reservation is stored in **DynamoDB**.
5. Backend returns success/error response.
6. Frontend displays feedback and redirects to success page.

---

# Project Structure

```

ReserveMate/
frontend/
public/images/
src/
Pages/
components/
App.jsx
main.jsx

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

README.md

````

---

# Getting Started

## Prerequisites

- Node.js 18+
- npm 9+
- AWS account with DynamoDB access

---

# 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ReserveMate
````

---

# 2. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

# 3. Configure Environment

Create `.env` file inside **frontend**

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# 4. Run Frontend

```bash
cd frontend
npm run dev
```

Default Vite URL:

```
http://localhost:5173
```

---

# 5. Run Backend

Create `server.js` inside **backend**

```javascript
import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Run backend:

```bash
node server.js
```

---

# API Reference

Base URL

```
http://localhost:4000
```

Base Path

```
/api/v1/reservation
```

---

# Health Check

**GET /**

Response

```json
{
  "success": true,
  "message": "Backend Running"
}
```

---

# Create Reservation

**POST /api/v1/reservation/send**

Request Body

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

Response

```json
{
  "success": true,
  "message": "Reservation Sent Successfully"
}
```

---

# Data Model

DynamoDB Table: **Reservations**

Fields:

* `id` (UUID)
* `firstName`
* `lastName`
* `email`
* `phone`
* `date`
* `time`
* `createdAt`

---

# Deployment

## Frontend

Deploy on:

* Vercel
* Netlify
* AWS S3 + CloudFront

---

## Backend

Deploy using:

* AWS Lambda
* API Gateway

---

# Common Issues

## Backend URL not configured

Add `.env` file in frontend:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Restart Vite server.

---

## Reservation not saving

Check:

* AWS credentials are configured
* DynamoDB region is correct
* Table name is `Reservations`
* IAM policy allows `dynamodb:PutItem`

---

# License

This project is open-source and free to use.



