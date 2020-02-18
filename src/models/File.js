const { model, Schema } = require("mongoose");

const FileSchema = new Schema(
  {
    path: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

FileSchema.pre("save", function() {
  if (this.path) {
    this.url = `http://localhost:3001/files/${this.path}`;
  }
});

module.exports = model("File", FileSchema);
