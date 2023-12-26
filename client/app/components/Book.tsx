"use client";
import React from "react";
import Image from "next/image";
import { addProduct } from "../store/features/product-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
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
const Book: React.FC<BookType> = ({
  author,
  name,
  imgURL,
  description,
  price,
  _id,
  publishDate,
  genre,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="border-2 rounded-2xl w-[400px] h-[500px] flex flex-col justify-between items-center">
      <Image
        className="rounded-2xl mt-[20px]"
        src={imgURL}
        height={100}
        width={200}
        alt="book"
      />
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <div className="text-[20px] px-10 flex justify-center">{name}</div>
        <div>{author}</div>
        <div>{_id}</div>
        <div className="flex items-center justify-around w-full">
          <div className="text-green-300">{price}$</div>
          <button
            onClick={() => {
              dispatch(
                addProduct({
                  name: name,
                  author: author,
                  price: price,
                  imgURL: imgURL,
                  description: description,
                  _id: _id,
                  publishDate: publishDate,
                  genre: genre,
                })
              );
            }}
            className="w-[40px] h-[40px] rounded-full bg-green-500 text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Book;
