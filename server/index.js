import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { users } from "./data/index.js";
import { getBooks } from "./controller/book.js";
import User from "./models/User.js";
import { getUsers } from "./controller/auth.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5001;
app.get("/books", getBooks);
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const result = await User.findOne({ email, password });
    if (result) {
      res.json("exist");
    } else {
      res.json("error spoajnpsd");
      await User.insertMany([data]);
    }
  } catch (e) {
    res.status(501, "dont exist");
  }
});
app.get("/users", getUsers);
app.post("/register", async (req, res) => {
  try {
    // Check if required fields are present
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      picturePath:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thestatesman.com%2Ftechnology%2Fscience%2Fpeople-with-slender-face-more-likely-to-be-left-handed-1493458760.html&psig=AOvVaw0iwQvNm5ZY_O9vDd-aUgO1&ust=1701781326482000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPi6kszr9YIDFQAAAAAdAAAAABAJ",
      balance: Math.floor(Math.random() * 10),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    res.status(501).json("An error occurred");
  }
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/book");
