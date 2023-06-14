import { sendEmail } from './emails';
import { NextApiRequest, NextApiResponse } from "next";
import { type interest as interestType  } from "~/components/Constants";

export type FormPayload = {
  name: string;
  email: string;
  language: string;
  referralSource: string;
  interests: interestType[];
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method === 'POST') {
    let payload = req.body as FormPayload;

    // send email(s)
    for(let interest of payload.interests) {
      sendEmail(payload, interest).catch(err => {
        console.error(err);
        res.status(500).end();
      });
    }
     
    // update spreadsheet
     
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

