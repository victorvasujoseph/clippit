const router = require("express").Router();
const bookingRoute = require('./booking');
const authRoute = require('./auth');
//Create a new file under api folder and start calling them in the below route.use

router.use("/booking", bookingRoute);
router.use("/auth", authRoute);

module.exports = router;
