import mongoose, { Schema } from "mongoose";

const TokenSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToke: { type: String, required: true },
});
export const Token = mongoose.model("Token", TokenSchema);
