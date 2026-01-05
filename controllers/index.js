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
    res.status(500).json("Internal server error");
  }
};

const getContactById = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({ success: false, message: "Contact not found!" });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.log(`Error in getContactByID ${error.message}`);
    res.status(500).json("Internal Server Error");
  }
};

export { getAllContactsController, getContactById };
