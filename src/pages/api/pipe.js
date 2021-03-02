// https://docs.pipeless.io/reference/general#create-event

// COMO FUNCIONA:

// Um evento tem 3 partes.

// QUEM  XX  RELACIONAMENTO  XX  O QUE

// Exemplo:

// Tiago,   Visualizou,   Company
// Tiago,   Gostou,       Offer
// Tiago,   Comprou,      Offer

// "QUEM" e "O QUE" tem tipos definidos.
// Pode ser escolhidos da lista ou criados.
// Quando se escolhe de um pre-definido você tem melhores resultados nos filtros para obter recomendações.

import { ApiClient, GeneralApi } from 'pipeless';
import { v4 as uuidv4 } from 'uuid';

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const pipePageView = (userId, companyId) => {
  const defaultClient = ApiClient.instance;
  const App_API_Key = defaultClient.authentications['App_API_Key'];
  App_API_Key.apiKey = `Bearer ${serverRuntimeConfig.PIPELESS_API_KEY}`;

  const apiInstance = new GeneralApi();
  const appId = serverRuntimeConfig.PIPELESS_APP_ID;

  // aqui faz a magica deste contrato
  
  const options = {
    event: {
      start_object: {id: userId, type: 'user'},
      relationship: {type: 'viewed', single: false}, // single indica se é um evento unico, ou não. ex.: like é evento unico, page view não.
      end_object: {id: companyId, type: 'company'}
    },
    synchronous: false
  };

  // fim da magica

  apiInstance.createEvent(appId, options, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    console.log(`API chamada com sucesso`);
    console.log(`Usuário ${userId} visualizou página ${companyId}`);
  });
}

export default function handler(req, res) {
  const {
    query: { companyId },
  } = req;
  const userId = uuidv4();
  pipePageView(userId, companyId);
  res.status(200).json({
    userId,
    companyId
  });
}