import { IntentFormattedResponse } from './IntentRecognition';
import { SemanticFormattedResponse } from './SemanticSearch'

export type QueryResponse = {
    semanticSearchData: SemanticFormattedResponse | ErrorResponse;
    intentRecognitionData: IntentFormattedResponse | ErrorResponse;
}

export type ErrorResponse = {
  error: string;
}