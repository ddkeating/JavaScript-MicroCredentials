const express = require("express");
const router = express.Router();

// Import controllers.
const user = require("../controllers/userController");

router.post("/register", user.createUser);

module.exports = router;
