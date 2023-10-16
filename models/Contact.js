const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: String },
  },
  {
    timestamps: true, 
  }
);

contactSchema.pre("findOneAndUpdate", function (next) {
  this.options.new = true;
  next();
});

const ContactSchema = mongoose.model("Contact", contactSchema);

module.exports = ContactSchema;
