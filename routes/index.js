import { Router } from "express";
import { getAllContactsController, getContactById } from "../controllers/index.js";

const contactsRouter = Router();

contactsRouter.get("/", getAllContactsController);
contactsRouter.get("/:id", getContactById);

export { contactsRouter };
