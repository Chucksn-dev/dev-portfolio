import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuStatusSlice";

export const store = configureStore({
  reducer: {
    hamburgerMenuStatus: hamburgerMenuReducer,
  },
});
