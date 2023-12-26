"use client";
import React from "react";
import { store } from "../../store/index";
import Card from "@/app/components/Card";
import { Provider } from "react-redux";
const Page = () => {
  return (
    <div className="max-container h-auto w-full">
      <Provider store={store}>
        <Card />
      </Provider>
    </div>
  );
};
export default Page;
