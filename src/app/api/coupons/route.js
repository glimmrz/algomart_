import { connectDb } from "@/lib/db/connectDb";
import Coupon from "@/lib/models/Coupon";
import User from "@/lib/models/User";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const isVerified = await verifyToken(request);
    if (isVerified.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();
    const body = await request.json();

    const existingCode = await Coupon.findOne({ code: body.code });
    if (existingCode)
      return NextResponse.json({
        msg: "Code unavailable. Please choose a different code.",
      });

    const userId =
      isVerified.payload?.role?.toLowerCase() === "admin"
        ? body.user
        : isVerified.payload?._id;

    const newCoupon = new Coupon({ ...body, code: body.code, user: userId });

    // Update user code
    await User.findByIdAndUpdate(
      userId,
      {
        code: newCoupon._id,
      },
      {
        new: true,
      }
    );

    await newCoupon.save();

    return NextResponse.json(
      { msg: `Code ${body.code.toUpperCase()} added successfully.` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}

// Get all codes
export async function GET(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });

    if (user.payload?.role?.toLowerCase() !== "admin")
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const codes = await Coupon.find().populate("user");

    return NextResponse.json({ msg: "Data found.", payload: codes });
  } catch (err) {
    return NextResponse.json({ msg: err.message });
  }
}
