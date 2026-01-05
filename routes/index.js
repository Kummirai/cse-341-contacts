import { Router } from "express";
import { getAllContactsController, getContactById } from "../controllers/index.js";

const contactsRouter = Router();

contactsRouter.get("/api/contacts", getAllContactsController);
contactsRouter.get("/api/contacts/:id", getContactById);

export { contactsRouter };
