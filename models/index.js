import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: { type: String },
    email: { type: String },
    favoriteColor: { type: string },
    birthday: { type: Date },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export { Contact };
