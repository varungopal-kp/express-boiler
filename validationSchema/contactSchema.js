const { body } = require("express-validator");

module.exports.contactSchema = [
  body("firstName")
    .notEmpty()
    .bail()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 10 })
    .bail()
    .withMessage("Name must be between 3 and 10 characters"),


  body("email")
    .notEmpty()
    .bail()
    .withMessage("Email is required")
    .isEmail()
    .bail()
    .withMessage("Invalid email address"),

  body("phone")
    .notEmpty()
    .bail()
    .withMessage("Phone is required")
    .isLength({ min: 10 })
    .bail()
    .withMessage("Phone must be at least 10 characters long"),
];
