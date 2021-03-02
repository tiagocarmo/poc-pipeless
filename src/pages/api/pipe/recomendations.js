import apiPipe from '../../../client/pipe';

export default async function handler(req, res) {
  const recomendations = await apiPipe.recomendations();
  res.status(200).json(recomendations.items);
}