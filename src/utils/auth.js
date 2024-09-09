"use server";
import { getCookie } from "./cookie";
import jwt from "jsonwebtoken";

export async function getSession() {
  const session = await getCookie("session");

  if (!session)
    return {
      error: true,
      payload: null,
    };

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "verify", {
    method: "GET",
    headers: {
      Authorization: session,
    },
  });

  if (!res.ok)
    return {
      error: true,
      payload: null,
    };

  const resData = await res.json();

  return {
    error: false,
    payload: resData.payload,
    role: resData.payload.role,
  };
}

export async function verifyToken(request) {
  try {
    const token = await request.headers.get("authorization");
    if (!token)
      return {
        error: true,
        payload: null,
      };

    const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return {
      error: false,
      payload: verifiedToken,
    };
  } catch (err) {
    return {
      error: true,
      payload: null,
    };
  }
}
