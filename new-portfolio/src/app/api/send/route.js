import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ToEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Received:", email, subject, message);

    const data = await resend.emails.send({
      from: email, 
      to: [email, ToEmail], // Send to both user & yourself
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}