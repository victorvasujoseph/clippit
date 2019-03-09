const User = require("../../models/user");
const UserSession = require("../../models/userSession");
const router = require("express").Router();
const authController = require("../../controller/authController");

router.route("/account/signup").post(authController.signUp);
router.route("/account/signin").post(authController.signIn);
router.route("/account/verify").get(authController.verify);
router.route("/account/logout").get(authController.logout);

module.exports = router;