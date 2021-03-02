import apiPipe from '../../../client/pipe';

export default function handler(req, res) {
  const {
    query: { userId, companyId },
  } = req;

  apiPipe.interested({
    userId,
    companyId
  });

  res.status(200).json({
    userId,
    companyId
  });
}