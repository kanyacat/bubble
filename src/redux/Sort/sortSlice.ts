import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface sortState {
  array: number[];
}

const initialState: sortState = {
  array: [],
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setArray: (state, action: PayloadAction<number[]>) => {
      state.array = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setArray } = sortSlice.actions;

export default sortSlice.reducer;
