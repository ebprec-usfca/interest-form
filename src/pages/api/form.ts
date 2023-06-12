import { NextApiRequest, NextApiResponse } from "next";

export type FormPayload = {
  name: string;
  email: string;
  language: string;
  referralSources: string[];
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method === 'POST') {
    let payload = req.body as FormPayload;
    console.log(payload);
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
