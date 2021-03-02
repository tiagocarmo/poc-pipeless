// https://docs.pipeless.io/reference/general#create-event

import { ApiClient, GeneralApi } from 'pipeless';

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const pipeLike = (userId, companyId, like) => {
  const defaultClient = ApiClient.instance;
  const App_API_Key = defaultClient.authentications['App_API_Key'];
  App_API_Key.apiKey = `Bearer ${serverRuntimeConfig.PIPELESS_API_KEY}`;

  const apiInstance = new GeneralApi();
  const appId = serverRuntimeConfig.PIPELESS_APP_ID;

  if (like === 'true') {
    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        relationship: { type: 'liked', single: true }, // single indica se é um evento unico, ou não. ex.: like é evento unico, page view não.
        end_object: { id: companyId, type: 'company' }
      },
      synchronous: false
    };

    apiInstance.createEvent(appId, options, (error, data, response) => {
      if (error) {
        console.error(error);
      }
      console.log(`Usuário ${userId} curtiu página ${companyId}`);
    });
  }

  // delete
  if (like === 'false') {
    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        relationship: { type: 'liked' },
        end_object: { id: companyId, type: 'company' }
      }
    };

    apiInstance.deleteEvent(appId, options, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Usuário ${userId} removeu o curtir da página ${companyId}`);
        console.log('API called successfully. Returned data: ' + data);
      }
    });
  }
}

export default function handler(req, res) {
  const {
    query: { userId, companyId, like },
  } = req;
  pipeLike(userId, companyId, like);
  res.status(200).json({
    userId,
    companyId,
    like
  });
}