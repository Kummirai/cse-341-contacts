import mongoose from "mongoose";

const connectToDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to database!`);
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;
