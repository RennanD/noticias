const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
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

module.exports = model("Category", CategorySchema);
