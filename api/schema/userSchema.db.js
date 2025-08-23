import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },

    speciality: { type: String, rquired: true },

    location: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
