import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please provide a category name."],
  },
  slug: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  sub_categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub_category",
      required: false,
    },
  ],
});

const Category =
  mongoose.models.category || mongoose.model("category", categorySchema);

export default Category;
