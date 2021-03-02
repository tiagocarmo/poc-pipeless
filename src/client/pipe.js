import { ApiClient, GeneralApi } from 'pipeless';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

class apiPipe {
  _getInstance() {
    const defaultClient = ApiClient.instance;
    const App_API_Key = defaultClient.authentications['App_API_Key'];
    App_API_Key.apiKey = `Bearer ${serverRuntimeConfig.PIPELESS_API_KEY}`;
    this.appId = serverRuntimeConfig.PIPELESS_APP_ID;

    return new GeneralApi();
  }

  interested = async ({ userId, companyId } = data) => {
    if (!userId && !companyId) {
      return false;
    }

    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        end_object: { id: companyId, type: 'company' }
      },
      synchronous: false
    };

    const instance = this._getInstance();
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> interested in company <${companyId}>.`);
    });
  };

  view = async ({ userId, companyId } = data) => {
    if (!userId && !companyId) {
      return false;
    }

    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        relationship: { type: 'viewed', single: false },
        end_object: { id: companyId, type: 'company' }
      },
      synchronous: false
    };

    const instance = this._getInstance();
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> viewed company page <${companyId}>.`);
    });
  };

  like = async ({ userId, companyId } = data, like = true) => {
    if (!userId && !companyId) {
      return false;
    }

    const instance = this._getInstance();

    const type = like === 'true' ? 'liked' : 'disliked';

    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        relationship: { type, single: true },
        end_object: { id: companyId, type: 'company' }
      },
      synchronous: false
    };
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> ${type} company page <${companyId}>.`);
    });
  };
}

export default new apiPipe();