import { ContactMessage } from "../models/contactMessage.js";
import dotenv from "dotenv";

dotenv.config();

export const addMessageToDb = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !message)
    return res.status(400).json({ message: "Fields cannot be empty." });

  const dbMessage = new ContactMessage({ firstName, lastName, email, phoneNumber, message });

  await dbMessage.save();

  res.status(201).json({ message: "Message added successfully to database." });
};