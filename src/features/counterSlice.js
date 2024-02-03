import { createSlice } from "@reduxjs/toolkit";

// Create Counter Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    set: (state, action) => {
      state.count = 1200;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

// Export Action
export const { increment, decrement, set, reset } = counterSlice.actions;

// Export Default Slice
export default counterSlice.reducer;
