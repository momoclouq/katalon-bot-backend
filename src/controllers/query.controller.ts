import { Request, Response } from 'express';
import { errorAxiosHandle } from '../api/errorHandling/axiosError';
import validator from 'validator';

import RecognitionApi from '../api/recognition.api';
import SemanticSearchApi from '../api/semanticSearch.api';
import { formatIntent, formatSemanticSearch } from '../mappers/formatQuery.mapper';
import { IntentParams, IntentRawResponse } from '../typings/IntentRecognition';
import { QueryResponse } from '../typings/Query';
import { SemanticParams, SemanticRawResponse } from '../typings/SemanticSearch';

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
   
  res.json({
    intentRecognitionData: formatIntent(recognitionRawData as IntentRawResponse),
    semanticSearchData: formatSemanticSearch(semanticRawData as SemanticRawResponse)
  } as QueryResponse);
}