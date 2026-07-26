import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProducts,
  setLoading,
} = productSlice.actions;

export default productSlice.reducer;