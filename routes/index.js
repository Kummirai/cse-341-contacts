import { Router } from "express";
import { getAllContactsController } from "../controllers";

const contactsRouter = Router();

contactsRouter.get("/", getAllContactsController);

export { contactsRouter };
