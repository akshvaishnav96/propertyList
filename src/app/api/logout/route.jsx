// pages/api/logout.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Create a response to unset the cookie
    const response = NextResponse.json({
      status: true,
      message: "Logged out successfully",
    });

    // Set the cookie to expire in the past to effectively remove it
    response.headers.set(
      "Set-Cookie",
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;"
    );

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: error.message },
      { status: 500 }
    );
  }
}
