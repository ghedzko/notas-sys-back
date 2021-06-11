const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  noteNumber: Number,
  sender: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
  addressee: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
  description: String,
  sendDate: Date,
  tag: [String],
});
module.exports = model("Note", noteSchema);
