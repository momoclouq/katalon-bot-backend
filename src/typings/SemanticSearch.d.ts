export type SemanticParams = {
    query: string;
}

export type SemanticRawResponseItem = {
    document_id: number;
    sentence_id: number;
    title: string;
    url: string;
    sentence: string;
}

export type SemanticRawResponse = SemanticRawResponseItem[];

export type SemanticFormattedResponseItem = {
    mainMessage: string;
    subMessage: string;
    url: string;
}

export type SemanticFormattedResponse = SemanticFormattedResponseItem[];