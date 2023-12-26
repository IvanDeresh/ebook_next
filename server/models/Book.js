import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Default _id field
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
  },
  // Додайте інші поля за необхідністю
});

export const Book = mongoose.model("Book", BookSchema);
