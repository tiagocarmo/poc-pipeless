import apiPipe from '../../../client/pipe';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  const {
    query: { companyId },
  } = req;
  const userId = uuidv4();

  apiPipe.view({
    userId,
    companyId
  });

  res.status(200).json({
    userId,
    companyId
  });
}