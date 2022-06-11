import { IntentRawResponse } from "../../typings/IntentRecognition";
import { SemanticRawResponse } from "../../typings/SemanticSearch";

type AxiosOutput = IntentRawResponse | SemanticRawResponse;

export const errorAxiosHandle = async (axiosCall: Function, params: any): Promise<AxiosOutput> => {
    try {
        return await axiosCall(params);
    } catch (error) {
        if (error.response) {
            console.log("******Error - response*******");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            return error.response.data;
        } else if (error.request) {
            // The request was made but no response was received
            console.log("******Error - request*******");
            console.log(error.request);
            return error.request;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("******Error - message*******");
            console.log('Error', error.message);
            return error.message;
        }
    }
}