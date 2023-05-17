
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from "../reducers";
import thunk from "redux-thunk";


export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
