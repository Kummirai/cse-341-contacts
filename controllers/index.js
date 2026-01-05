import { Contact } from "../models/index.js";

const getAllContactsController = async (req, res) => {
  try {
    const contacts = await Contact.find({});

    if (contacts.length === 0) {
      res.status(200).json({
        success: true,
        message: "You do not have any saved contacts yet!",
      });
    } else {
      res.status(200).json({ success: true, data: contacts });
    }
  } catch (error) {
    console.log(`Error in getAllContactsController ${error}`);
  }
};

export { getAllContactsController };
