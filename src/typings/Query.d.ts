import { IntentFormattedResponse } from "./IntentRecognition";
import { SemanticFormattedResponse } from "./SemanticSearch"

export type QueryResponse = {
    semanticSearchData: SemanticFormattedResponse;
    intentRecognitionData: IntentFormattedResponse;
}