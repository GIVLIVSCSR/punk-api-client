export type APIResponseData = {
  error: string | null;
  isLoading: boolean | null;
  products: any[];
};

export enum APIRequestDataTypes {
  ON_REQUEST = "ON_REQUEST",
  ON_SUCCESS = "ON_SUCCESS",
  ON_FAILURE = "ON_FAILURE",
}

type APIRequestSendAction = {
  type: APIRequestDataTypes.ON_REQUEST;
};
type APIRequestSuccessAction = {
  type: APIRequestDataTypes.ON_SUCCESS;
  payload: any[];
};
type APIRequestFailureAction = {
  type: APIRequestDataTypes.ON_FAILURE;
  payload: string;
};

export type DataAction =
  | APIRequestSendAction
  | APIRequestSuccessAction
  | APIRequestFailureAction;
