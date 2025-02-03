import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// POST request handle karein
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Aap kisi aur service ka bhi use kar sakte hain
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: 'arinrimshakanwal@gmail.com', // Receiver email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Email send karein
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}