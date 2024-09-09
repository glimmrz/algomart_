import { connectDb } from "@/lib/db/connectDb";
import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";
import { verifyToken } from "@/utils/auth";
import Category from "@/lib/models/Category";

// Get all products
export async function GET() {
  try {
    await connectDb();
    const products = await Product.find().populate({
      path: "category",
    });

    return NextResponse.json(
      { msg: "Products found.", payload: products },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}

// Add new product
export async function POST(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    if (user.payload?.role?.toLowerCase() !== "admin")
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const body = await request.json();

    const productPrice = body.price * 100;
    const productDiscountedPrice = body.discounted_price * 100;

    const newProduct = new Product({
      ...body,
      price: productPrice,
      discounted_price: productDiscountedPrice,
      status: "pending",
    });
    await newProduct.save();

    return NextResponse.json({ msg: "Product added." }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "An error occured!" }, { status: 500 });
  }
}

// Update product
export async function PUT(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    if (user.payload?.role?.toLowerCase() !== "admin")
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const body = await request.json();

    const filteredData = {};

    for (const [key, val] of Object.entries(body)) {
      if (val) {
        filteredData[key] = val;
      }
    }

    await Product.findByIdAndUpdate(
      filteredData._id,
      {
        ...filteredData,
        price: filteredData.price * 100,
        discounted_price: filteredData.discounted_price * 100,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({ msg: "Product updated successfully." });
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}

// Delete product
export async function DELETE(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    if (user.payload?.role?.toLowerCase() !== "admin")
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    const body = await request.json();

    const existingProduct = await Product.findOne({ _id: body._id });
    if (!existingProduct)
      return NextResponse.json({ msg: "Product not found." }, { status: 404 });

    await Product.findByIdAndDelete(body._id);

    return NextResponse.json({ msg: "Product deleted." }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
