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
export const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    addProductTo: (state, action: PayloadAction<ProductState>) => {
      state.value = [action.payload];
    },
  },
});

export const { addProductTo } = current.actions;
export default current.reducer;
