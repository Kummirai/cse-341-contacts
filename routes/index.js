import { Router } from "express";
import { getAllContactsController } from "../controllers/index.js";

const contactsRouter = Router();

contactsRouter.get("/", getAllContactsController);

export { contactsRouter };
