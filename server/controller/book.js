import { Book } from "../models/Book.js";
export const getBooks = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const data = await Book.find().limit(limit);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
