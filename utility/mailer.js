const nodemailer = require('nodemailer');
const credentials = require('../test_data/data.json');

export async function sendEmail() {
  return new Promise((resolve, reject) => {
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: credentials.user,
        pass: credentials.pass,
      },
    });

    let mailDetails = {
      from: credentials.user,
      to: credentials.recipient,
      subject: 'Test mail',
      text: 'Testing mail.......',
    };

    mailTransporter.sendMail(mailDetails, function (err) {
      console.log("Sending Email");
      if (err) {
        console.error('Error sending email:', err);
        reject(err);
      } else {
        console.log('Email sent successfully');
        resolve();
      }
    });
  });
}