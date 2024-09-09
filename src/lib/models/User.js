import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name."],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Please provide a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  profileImage: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  ],
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "moderator"],
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
  code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coupon",
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
