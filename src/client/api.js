import getConfig from 'next/config';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

class apiClient {
  _getHttpClient() {
    const httpClient = axios.create({
      baseURL: publicRuntimeConfig.NEXT_PUBLIC_API_URL
    });
    httpClient.defaults.responseType = 'json';
    return httpClient;
  }

  favorited = async (data) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/favorited?userId=${data.userId}&companyId=${data.companyId}`);
  };

  view = async (data) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/view?userId=${data.userId}&companyId=${data.companyId}`);
  };

  like = async (data, like) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/like?userId=${data.userId}&companyId=${data.companyId}&like=${like}`);
  };

  recomendations = async (data) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    const listRecomendations = await httpClient.get(`pipe/recomendations?userId=${data.userId}`);
    return listRecomendations.data;
  };
}

export default new apiClient();