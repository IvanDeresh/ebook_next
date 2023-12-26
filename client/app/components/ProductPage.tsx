import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const ProductPage = () => {
  const products = useSelector(
    (state: RootState) => state.productReducer.value
  );

  return (
    <div className="">
      {products.map((p) => (
        <div>{p.name}</div>
      ))}
    </div>
  );
};

export default ProductPage;
