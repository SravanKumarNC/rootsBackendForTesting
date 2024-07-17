import mongoose from "mongoose";

const ForkliftSchema = mongoose.Schema(
  {
    id: { type: Number, unique: true },
    robotName: { type: String, require: true },
    rangeFront: {
      type: Number,
    },
    rangeLower: {
      type: Number,
    },
    selectionPallet: {
      type: String,
    },
    liftAndBack: {
      type: String,
    },
    liftToDrop: {
      type: String,
    },
    dropToManual: {
      type: String,
    },
    strFeed: {
      type: Number,
    },
    battery: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
  { collection: "forklift" }
);
const ForkliftModel = mongoose.model("ForkliftModel", ForkliftSchema);
export default ForkliftModel
