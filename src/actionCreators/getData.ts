import api from "../api";
import { APIRequestDataTypes } from "../types/APIReqRes";
import { AppThunkAction } from "../types/AppThunkAction";
import { TAGS } from "../constants";

export const chooseTag = (tag: string): AppThunkAction => async (dispatch) => {
  switch (tag) {
    case TAGS.all:
      return dispatch(getFromAPI(api.getAllItems));
    case TAGS.withPizza:
      return dispatch(getFromAPI(api.getItemsWithPizza));
    case TAGS.withSteak:
      return dispatch(getFromAPI(api.getItemsWithSteak));
  }
};

export const getItemData = (id: string): AppThunkAction =>
  getFromAPI(api.getItemById, id);

const getFromAPI = (f: Function, args?: string): AppThunkAction => async (
  dispatch
) => {
  try {
    dispatch({ type: APIRequestDataTypes.ON_REQUEST });
    const { data } = await f(args);
    if (data.length === 0) {
      dispatch({
        type: APIRequestDataTypes.ON_FAILURE,
        payload: "Something went wrong",
      });
    } else {
      dispatch({
        type: APIRequestDataTypes.ON_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    console.error("error:", error, "err.msg:", error.response.data.message);
    dispatch({
      type: APIRequestDataTypes.ON_FAILURE,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
