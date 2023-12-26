"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "@/app/components/Book";

const Page = () => {
  const [books, setBooks] = useState<string[] | any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="w-full flex-wrap flex  ml-[150px] mt-[100px] max-container">
      <div className="flex flex-wrap gap-10">
        {books.map((book) => (
          <Book
            key={book._id}
            _id={book._id}
            publishDate={book.publishDate}
            name={book.name}
            genre={book.genre}
            price={book.price}
            description={book.description}
            imgURL={book.imgURL}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
