import { Router } from "express";
import {
  getAllContactsController,
  getContactById,
  createContactController,
} from "../controllers/index.js";

const contactsRouter = Router();

contactsRouter.get("/", getAllContactsController);
contactsRouter.get("/:id", getContactById);
contactsRouter.post("/", createContactController);

export { contactsRouter };
