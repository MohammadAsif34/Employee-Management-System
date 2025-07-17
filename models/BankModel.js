import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
  accountHolderName: { type: String, required: true },
  bankName: { type: String, required: true },
  accountNumber: {
    type: String,
    required: true,
    // match: [/^\d{9,18}$/, "Invalid account number"],
  },
  IFSCcode: {
    type: String,
    required: true,
    // match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"],
  },
  branchName: { type: String, required: true },
  upiId: {
    type: String,
    required: true,
    // match: [/^[\w.-]+@[\w]{3,}$/, "Invalid UPI ID"],
  },
});
const Bank = mongoose.model("bank", BankSchema);
export default Bank;
