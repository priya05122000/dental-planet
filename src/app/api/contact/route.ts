import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const NAME_REGEX = /^[A-Za-z.\s]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX =
    /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,63})@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const MESSAGE_REGEX = /^[A-Za-z0-9\s.,!?'"()\-]{0,300}$/;

export async function POST(req: Request) {
    try {
        const { name, mobile, email, message, token } = await req.json();

        if (!name || !mobile) {
            return NextResponse.json(
                { error: "Name and Mobile are required" },
                { status: 400 }
            );
        }

        if (!NAME_REGEX.test(name))
            return NextResponse.json(
                { error: "Invalid name format" },
                { status: 400 }
            );

        if (!MOBILE_REGEX.test(mobile))
            return NextResponse.json(
                { error: "Invalid mobile number" },
                { status: 400 }
            );

        if (email && !EMAIL_REGEX.test(email))
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );

        if (message && !MESSAGE_REGEX.test(message))
            return NextResponse.json(
                { error: "Invalid message format" },
                { status: 400 }
            );

        // Verify reCAPTCHA
        const captchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            }
        );

        const captchaData = await captchaRes.json();

        if (!captchaData.success || captchaData.score < 0.5) {
            return NextResponse.json(
                { error: "Captcha verification failed" },
                { status: 400 }
            );
        }
        const currentDate = new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Dental Planet - Appointment" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: `🦷 New Appointment Request - ${name}`,
            html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">

      <h2 style="color: #1e3a8a; margin-bottom: 10px;">
        🦷 New Appointment Request
      </h2>

      <p style="color: #555; font-size: 14px;">
        You have received a new appointment enquiry from the Dental Planet website.
      </p>

      <hr style="margin: 20px 0;" />

      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">

        <tr>
    <td style="padding: 8px 0;"><strong>Submitted On</strong></td>
    <td>: ${currentDate}</td>
  </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Patient Name</strong></td>
          <td>: ${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Mobile Number</strong></td>
          <td>: +91 ${mobile}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Email Address</strong></td>
          <td>: ${email || "Not Provided"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; vertical-align: top;"><strong>Message</strong></td>
          <td>: ${message || "No additional message provided."}</td>
        </tr>
      </table>

      <hr style="margin: 20px 0;" />

      <p style="font-size: 13px; color: #777;">
        Please contact the patient as soon as possible to confirm the appointment.
      </p>

      <p style="font-size: 12px; color: #999; margin-top: 30px;">
        This is an automated notification from the Dental Planet website.
      </p>

    </div>
  </div>
  `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}