import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../feature/ProductSlice";
import SelectedProduct from "../feature/SelectedProduct";

export const store = configureStore({
  reducer: {
    productReducer,
    SelectedProduct,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
