import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    favoriteColor: {
      type: String,
      require: true,
    },
    birthday: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contacts", contactSchema);

export { Contact };
