import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true, trim: true },
  jobTitle: { type: String, required: true, trim: true },
  jobRole: { type: String, required: true, trim: true },
  employementType: {
    type: String,
    enum: ["full-time", "part-time", "contract", "intern"],
    required: true,
    trim: true,
  },
  manager: { type: String, required: true, trim: true },
  joiningDate: { type: Date, required: true, trim: true },
  department: { type: String, required: true, trim: true },
  status: {
    type: String,
    enum: ["active", "on-leave", "resigned", "terminated"],
    default: "active",
    trim: true,
  },
});
const Job = mongoose.model("job", JobSchema);
export default Job;
