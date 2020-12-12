import { combineReducers } from "redux";
import { themeReducer } from "./theme";
import { projectReducer } from "./project";

export const rootReducer = combineReducers( {
    theme: themeReducer,
    project: projectReducer
});