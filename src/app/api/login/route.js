import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "@/lib/models/User";
import Address from "@/lib/models/Address";
import { connectDb } from "@/lib/db/connectDb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();

    let { email, password } = await req.json();

    let userExist = await User.findOne({ email }).populate("addresses");

    if (!userExist)
      return NextResponse.json(
        { msg: "Invalid email or password." },
        { status: 400 }
      );

    const validPass = await bcrypt.compare(password, userExist.password);
    if (!validPass)
      return NextResponse.json(
        { msg: "Invalid email or password." },
        { status: 400 }
      );

    const { password: _, ...userDetails } = userExist._doc;

    // creating token which is gonna expire in 60min
    const expiry = 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: expiry,
      }
    );

    return NextResponse.json(
      { msg: "Login successful.", session_token: token, expiryTime: expiry },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
}
