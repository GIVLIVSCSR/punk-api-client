import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/index";
import { DataAction } from "../types/APIReqRes";

export type AppThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  DataAction
>;
