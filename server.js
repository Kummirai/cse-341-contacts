import express from "express";
import dotenv from "dotenv";
import { contactsRouter } from "./routes/index.js";
import connectToDB from "./database/dbConnetion.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/", contactsRouter);

try {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
