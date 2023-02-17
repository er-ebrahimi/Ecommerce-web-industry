import { ActionTypes } from "../contanse/action-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data/data.json";
import axios from "axios";
import { product } from "../../utility/types";
let initialProduct: product[] = [];

const initialState = {
  product: initialProduct,
};
const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct(state: any, action: PayloadAction<product>) {
      // state.product.push(action.payload);
      state.product = action.payload;
    },
  },
});
// export function extype(person:type):ReturnType{}
export const { setProduct } = productReducer.actions;
export default productReducer.reducer;
