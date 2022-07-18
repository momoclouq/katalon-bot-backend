import axios from 'axios';
import config from '../config/config';
import { SemanticParams } from '../typings/SemanticSearch';
import logger from '../utils/logging/Logger';

const baseUrl: string = config.semanticSearchUrl;

const SemanticSearchApi = {
  query: async ({ query = 'getting started' }: SemanticParams) => {
    const path = '/';
    const params = '?query=' + query;

    logger.http(`Get - ${baseUrl + path + params}`);

    const response = await axios.get(baseUrl + path + params);

    logger.info(`Get - ${baseUrl + path + params} - success`);
    return response.data;
  }
};

export default SemanticSearchApi;