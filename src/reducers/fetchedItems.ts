import {
  APIResponseData,
  APIRequestDataTypes,
  DataAction,
} from "../types/APIReqRes";

const initState: APIResponseData = {
  isLoading: false,
  error: null,
  products: [],
};

const fetchedItems = (
  state = initState,
  action: DataAction
): APIResponseData => {
  switch (action.type) {
    case APIRequestDataTypes.ON_REQUEST:
      return { isLoading: true, products: [], error: null };
    case APIRequestDataTypes.ON_SUCCESS:
      return { isLoading: false, products: action.payload, error: null };
    case APIRequestDataTypes.ON_FAILURE:
      return { isLoading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export default fetchedItems;
