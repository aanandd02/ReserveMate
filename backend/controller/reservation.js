import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoDb } from "../database/dynamoDb.js";
import { v4 as uuidv4 } from "uuid";
import ErrorHandler from "../middlewares/error.js";

const send_reservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, date, time, phone } = req.body;

    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    const params = {
      TableName: "Reservations",
      Item: {
        id: uuidv4(),
        firstName,
        lastName,
        email,
        date,
        time,
        phone,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDb.send(new PutCommand(params));

    return res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default send_reservation;