import apiPipe from '../../../client/pipe';

export default async function handler(req, res) {
  const {
    query: { userId },
  } = req;

  const recomendations = await apiPipe.recomendations({
    userId
  });

  res.status(200).json(recomendations.items);
}