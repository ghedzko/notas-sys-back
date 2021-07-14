const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: String,
  office: String,
  email: String,
  phone: String,
});
module.exports = model("Contact", contactSchema);
