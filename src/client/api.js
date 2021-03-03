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

  recomended = async (data) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    const listRecomended = await httpClient.get(`pipe/recomended?userId=${data.userId}`);
    return listRecomended.data;
  };

  related = async (data) => {
    if(!data) {
      return false;
    }
    const httpClient = this._getHttpClient();
    const listRelated = await httpClient.get(`pipe/related?companyId=${data.companyId}`);
    return listRelated.data;
  };
}

export default new apiClient();