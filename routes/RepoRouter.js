const express = require("express");
const RepoInfo = require("../controllers/repoInfoController");
const validUserCheck = require("../middleware/ValidUserCheck");
const router = express.Router();

router.get("/:id", validUserCheck.userCheck, RepoInfo.getRepoInfo);

module.exports = router;
