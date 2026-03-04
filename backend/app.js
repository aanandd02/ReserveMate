import express from "express";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true, 
    credentials: true,
  })
);

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running 🚀",
  });
});

app.use(errorMiddleware);

export default app;