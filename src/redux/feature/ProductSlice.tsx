import { ActionTypes } from "../contanse/action-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import data from "../../data/data.json";

// type Prodcut = {
//   id: number;
//   title: string;
//   category: string;
// };
export type product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const initialState = {
  product: data,
};
const productReducer = createSlice({
  name: "procuts",
  initialState,
  reducers: {
    setProduct(state: any, action: PayloadAction<product>) {
      state.product.push(action.payload);
    },
  },
});
// export function extype(person:type):ReturnType{}
export const { setProduct } = productReducer.actions;
export default productReducer.reducer;
