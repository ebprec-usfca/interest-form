import { NextApiRequest, NextApiResponse } from "next";

export type FormPayload = {
  name: string;
  email: string;
  language: string;
  referralSources: string[];
  //interests: string[];
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

// messages here
const messages = {
}
