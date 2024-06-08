const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ag3872@srmist.edu.in",
    pass: process.env.NODE_MAILER_PASS,
  },
});

async function sendEmail() {
  try {
    const info = await transporter.sendMail({
      from: "ag3872@srmist.edu.in",
      to: "humbleayush30@gmail.com , sm8168@srmist.edu.in",
      subject: "Email generated from custom Nodemailer",
      text: "Hii",
      html: "<h1>Nodemailer Working!!</h1>",
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}

sendEmail();
