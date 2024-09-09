import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a sub-category name."],
  },
  icon: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: [true, "Please provide a category."],
  },
});

const SubCategory =
  mongoose.models.sub_category ||
  mongoose.model("sub_category", subCategorySchema);

export default SubCategory;
