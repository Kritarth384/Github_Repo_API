const express = require("express");
const UserInfoController = require("../controllers/UserInfoController");
const validUserCheck = require("../middleware/ValidUserCheck");
const router = express.Router();

router.get("/:id", validUserCheck.userCheck, UserInfoController.getUserInfo);

module.exports = router;
