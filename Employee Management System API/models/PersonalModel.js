import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  picture: { type: String, default: "" },
  dob: { type: Date },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
  },
  phone: {
    type: String,
    required: true,
    match: [/^[6-9]\d{9}$/, "Invalid Indian phone number"],
  },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipCode: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Invalid Indian ZIP code"],
  },
  nationality: { type: String, required: true },
  maritalStatus: {
    type: String,
    enum: ["single", "married", "divorced", "widowed"],
    required: true,
  },
});
const Personal = mongoose.model("personal", PersonalSchema);
export default Personal;
