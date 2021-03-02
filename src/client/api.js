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
    if(!data && !data.userId && !data.companyId) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/favorited?userId=${data.data.userId}&companyId=${data.data.companyId}`);
  };

  view = async (data) => {
    if(!data && !data.userId && !data.companyId) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/view?userId=${data.data.userId}&companyId=${data.data.companyId}`);
  };

  like = async (data, like) => {
    if(!data && !data.userId && !data.companyId) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/like?userId=${data.data.userId}&companyId=${data.data.companyId}&like=${like}`);
  };
}

export default new apiClient();