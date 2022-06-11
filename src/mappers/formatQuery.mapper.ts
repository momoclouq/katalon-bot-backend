import { IntentFormattedResponse, IntentRawResponse } from "../typings/IntentRecognition";
import { SemanticFormattedResponse, SemanticRawResponse } from "../typings/SemanticSearch";

export const formatIntent = (intent: IntentRawResponse): IntentFormattedResponse => {
    if (!intent.carousel) return null;

    return {
        mainMessage: intent.response,
        carouselCards: intent.carousel
    };
};

export const formatSemanticSearch = (semanticSearch: SemanticRawResponse): SemanticFormattedResponse => {
    return {
        value: "not yet implemented"
    };
};