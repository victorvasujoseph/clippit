const router = require("express").Router();
const bookingController = require('../../controller/bookingController')

router.route('/stylist-available/:day/:month/:year')
    .get(bookingController.getAvailableStylist);

module.exports = router;
