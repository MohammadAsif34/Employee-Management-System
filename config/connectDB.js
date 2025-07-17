import mongoose from "mongoose";

export const ConnectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_API);
    console.log(`mngoDB connected`);
  } catch (error) {
    console.log("Error :: ", error.message);
  }
};
