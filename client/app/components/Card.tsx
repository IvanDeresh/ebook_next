import React from "react";
import { RootState } from "../store/index";
import { removeProduct } from "../store/features/product-slice";
import { useSelector, useDispatch } from "react-redux";

import { addProductTo } from "../store/features/current";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Image from "next/image";
import Link from "next/link";
interface BookType {
  author: string;
  name: string;
  imgURL: string;
  description: string;
  publishDate: Date;
  price: number;
  genre: string;
  _id: string;
}
// ...

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productReducer.value
  );
  const handleProductClick = (selectedProduct: BookType) => {
    dispatch(
      addProductTo({
        author: selectedProduct.author,
        name: selectedProduct.name,
        imgURL: selectedProduct.imgURL,
        description: selectedProduct.description,
        price: selectedProduct.price,
        _id: selectedProduct._id,
        publishDate: selectedProduct.publishDate,
        genre: selectedProduct.genre,
      })
    );
  };

  return (
    <div className="max-container h-auto w-full ml-[100px] mt-[100px]">
      {products.length > 0 ? (
        products.map((product: BookType) => (
          <div
            key={product._id}
            className="max-2xl:w-[80%] xl:ml-[100px] w-[90%] mt-10 h-[200px] border-2 rounded-2xl flex items-center justify-around"
          >
            {/* Додайте обробник кліка до зображення, тексту чи іншого елемента, який представляє продукт */}
            <Image
              width={100}
              height={100}
              src={product.imgURL}
              alt={product.name}
              className="rounded-xl"
              onClick={() => handleProductClick(product)}
            />
            <div>
              <div className="text-[20px]">{product.name}</div>
              <div>author: {product.author}</div>
            </div>
            <div className="flex w-[10%] justify-between">
              <div className="text-green-500">{product.price} $</div>
              <div
                onClick={(e) => {
                  dispatch(removeProduct(product._id));
                }}
              >
                <DeleteForeverIcon />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Card;
