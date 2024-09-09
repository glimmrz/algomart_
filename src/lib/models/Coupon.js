import mongoose from "mongoose";

const couponScema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  comission: {
    type: Number,
    required: false,
    default: 10,
  },
  discount: {
    type: Number,
    required: false,
    default: 10,
  },
});

const Coupon = mongoose.models.coupon || mongoose.model("coupon", couponScema);

export default Coupon;
