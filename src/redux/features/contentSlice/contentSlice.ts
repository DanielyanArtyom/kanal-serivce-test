import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchContent } from "./asyncActions";
import { RootState } from "../../store";
import { IPostsToShow } from "../../../common/interfaces/ContentInterface";

interface IInitState {
  content: IPostsToShow[];
  fetching: boolean;
}

const initialState: IInitState = {
  content: [],
  fetching: true,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(
      fetchContent.fulfilled,
      (state, action: PayloadAction<IPostsToShow[]>) => {
        state.content = action.payload;
        state.fetching = false;
      }
    );
  },
});

export const getContent = (state: RootState) => state.content.content;
export const isFetching = (state:RootState) => state.content.fetching

export default contentSlice.reducer;
