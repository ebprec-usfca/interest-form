import nodemailer from 'nodemailer';

import { env } from "~/env.mjs";
import { FormPayload } from '~/pages/api/form';
import { emailIntro, emailOutro, emails } from '~/constants/Email';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: env.EMAIL_ADDR,
    pass: env.EMAIL_PASS,
  },
  secure: true,
});

/**
 * Send an email to the given address for the given interest
 */
export default async function sendEmails(payload: FormPayload) {
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if(error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });


  let body = emailIntro(`${payload.firstName} ${payload.lastName}`)
  body += payload.interests.map(interest => emails[interest])
    .concat(emailOutro)
    .join('');

  try {
    await sendEmail(payload.email, body);
    console.log('Emails sent');
  } catch(err) {
    console.error('Emails failed:', err);
  }
}

async function sendEmail(email: string, body: string) {
  // Send the email
  const mailData = {
    from: `DAP@EBPREC<${env.EMAIL_ADDR}>`,
    to: email,
    subject: 'EB PREC: Following Up',
    html: body,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if(err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}
