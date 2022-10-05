const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465, // 25, 465, 2255
  secure: true,
  auth: {
    user: "5783978i@gmail.com",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

module.exports = transporter;

// ! example //
/*
const mail = {
  to: "arestovich@gmail.com",
  from: "bogdan.lyamzin.d@meta.ua",
  subject: "Погадали на новое наступление ВСУ",
  html: "<p>Оно будет через 2-3 недели</p>",
};

transporter
  .sendMail(mail)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
 */
