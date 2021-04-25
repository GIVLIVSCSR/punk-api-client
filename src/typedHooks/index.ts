import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import store from "../store";
import { RootState } from "../reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
