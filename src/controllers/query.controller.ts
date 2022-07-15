import e, { Request, Response } from 'express';
import { errorAxiosHandle } from '../api/errorHandling/axiosError';
import validator from 'validator';

import RecognitionApi from '../api/recognition.api';
import SemanticSearchApi from '../api/semanticSearch.api';
import { formatIntent, formatSemanticSearch } from '../mappers/formatQuery.mapper';
import { IntentParams, IntentRawResponse } from '../typings/IntentRecognition';
import { QueryResponse } from '../typings/Query';
import { SemanticParams, SemanticRawResponse } from '../typings/SemanticSearch';
import { extractErrorMessage } from '../utils/extractError';

export const getQueryController = async (req: Request, res: Response, next: any) => {
  let query = validator.trim(req.query.query as string);
  query = validator.escape(query);

  const intentParams: IntentParams = {
    query: query
  };
    
  const semanticParams: SemanticParams = {
    query: query
  };

  const [recognitionRawData, semanticRawData] = await Promise.all([
    errorAxiosHandle(RecognitionApi.query, intentParams),
    errorAxiosHandle(SemanticSearchApi.query, semanticParams)
  ]);

  console.log({
    intentRecognitionData: formatIntent(recognitionRawData as IntentRawResponse),
    semanticSearchData: formatSemanticSearch(semanticRawData as SemanticRawResponse)
  })

  const errorMessage = extractErrorMessage([recognitionRawData, semanticRawData]);
  if(errorMessage){
    res.status(500).json({
      error: errorMessage
    });
  } else {
    res.status(200).json({
      intentRecognitionData: formatIntent(recognitionRawData as IntentRawResponse),
      semanticSearchData: formatSemanticSearch(semanticRawData as SemanticRawResponse)
    } as QueryResponse);  
  } 
}

export const mockSuccessQueryController =  async (req: Request, res: Response, next: any) => {
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