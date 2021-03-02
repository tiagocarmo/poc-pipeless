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

  like = async (data, like) => {
    if(!data && !data.userId && !data.companyId) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/like?userId=${data.data.userId}&companyId=${data.data.companyId}&like=${like}`);
  };

  interested = async (data) => {
    if(!data && !data.userId && !data.companyId) {
      return false;
    }
    const httpClient = this._getHttpClient();
    await httpClient.get(`pipe/interested?userId=${data.data.userId}&companyId=${data.data.companyId}`);
  };
}

export default new apiClient();