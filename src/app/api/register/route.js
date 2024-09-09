import User from "@/lib/models/User";
import bcrypt from "bcrypt";
import { connectDb } from "@/lib/db/connectDb";
import { NextResponse } from "next/server";
import { sendWelcomeMail } from "@/utils/send-email";

export async function POST(req) {
  try {
    await connectDb();

    let userData = await req.json();

    if (userData.password.trim().length < 8)
      return NextResponse.json(
        { msg: "Password must be at least 8 characters long." },
        { status: 400 }
      );

    if (userData.password !== userData.confirmPassword)
      return NextResponse.json(
        { msg: "Passwords do not match." },
        { status: 400 }
      );

    const emailExist = await User.findOne({
      email: userData.email,
    });

    if (emailExist) {
      return NextResponse.json(
        {
          msg: "There is an account associated with this email. Try logging in.",
        },
        { status: 400 }
      );
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    //creating new user
    const newUser = new User({
      ...userData,
      password: hashedPassword,
    });

    await newUser.save();
    await sendWelcomeMail(newUser.firstName, "Welcome to Ilham", newUser.email);
    return NextResponse.json(
      { msg: "Account created successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
