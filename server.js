import express from "express";
import dotenv from "dotenv";
import { contactsRouter } from "./routes/contactsRoute.js";
import { homeRoute } from "./routes/homeRoute.js";
import connectToDB from "./database/dbConnetion.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/", homeRoute);
app.use("/api/contacts", contactsRouter);

try {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
