const router = require("express").Router();
const passport = require("../passport");
const ctrl = require("../controllers");

// PATH = /api/v1/auth
// , { session: false } after local, tried with jacob
router.post("/login", passport.authenticate("local"), ctrl.auth.login);
router.post("/register", ctrl.auth.register);
router.delete("/logout", ctrl.auth.logout);

module.exports = router;
