import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../../lib/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const realPath = typeof path === 'string' ? path : path.join('/');
  console.log('realPath', realPath);

  const result = await fetch(API_URL + realPath, {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log('err', err);
    });

  res.status(200).json(result);
}
