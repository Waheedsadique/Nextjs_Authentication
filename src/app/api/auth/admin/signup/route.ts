import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync("admin123", salt);
  await User.create({
    email: "admin2@gmail.com",
    password: password,
    name: "Admin",
    role: "Admin",
    passportid: "123456",
    phonenumber: "123456",
    country: "Pakistan",
    city: "Lahore",
    pin: "123456",
    package: "Free",
    currency: "PKR",


  });

  return NextResponse.json({
    status: 200,
    message: "Admin created successfully",
  });
}

// get all the users

