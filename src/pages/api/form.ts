import { NextApiRequest, NextApiResponse } from "next";
import { type interest, emails  } from "~/components/Constants";

export type FormPayload = {
  name: string;
  email: string;
  language: string;
  referralSource: string;
  interests: interest[];
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method === 'POST') {
    let payload = req.body as FormPayload;
    console.log(payload);
    // send email
     
    // update spreadsheet
     
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
