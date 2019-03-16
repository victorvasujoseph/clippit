const router = require("express").Router();
const bookingController = require("../../controller/bookingController");

//get all stylist from the System for a specific date

/* 
Sample Request 

http://localhost:3001/api/booking/stylist-available/1/1/2019

---------------------------------------
Sample Response
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
Sample Request : 
http://localhost:3001/api/booking/add-new-stylist

{
	"fName":"James",
	"lName":"Bond"
}

Sample response : 
{
    "_id": "5c85e62e9f2c9d1678645d1c",
    "firstName": "James",
    "lastName": "Bond",
    "__v": 0
}
*/
router.route("/add-new-stylist").post(bookingController.addNewStylist);
//get all stylist Name's from the System
/*
Sample Request :
http://localhost:3001/api/booking/stylist
Sample Response :
[
    "Victor Joseph",
    "Tina T",
    "Mark T",
    "Mathew E",
    "Mathew Rock",
    "James Bond"
]
*/
router.route("/stylist").get(bookingController.stylist);
// Inserts a specific date in stylist schedule 
// THIS API IS JUST FOR DEVELOPMENT ONLY - DO NOT INTEGRATE WITH REACT
/*
Sample Request :
http://localhost:3001/api/booking/insert-availability

Sample Response :
{
	"id":"5c8552e88596910fb313748e",
	"day":"10",
	"month":"03",
	"year":"2019"
}
*/
router.route("/insert-availability").post(bookingController.insertAvailability);
// Completes the apppointment between a customer and stlylist
/*
Sample Request :
http://localhost:3001/api/booking/book-appointment
{
	"stylistID":"5c8552e88596910fb313748e" ,
            "day": "1",
            "month":"1",
            "year": "2019",
            "timeSlot": "slot1" ,
            "customerID":"5c8424d0948d9e04cf4a8e01"
}

Sample Response :
{
    "slot1": false,
    "slot2": true,
    "slot3": true,
    "slot4": true,
    "slot5": true,
    "slot6": true,
    "slot7": true,
    "slot8": true,
    "_id": "5c89cd4feec60c088df8b3b7",
    "stylistID": "5c8552e88596910fb313748e",
    "day": 1,
    "month": 1,
    "year": 2019,
    "__v": 0
}

*/
router.route("/book-appointment").post(bookingController.bookAppointment);

// Get's a stylist schedule for a specific day
/*
Sample Request :
http://localhost:3001/api/booking/stylist-schedule/5c8552e88596910fb313748e/1/1/2019
Sample Response :
[
    {
        "slot1": false,
        "slot2": true,
        "slot3": true,
        "slot4": true,
        "slot5": true,
        "slot6": true,
        "slot7": true,
        "slot8": true,
        "_id": "5c89cd4feec60c088df8b3b7",
        "stylistID": "5c8552e88596910fb313748e",
        "day": 1,
        "month": 1,
        "year": 2019,
        "__v": 0
    }
]
*/
router
  .route("/stylist-schedule/:stylistID/:day/:month/:year")
  .get(bookingController.getStylistSchedule);
// Get's a customer's schedule
/*
Sample Request :
http://localhost:3001/api/booking/customer-schedule/5c8424d0948d9e04cf4a8e01

Sample Response :

[
    {
        "state": "active",
        "_id": "5c89bcc8627e62063de97227",
        "stylistID": "5c8552e88596910fb313748e",
        "day": 10,
        "month": 11,
        "year": 2019,
        "timeSlot": "slot1",
        "customerID": "5c8424d0948d9e04cf4a8e01",
        "__v": 0
    }
]
*/
router
    .route("/customer-schedule/:customerID")
    .get(bookingController.getCustomerSchedule);
module.exports = router;
