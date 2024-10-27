const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
  name: String,
  phone: String,
  company: String,
  active: Boolean,
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
