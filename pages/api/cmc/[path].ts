import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { path } = req.query;

    const result = await fetch(path as string, {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
        },
    }).then(res => {
        console.log('res', res)
        return res.json()
    }).catch(err => {
        console.log('err', err)
    });

    res.status(200).json(result)
}