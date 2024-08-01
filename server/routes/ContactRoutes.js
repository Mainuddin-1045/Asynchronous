import { Router } from "express";
import {
  getAllContacts,
  getContactsForList,
  searchContacts,
} from "../controllers/ContactsControllers.js";
import { verifyToken } from "../middlewares/AuthMiddlewares.js";

const contactsRoutes = Router();

 contactsRoutes.post("/search", verifyToken, searchContacts);
 contactsRoutes.get("/all-contacts", verifyToken, getAllContacts);
 contactsRoutes.get("/get-contacts-for-list", verifyToken, getContactsForList);

export default contactsRoutes;
