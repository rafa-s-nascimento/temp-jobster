const express = require("express");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const authentication = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const rateLimiter = require("express-rate-limit");

const rateLimiterMid = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: "Too many requests from this IP. Please, try again after 15 minutes",
  },
});

router.post("/register", rateLimiterMid, register);
router.post("/login", rateLimiterMid, login);
router.patch("/updateUser", authentication, testUser, updateUser);

module.exports = router;
