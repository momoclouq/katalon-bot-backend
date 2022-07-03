import {
  IntentFormattedResponse,
  IntentRawResponse,
} from '../typings/IntentRecognition';
import { ErrorResponse } from '../typings/Query';
import {
  SemanticFormattedResponse,
  SemanticRawResponse,
} from '../typings/SemanticSearch';

export const formatIntent = (
  intent: IntentRawResponse | ErrorResponse
): IntentFormattedResponse | ErrorResponse => {
  if ('error' in intent) return intent;
  if (!intent.carousel) return null;

  return {
    mainMessage: intent.response,
    carouselCards: intent.carousel,
  };
};

export const formatSemanticSearch = (
  semanticSearch: SemanticRawResponse | ErrorResponse
): SemanticFormattedResponse | ErrorResponse => {
  if ('error' in semanticSearch) return semanticSearch; 

  return semanticSearch.map((item) => {
    return {
      mainMessage: item.title,
      subMessage: item.sentence,
      url: item.url,
    };
  });
};
