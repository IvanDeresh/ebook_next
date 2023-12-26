import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  author: string;
  name: string;
  imgURL: string;
  description: string;
  publishDate: Date;
  price: number;
  genre: string;
  _id: string;
};

interface InitialState {
  value: ProductState[];
}

const initialState: InitialState = {
  value: [],
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { removeProduct, addProduct } = product.actions;
export default product.reducer;
