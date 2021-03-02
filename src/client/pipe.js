import { ApiClient, GeneralApi, RecommendationsApi } from 'pipeless';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

class apiPipe {
  _getInstance(type = 'default') {
    const defaultClient = ApiClient.instance;
    const App_API_Key = defaultClient.authentications['App_API_Key'];
    App_API_Key.apiKey = `Bearer ${serverRuntimeConfig.PIPELESS_API_KEY}`;
    this.appId = serverRuntimeConfig.PIPELESS_APP_ID;

    switch (type) {
      case 'recomendations':
        return new RecommendationsApi();
        break;
      case 'default':
      default:
        return new GeneralApi();
        break;
    }
  }

  favorited = async ({ userId, companyId } = data) => {
    if (!userId && !companyId) {
      return false;
    }

    const options = {
      event: {
        start_object: { id: userId, type: 'user' },
        relationship: { type: 'favorited' },
        end_object: { id: companyId, type: 'product' }
      },
      synchronous: false
    };

    const instance = this._getInstance();
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> favorited product <${companyId}>.`);
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
        end_object: { id: companyId, type: 'product' }
      },
      synchronous: false
    };

    const instance = this._getInstance();
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> viewed product page <${companyId}>.`);
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
        end_object: { id: companyId, type: 'product' }
      },
      synchronous: false
    };
    instance.createEvent(this.appId, options, (error, data, res) => {
      if (error) {
        console.error(error);
      }
      console.log(`[INFO]: User <${userId}> ${type} product <${companyId}>.`);
    });
  };

  recomendations = async () => { // { userId } = data
    console.log('solicitadas as recomendações');
    const instance = this._getInstance('recomendations');

    const options = {
      object: { id: 'a868d0c48815477aaa4cc132b588eb6b', type: 'user' },
      // antonio // object: { id: 'a868d0c48815477aaa4cc132b588eb6b', type: 'user' }, // consumerId
      // tiago   // object: { id: '01b110a8-cc48-4f8c-bbf3-d53ae985f4e6', type: 'user' }, // uuid
      content_object_type: 'product',
      primary_positive_relationship_type: 'liked',
      secondary_positive_relationship_type: 'favorited',
      primary_negative_relationship_type: 'disliked'
    };

    return new Promise((resolve, reject) => {
      instance.getRecommendedContent(this.appId, options, (error, resData, res) => {
        if (error) {
          reject(error);
        }
        console.log(`[INFO]: Getting product recomendations`);
        resolve(resData);
      });
    });
  };
}

export default new apiPipe();