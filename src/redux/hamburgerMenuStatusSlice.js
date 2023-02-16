import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const hamburgerMenuStatusSlice = createSlice({
  name: "menu-status",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      return !state;
    },
  },
});

export default hamburgerMenuStatusSlice.reducer;
export const { toggleMenu } = hamburgerMenuStatusSlice.actions;
