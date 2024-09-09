import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/auth";

export async function GET(request) {
  try {
    const res = await verifyToken(request);
    if (res.error) NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    return NextResponse.json(
      { msg: "Authorized", payload: res.payload },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json("An error occured!");
  }
}
