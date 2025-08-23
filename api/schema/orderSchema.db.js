import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    buyerName: { type: String, required: true },
    buyerEmail: { type: String, required: true },

    quantity: { type: Number, required: true },
    amount: { type: Number, required: true },
    messageToSeller: String,

    deliveryAddress: { type: String, required: true },
    location: String,

    status: {
      type: String,
      enum: ["pending", "accepted", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
