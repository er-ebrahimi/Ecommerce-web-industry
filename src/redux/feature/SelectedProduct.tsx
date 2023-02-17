import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../utility/types";
const initialState: product[] = [];
const SelectedProductSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectedProduct(state, {payload}) {
      state.push(...payload);
    },
    incrementProduct(state, action: PayloadAction<product>) {
      // state.push(action.payload);
      state.map((product, index, array) => {
        if (array[index].id === action.payload.id) {
          array[index].amount++;
        }
      });
    },
    decrementProduct(state, action: PayloadAction<product>) {
      // state.push(action.payload);
      state.map((product, index, array) => {
        if (array[index].id === action.payload.id) {
          array[index].amount--;
        }
      });
    },
    deleteProduct(state, action: PayloadAction<product>) {
      // state.push(action.payload);
      state.map((product, index, array) => {
        if (array[index].id === action.payload.id) {
          array.splice(index, 1);
        }
      });
    },
  },
});

export const {
  selectedProduct,
  incrementProduct,
  decrementProduct,
  deleteProduct,
} = SelectedProductSlice.actions;
export default SelectedProductSlice.reducer;
