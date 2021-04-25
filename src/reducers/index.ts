import { combineReducers } from "redux";
import fetchedItems from "./fetchedItems";

export const rootReducer = combineReducers({ fetchedItems });

export type RootState = ReturnType<typeof rootReducer>;
