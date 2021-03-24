import apiPipe from '../../../client/pipe';

export default function handler(req, res) {
  const {
    query: { userId, companyId, like },
  } = req;

  apiPipe.like({
    userId,
    companyId
  }, like);

  res.status(200).json({
    userId,
    companyId,
    like
  });
}