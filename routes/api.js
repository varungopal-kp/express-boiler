var express = require("express");
var router = express.Router();
var contactsRouter = require("./contacts");

router.use("/contacts", contactsRouter);

module.exports = router;
