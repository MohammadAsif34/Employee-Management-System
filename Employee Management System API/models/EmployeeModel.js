import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    personal: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "personal",
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "job",
    },
    bank: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "bank",
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employees", EmployeeSchema);
export default Employee;
