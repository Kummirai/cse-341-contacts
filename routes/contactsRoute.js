import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../swagger.json' with { type: 'json' };
import {
  getAllContactsController,
  getContactById,
  createContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/index.js";

const filteredSwaggerDocument = JSON.parse(JSON.stringify(swaggerDocument));

if (filteredSwaggerDocument.paths) {
  delete filteredSwaggerDocument.paths['/contacts/api-docs'];
  delete filteredSwaggerDocument.paths['/contacts/api-docs/'];
}

const contactsRouter = Router();
contactsRouter.use("/api-docs", swaggerUi.serve);
contactsRouter.get("/api-docs", swaggerUi.setup(filteredSwaggerDocument));

contactsRouter.get("/", getAllContactsController);
contactsRouter.get("/:id", getContactById);
contactsRouter.post("/", createContactController);
contactsRouter.put("/:id", updateContactController);
contactsRouter.delete("/:id", deleteContactController);

export { contactsRouter };
