import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

if (process.env.SEND_GRID_API_KEY) {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
}

const MY_EMAIL = process.env.MY_EMAIL;
const SEND_GRID_EMAIL = process.env.SEND_GRID_EMAIL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, subject, message, name } = req.body;

    try {
      if (!MY_EMAIL || !SEND_GRID_EMAIL) {
        return res.status(500).send({
          message: 'Server error!'
        });
      }

      await sgMail.send({
        to: MY_EMAIL,
        from: SEND_GRID_EMAIL,
        subject,
        text: `
        ${message}
              
        From: ${email} ,
        ${name}
        `
      });

      res.status(200).send({
        message: 'Email sent successfully!'
      });
    } catch (error: any) {
      console.log(error.response || error);
      res.status(400).send({
        message: error.message
      });
    }
  } else {
    res.status(404).send('Endpoint not found!');
  }
}
