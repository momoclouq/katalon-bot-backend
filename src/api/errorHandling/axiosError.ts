import { IntentRawResponse } from '../../typings/IntentRecognition';
import { SemanticRawResponse } from '../../typings/SemanticSearch';

type AxiosOutput = IntentRawResponse | SemanticRawResponse | { error: string; };

export const errorAxiosHandle = async (axiosCall: any, params: any): Promise<AxiosOutput> => {
  try {
    return await axiosCall(params);
  } catch (error) {
    if (error.response) {
      console.log('******Error - response*******');
      console.log('Data:', error.response.data);
      console.log('Status:', error.response.status);
      console.log('Headers:', error.response.headers);
      console.log('---------------------');

      return {
        error: String(error.response.data)
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.log('******Error - request*******');
      console.log('Request: ', error.request);
      console.log('---------------------');

      return {
        error: String(error.request)
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('******Error - message*******');
      console.log('Message: ', error.message);
      console.log('---------------------');

      return {
        error: String(error.message)
      }
    }
  }
}