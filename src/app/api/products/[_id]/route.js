import { connectDb } from "@/lib/db/connectDb";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDb();
    const product = await Product.findById(params._id);

    if (!product) {
      return NextResponse.json(
        { msg: "Could not find product." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "Data found.", payload: product },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
