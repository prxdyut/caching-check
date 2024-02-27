import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("MongoDB Connection Successfull ");
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB Disconnection Successfull ");
  } catch (error) {
    console.log("MongoDB Disconnection Error: ", error);
  }
};
