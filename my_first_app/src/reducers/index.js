import { combineReducers } from "redux";
import { taskReducer } from "./task";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers( {
    task: taskReducer,
    theme: themeReducer
});