import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
  },
  details: {
    type: String,
    required: [true, "Details is required."],
  },
  date: {
    type: String,
    required: [true, "Please provide a date."],
  },
  amount: {
    type: Number,
    required: [true, "Please provide an amount."],
  },
  status: {
    type: String,
    required: false,
    default: "pending",
    enum: ["pending", "approved"],
  },
  added_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "user",
  },
});

const Expense =
  mongoose.models.expense || mongoose.model("expense", expenseSchema);

export default Expense;
