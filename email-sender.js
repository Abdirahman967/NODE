// Task 5: send yourself an email with nodemailer
// Credentials come from a .env file so no personal info ends up on GitHub.
require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // a Gmail App Password, not your normal password
  },
});

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_TO || EMAIL_USER, // send to yourself by default
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error.message);
  } else {
    console.log("Email sent: " + info.response);
  }
});
