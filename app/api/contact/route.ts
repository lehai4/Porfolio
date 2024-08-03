import { html } from "@/app/utils/htmlEmail";
import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: Request) {
  const formData = await request.json();
  const { name, email, message, subject, phone } = formData;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: email,
      subject: subject,
      html: html({ message, subject, email, name, phone }),
    });

    return NextResponse.json({
      status: 201,
      message: "Success: email was sent",
    });
  } catch (error) {
    return new NextResponse("COULD NOT SEND MESSAGE", {
      status: 500,
    });
  }
}
