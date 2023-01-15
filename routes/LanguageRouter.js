const express = require("express");
const LanguageController = require("../controllers/LanguageController");

const router = express.Router();

// getting person name - id
// getting person repo name ; topic
router.get("/:id/:topic", LanguageController.getLangInfo);

module.exports = router;
