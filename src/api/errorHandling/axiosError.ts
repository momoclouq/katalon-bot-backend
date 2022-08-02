import { IntentRawResponse } from '../../typings/IntentRecognition';
import { ErrorResponse } from '../../typings/Query';
import { SemanticRawResponse } from '../../typings/SemanticSearch';
import logger from '../../utils/logging/Logger';
import { logMessageChain } from '../../utils/logging/logMessageChain';

type AxiosOutput = IntentRawResponse | SemanticRawResponse | ErrorResponse;

export const errorAxiosHandle = async (axiosCall: any, params: any): Promise<AxiosOutput> => {
  try {
    return await axiosCall(params);
  } catch (error) {
    if (error.response) {
      const block = logMessageChain();
      block.chain('Target', `${error?.config?.url}`);
      block.chain('Data:', error?.response?.data);
      block.chain('Status:', error?.response?.status);
      block.chain('Headers:', error?.response?.headers);
      logger.log('error', block.result());

      return {
        error: String(error?.response?.data)
      };
    } else if (error.request) {
      // The request was made but no response was received
      const block = logMessageChain();
      block.chain('Target: ', error?.config?.url);
      block.chain('Request: ', error?.request);
      logger.log('error', block.result());

      return {
        error: String(error?.request)
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      const block = logMessageChain();
      block.chain('Target: ', error?.config?.url);
      block.chain('Message: ', error?.message);
      logger.log('error', block.result());
      logger.log('error', 'Raw Error: ' + error);

      return {
        error: String(error?.message)
      }
    }
  }
}