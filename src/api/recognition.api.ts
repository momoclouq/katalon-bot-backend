import axios from 'axios';
import config from '../config/config';
import { IntentParams, IntentRawResponse } from '../typings/IntentRecognition';
import logger from '../utils/logging/Logger';

const baseUrl: string = config.recognitionUrl;

const RecognitionApi = {
  query: async ({ query = 'getting started' }: IntentParams): Promise<IntentRawResponse> => {
    const path = '/';
    const params = '?query=' + query;
    logger.http(`Get - ${baseUrl + path + params}`);

    const response = await axios.get(baseUrl + path + params);

    logger.info(`Get - ${baseUrl + path + params} - Success`);
    return response.data;
  }
};

export default RecognitionApi;
