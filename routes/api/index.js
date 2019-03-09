const router = require("express").Router();
const bookingRoute = require('./booking');
//Create a new file under api folder and start calling them in the below route.use

router.use("/booking", bookingRoute);

module.exports = router;
