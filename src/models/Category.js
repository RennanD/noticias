const { Schema, model } = require("mongoose");

const NewsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    banner: {
      type: Schema.Types.ObjectId,
      ref: "File"
    }
  },
  {
    timestamps
  }
);

module.exports = model("News", NewsSchema);
