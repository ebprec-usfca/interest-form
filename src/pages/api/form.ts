import { NextApiRequest, NextApiResponse } from "next";
import type { referralSource as referralSourceType, Interest as interestType } from "~/constants/Constants";
import sendEmails from '~/server/email';
import updateSpreadsheet from "~/server/spreadsheet";

export type FormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  contactMethod: 'phone' | 'email';
  communityOwner: 'Yes' | 'No';
  inRegion: 'Yes' | 'No';
  language: string;
  referralSource: referralSourceType;
  interests: interestType[];
  notes: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method === 'POST') {
    let payload = req.body as FormPayload;
    console.log('received payload', req.body);

    // send email(s)
    const emailPromise = sendEmails(payload);

    // update spreadsheet
    const spreadsheetPromise = updateSpreadsheet(payload);
     
    // wait for both to finish
    await Promise.all([emailPromise, spreadsheetPromise]);

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
