"use client";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product-slice";
import currentReducer from "./features/current";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    productReducer,
    currentReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
