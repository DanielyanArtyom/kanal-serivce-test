import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IUserCredentials,
  IUserInitialSlice,
} from "../../../common/interfaces/UserInterfaces";

const initialState: IUserInitialSlice = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<IUserCredentials>) => {
      (state.email = action.payload.email),
        (state.password = action.payload.password),
        (state.isLoggedIn = true);
    },
    signOutUser: (state) => {
      (state.email = ""), (state.password = ""), (state.isLoggedIn = false);
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
