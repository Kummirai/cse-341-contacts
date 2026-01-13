import { Router } from "express";
import {
  getAllContactsController,
  getContactById,
  createContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/index.js";

const contactsRouter = Router();

contactsRouter.get("/", getAllContactsController);
contactsRouter.get("/:id", getContactById);
contactsRouter.post("/", createContactController);
contactsRouter.put("/:id", updateContactController);
contactsRouter.delete("/:id", deleteContactController);

export { contactsRouter };
