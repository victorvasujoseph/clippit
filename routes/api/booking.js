const router = require("express").Router();
const bookingController = require("../../controller/bookingController");

//get all stylist from the System for a specific date
/* Ssmple Response
[
    {
        "name": "Victor Joseph",
        "id": "5c8552e88596910fb313748e"
    },
    {
        "name": "Tina T",
        "id": "5c85531a5f45cc0fbf2f11e1"
    }
]
*/
router
  .route("/stylist-available/:day/:month/:year")
  .get(bookingController.getAvailableStylist);

//add a new stylist to the System
/*
sample response
{
    "_id": "5c85e62e9f2c9d1678645d1c",
    "firstName": "James",
    "lastName": "Bond",
    "__v": 0
}
*/
router.route("/add-new-stylist").post(bookingController.addNewStylist);
//get all stylist from the System
router.route("/stylist").get(bookingController.stylist);
router.route("/insert-availability").post(bookingController.insertAvailability);
router.route("/book-appointment").post(bookingController.bookAppointment);

module.exports = router;
