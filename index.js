const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const profileRouter = require("./routes/ProfileRouter");
const repoRouter = require("./routes/RepoRouter");
const languageRouter = require("./routes/LanguageRouter");

// express app
dotenv.config({ path: "./config.env" });
const app = express();

// Implement Cors
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

// set security HTTP headers
app.use(helmet());

// MiddleWare

// routes
app.use("/api", profileRouter);
app.use("/api/repos", repoRouter);
app.use("/api/lang", languageRouter);

// listening the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
