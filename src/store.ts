import { createStore, compose, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./reducers";
import { RootState } from "./reducers";

//ThunkMiddleWare<RootSate, AnyAction> = thunk

const tm: ThunkMiddleware<RootState, AnyAction> = thunk;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(tm),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
