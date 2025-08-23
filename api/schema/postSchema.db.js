import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    image: { type: String, required: true },
    price: { type: Number, required: true },
    state: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
