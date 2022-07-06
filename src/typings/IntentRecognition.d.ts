export type IntentParams = {
  query: string;
};

export type IntentCarouselItem = {
  resource_title: string;
  resource_url: string;
};

export type IntentRawResponse = {
  classified: boolean;
  response: {
    id: string;
    response: string;
    carousel?: IntentCarouselItem[];
  };
};

export type IntentFormattedResponse = {
  classified: boolean;
  id: string;
  mainMessage: string;
  carouselCards?: IntentCarouselItem[];
};
