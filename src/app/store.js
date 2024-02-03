import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import bgReducer from "../features/bgSlice";

// Create Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    background: bgReducer,
  },
});

// Export default
export default store;
