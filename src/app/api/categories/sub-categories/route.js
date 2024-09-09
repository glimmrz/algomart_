import { connectDb } from "@/lib/db/connectDb";
import Category from "@/lib/models/Category";
import SubCategory from "@/lib/models/Sub-Category";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });

    if (user.payload?.role?.toLowerCase() !== "admin")
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();
    const body = await request.json();

    const category = await Category.findById(body.category_name);
    if (!category) {
      return NextResponse.json({ msg: "Category not found." }, { status: 404 });
    }

    const newSubCategory = new SubCategory({
      name: body.name,
      category: body.category_name,
    });
    category.sub_categories.push(newSubCategory._id);

    await newSubCategory.save();
    await category.save();

    return NextResponse.json(
      { msg: "Data saved successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 401 });
  }
}
