import { combineReducers } from "redux";
import { artCollection } from "./artCollection"
import { loadingAndError } from "./loadingError"


export const rootReducers = combineReducers({
    artCollection,
    loadingAndError,
});