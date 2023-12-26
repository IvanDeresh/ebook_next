"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import ProductPage from "../../../components/ProductPage";
const page = () => {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
};

export default page;
