import express from "express";
import dotenv from "dotenv";
import { contactsRouter } from "./routes/index.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(
  "/",
  () => {
    console.log("i m here");
  },
  contactsRouter
);

app.listen(() => {
  console.log(`Server running on port ${port}`);
});
