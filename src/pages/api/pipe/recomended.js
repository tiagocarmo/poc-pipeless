import apiPipe from '../../../client/pipe';

export default async function handler(req, res) {
  const {
    query: { userId },
  } = req;

  const recomended = await apiPipe.recomended({
    userId
  });

  res.status(200).json(recomended.items);
}