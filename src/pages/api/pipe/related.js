import apiPipe from '../../../client/pipe';

export default async function handler(req, res) {
  const {
    query: { companyId },
  } = req;

  const related = await apiPipe.related({
    companyId
  });

  res.status(200).json(related.items);
}