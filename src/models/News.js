const { Schema, model } = require("mongoose");

const NewsSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    banner: {
      type: Schema.Types.ObjectId,
      ref: "File"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("NewsModel", NewsSchema);
