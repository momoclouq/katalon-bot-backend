import axios from 'axios';
import config from '../config/config';
import { IntentParams, IntentRawResponse } from '../typings/IntentRecognition';

const baseUrl: string = config.recognitionUrl;

const RecognitionApi = {
  query: async ({ query = 'getting started' }: IntentParams): Promise<IntentRawResponse> => {
    const path = '/';
    const params = '?query=' + query;

    const response = await axios.get(baseUrl + path + params);

    return response.data;
  }
};

export default RecognitionApi;
