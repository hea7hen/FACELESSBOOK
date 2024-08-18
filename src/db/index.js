import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure this is called to load .env variables

/** @type {typeof mongoose | undefined} */
export let dbInstance = undefined;

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; // Ensure this is correctly set
    console.log("MongoDB URI:", dbURI); // Log without backticks or semicolon
    const connectionInstance = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    dbInstance = connectionInstance;
    console.log(
      `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
