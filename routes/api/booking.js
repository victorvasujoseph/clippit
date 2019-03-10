const router = require("express").Router();
const bookingController = require("../../controller/bookingController");

//get all stylist from the System for a specific date
router
  .route("/stylist-available/:day/:month/:year")
  .get(bookingController.getAvailableStylist);
//add a new stylist to the System
router.route("/add-new-stylist").post(bookingController.addNewStylist);
//get all stylist from the System
router.route("/stylist").get(bookingController.stylist);

module.exports = router;
