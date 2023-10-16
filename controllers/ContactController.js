const Contact = require("../models/Contact");
const { sendResponse } = require("../helpers/responseHandler");

module.exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return sendResponse(res, 200, contacts);
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.getContactDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (contact) {
      return sendResponse(res, 200, contact);
    } else {
      return sendResponse(res, 400, null, "Record not found");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.createContacts = async (req, res) => {
  try {
    const formData = req.body;
    const contactExit = await Contact.findOne({ email: formData.email });
    if (!contactExit) {
      const contact = await Contact.create(formData);
      return sendResponse(res, 200, contact);
    } else {
      return sendResponse(res, 400, null, "Record already exist");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.updateContacts = async (req, res) => {
  try {
    const id = req.params.id;
    const formData = req.body;
    const contactExit = await Contact.findOne({
      email: formData.email,
      _id: { $ne: id },
    });

    if (!contactExit) {
      const contact = await Contact.findByIdAndUpdate(id, formData);
      return sendResponse(res, 200, contact);
    } else {
      return sendResponse(res, 400, null, "Record already exist");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.deleteContacts = async (req, res) => {
  try {
    const id = req.params.id;

    const contact = await Contact.findByIdAndRemove(id);

    if (contact) {
      return sendResponse(res, 200);
    } else {
      return sendResponse(res, 400);
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};
