import { Contact } from "../models/index.js";

const homeController = async (req, res) => {
  res.send("<h1>CSE341 API Contacts Project</h1>");
};

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

const createContactController = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;

  const user = Contact.find({ email });
  if (user) {
    res.status(400).json({ success: false, message: "Email already exists!" });
  }

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    const contact = new Contact(newContact);
    const savedContact = await contact.save();

    res.status(201).json({
      success: true,
      message: "Successfully created!",
      data: savedContact,
    });
  } catch (error) {
    console.log(`Error in createContactController: ${error}`);
    res.status(500).json("Internal server error!");
  }
};

export {
  getAllContactsController,
  getContactById,
  homeController,
  createContactController,
};
