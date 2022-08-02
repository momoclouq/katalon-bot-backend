import { Request, Response } from 'express';
import { errorAxiosHandle } from '../api/errorHandling/axiosError';
import validator from 'validator';

import RecognitionApi from '../api/recognition.api';
import SemanticSearchApi from '../api/semanticSearch.api';
import { formatIntent, formatSemanticSearch } from '../mappers/formatQuery.mapper';
import { IntentParams, IntentRawResponse } from '../typings/IntentRecognition';
import { QueryResponse } from '../typings/Query';
import { SemanticParams, SemanticRawResponse } from '../typings/SemanticSearch';
import { extractErrorMessage } from '../utils/extractError';
import logger from '../utils/logging/Logger';

export const getQueryController = async (req: Request, res: Response, next: any) => {
  let query = validator.trim(req.query.query as string);
  query = validator.escape(query);
  query = encodeURI(query);

  logger.info(query);

  logger.info('get query controller - called');

  const intentParams: IntentParams = {
    query: query
  };
    
  const semanticParams: SemanticParams = {
    query: query
  };

  const recognitionRawData = await errorAxiosHandle(RecognitionApi.query, intentParams);
  const recognitionformattedData = formatIntent(recognitionRawData as IntentRawResponse);
  if (recognitionformattedData === null || 'error' in recognitionformattedData) {
    const semanticRawData = await errorAxiosHandle(SemanticSearchApi.query, semanticParams);

    const errorMessage = extractErrorMessage([semanticRawData]);
    if(errorMessage){
      return res.status(500).json({
        error: errorMessage
      });
    }

    return res.status(200).json({
      intentRecognitionData: null,
      semanticSearchData: formatSemanticSearch(semanticRawData as SemanticRawResponse)
    } as QueryResponse)
  }

  res.status(200).json({
    intentRecognitionData: recognitionformattedData,
    semanticSearchData: null
  } as QueryResponse);  
}

export const mockSuccessQueryController =  async (req: Request, res: Response, next: any) => {
  logger.info('mock query controller called');
  
  await new Promise(r => setTimeout(r, 2000));
 
  res.status(200).json({
    intentRecognitionData: {
      classified: true,
      id: 'search query',
      mainMessage: 'this a mock result',
      carouselCards: [
        {
          resource_title: 'Install katalon chatbot with integration',
          resource_url: 'http://google.com'
        },
        {
          resource_title: 'intent title 2',
          resource_url: 'http://google.com'
        }
      ],
    },
    semanticSearchData: [
      {
        mainMessage: 'semantic main 1',
        subMessage: 'semantic sub 1',
        url: 'https://google.com',
      },
      {
        mainMessage: 'semantic main 2',
        subMessage: 'semantic sub 2',
        url: 'https://google.com',
      },
      {
        mainMessage: 'semantic main 3',
        subMessage: 'semantic sub 4',
        url: 'https://google.com',
      },
      {
        mainMessage: 'semantic main 3 mkmckdmckdmcdkcd',
        subMessage: 'semantic sub 4',
        url: 'https://google.com',
      },
      {
        mainMessage: 'semantic main 3',
        subMessage: 'semantic sub 4 cmdmkmckdmckdmcdmcksalsdc',
        url: 'https://google.com',
      }
    ]
  } as QueryResponse);   
}