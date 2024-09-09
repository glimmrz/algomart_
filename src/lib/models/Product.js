import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  seo_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seo_description: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  seo_tags: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  discounted_price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
  brand: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  warranty: {
    type: String,
    required: false,
    default: "Unavailable",
  },
  box_type: {
    type: String,
    required: false,
    default: "Plastic",
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "approved"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    },
  ],
});

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
