import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// ✅ Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",                 // local dev frontend
  "https://reservemate-o9h6.onrender.com" // deployed frontend
];

// ✅ CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // browser requests without origin (like Postman) ko bhi allow karenge
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Preflight request handle
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// ✅ Database Connection
dbConnection();

// ✅ Error Middleware
app.use(errorMiddleware);

export default app;
