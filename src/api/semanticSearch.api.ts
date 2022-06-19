import axios from 'axios';
import config from '../config/config';
import { SemanticParams } from '../typings/SemanticSearch';

const baseUrl: string = config.semanticSearchUrl;

const SemanticSearchApi = {
  query: async ({ query = 'getting started' }: SemanticParams) => {
    const path = '/';
    const params = '?query=' + query;

    const response = await axios.get(baseUrl + path + params);

    return response.data;
  }
};

export default SemanticSearchApi;