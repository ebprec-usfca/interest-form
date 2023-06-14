import nodemailer from 'nodemailer';
import { env } from "~/env.mjs";
import { NextApiRequest, NextApiResponse } from "next";
import { type interest as interestType, emails, emailSubject, emailGreeting, interests } from "~/components/Constants";

export type FormPayload = {
  name: string;
  email: string;
  language: string;
  referralSource: string;
  interests: interestType[];
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method === 'POST') {
    let payload = req.body as FormPayload;

    // send email(s)
    for(let interest of payload.interests) {
      await sendEmail(payload, interest);
    }
     
    // update spreadsheet
     
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}


/**
  * Send an email to the given address for the given interest
*/
async function sendEmail({ name, email }: FormPayload, interest: interestType) {
  console.log(`Sending email to ${email} for ${interests[interest]}`);
  //
  // Send the email
  const mailData = {
    from: 'Here2Stay <info@here2stay.com>',
    to: email,
    subject: emailSubject(interests[interest]),
    text: emailGreeting(name) + emails[interest],
  };

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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
  });
}
