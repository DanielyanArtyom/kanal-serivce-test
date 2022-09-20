import { combineReducers } from "@reduxjs/toolkit";
import contentSlice from "./features/contentSlice/contentSlice";
import userSlice from "./features/userSlice/userSlice";

export const rootReducer = combineReducers({
  personal: userSlice,
  content: contentSlice,
});
