const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'trupesh220@gamail.com',
      pass: "xdzqwwhdmipnrcug",
    },
  });
  
  const mailOptions = {
    from: "trupesh220@gamail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
