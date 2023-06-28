import nodemailer from 'nodemailer';

import { env } from "~/env.mjs";
import { FormPayload } from './form';
import { emails, interestText, type Interest } from "~/components/Constants";

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

  let i = -1;
  let emailPromises = new Array<Promise<void>>(payload.interests.length);
  for(let interest of payload.interests) {
    const p = sendEmail(payload.email, `${payload.firstName} ${payload.lastName}`, interest);
    emailPromises[++i] = p;
  }

  try {
    await Promise.all(emailPromises);
    console.log('Emails sent');
  } catch(err) {
    console.error('Emails failed:', err);
  }
}

async function sendEmail(email: string, name: string, interest: Interest) {
  // Send the email
  const mailData = {
    from: `DAP@EBPREC<${env.EMAIL_ADDR}>`,
    to: email,
    subject: 'Resources for ' + interestText[interest],
    html: emails[interest](name),
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
