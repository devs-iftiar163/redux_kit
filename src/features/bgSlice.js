import { createSlice } from "@reduxjs/toolkit";

// Background Slice
export const bgSlice = createSlice({
  name: "background",
  initialState: {
    color: "red",
  },
  reducers: {},
});

// Export Default Slice
export default bgSlice.reducer;
