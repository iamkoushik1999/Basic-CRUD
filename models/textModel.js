const mongoose = require("mongoose");

const textSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add some text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Text", textSchema);
