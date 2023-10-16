var express = require("express");
var router = express.Router();

const ContactController = require("../controllers/ContactController");
const { validateInput } = require("../helpers/validationHandler");
const { contactSchema } = require("../validationSchema/contactSchema");

router.get("/", ContactController.getContacts);
router.get("/:id", ContactController.getContactDetails);
router.post(
  "/",
  contactSchema,
  validateInput,
  ContactController.createContacts
);

router.put(
  "/:id",
  contactSchema,
  validateInput,
  ContactController.updateContacts
);

router.delete("/:id", ContactController.deleteContacts);

module.exports = router;
