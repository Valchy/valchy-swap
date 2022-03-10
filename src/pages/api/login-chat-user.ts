// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ResponseData = {
	success: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	axios // Login user to chat app with metamask credentials
		.put('https://api.chatengine.io/users/', JSON.parse(req.body), {
			headers: { 'Private-Key': process.env.CHAT_ENGINE_PRIVATE_KEY }
		})
		.then(response => {
			console.log(response);
			res.status(200).json({ success: true });
		});
}
