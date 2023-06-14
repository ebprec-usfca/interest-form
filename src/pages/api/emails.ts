// Note: this is based on the nodemailer example at https://nodemailer.com/about/#example
import nodemailer from 'nodemailer';
import { type interest as interestType, emails, emailSubject, emailGreeting, interests } from "~/components/Constants";
import { FormPayload } from './form';
import { env } from '~/env.mjs';

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_ADDR,
    pass: env.EMAIL_PASS,
  },
});

/**
  * Send an email to the given address for the given interest
*/
export async function sendEmail({ name, email }: FormPayload, interest: interestType) {
  console.log(`Sending email to ${email} for ${interests[interest]}`);

  // Send the email
  const info = await transporter.sendMail({
    from: 'Here2Stay <info@here2stay.com>',
    to: email,
    subject: emailSubject(interests[interest]),
    text: emailGreeting(name) + emails[interest],
  });
  
  // handle errors

}
