export type IntentParams = {
    query: string;
}

export type IntentCarouselItem = {
    resource_title: string;
    resource_url: string;
}

export type IntentRawResponse = {
    ['_id']: {
        ['$oid']: string
    };
    id: string;
    response: string;
    carousel?: IntentCarouselItem[];
}

export type IntentFormattedResponse = {
    mainMessage: string;
    carouselCards?: IntentCarouselItem[];
}