import mongoose from "mongoose";
import { Contact } from "../models/index.js";

const homeController = async (_req, res) => {
  // #swagger.ignore = true
  res.status(200).json({
    project: "CSE341 API Contacts Project",
    projectuRL: "https://github.com/Kummirai/cse-341-contacts",
  });
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
      return res
        .status(404)
        .json({ success: false, message: "Contact not found!" });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.log(`Error in getContactByID ${error.message}`);
    return res.status(500).json("Internal Server Error");
  }
};

const createContactController = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;

  try {
    const user = await Contact.findOne({ email: email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists!" });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    const contact = new Contact(newContact);
    const savedContact = await contact.save();

    return res.status(201).json({
      success: true,
      message: "Successfully created!",
      data: savedContact,
    });
  } catch (error) {
    console.log(`Error in createContactController: ${error}`);
    res.status(500).json("Internal server error!");
  }
};

const updateContactController = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const { id } = req.params;

  if (!firstName) {
    return res.status(400).json("First name cannot be empty!");
  }

  if (!lastName) {
    return res.status(400).json("Last name cannot be empty!");
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!isValidEmail(email)) {
    return res.status(400).json("Email not valid!");
  }

  if (!favoriteColor) {
    return res.status(400).json("Favorite color cannot be empty!");
  }

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  };

  if (!isValidDate(birthday)) {
    return res.status(400).json("Invalid date!");
  }

  const isIdValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
  };

  if (!isIdValid(id)) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const user = await Contact.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          favoriteColor: favoriteColor,
          birthday: birthday,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      res.status(404).json({ success: false, message: "Contact not found!" });
    }
    res.status(200).json({
      success: true,
      message: "Contact successfully updated!",
      data: user,
    });
  } catch (error) {
    console.log(`Error in updateContactController ${error}`);
    res.status(500).json("Internal Server Error");
  }
};

const deleteContactController = async (req, res) => {
  const { id } = req.params;

  const isIdValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
  };

  if (!isIdValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const user = await Contact.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Contact successfully deleted!",
    });
  } catch (error) {
    console.log(`Error in deleteContactController ${error}`);
    res.status(500).json("Internal Server Error");
  }
};

export {
  getAllContactsController,
  getContactById,
  homeController,
  createContactController,
  updateContactController,
  deleteContactController,
};
