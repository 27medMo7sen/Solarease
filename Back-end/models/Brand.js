import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: String,
  created_at: { type: Date, default: Date.now },
});
const brandModel = mongoose.model("Brand", brandSchema);
export default brandModel;