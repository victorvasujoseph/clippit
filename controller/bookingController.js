const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  addNewStylist: function(req, res) {
    const { body } = req;
    const { fName } = body;
    const { lName } = body;
    const { image } = body;
    
    console.log(fName);
    console.log(lName);
    console.log(image);

    db.stylist
      .create({
        firstName: fName,
        lastName: lName,
        image:image
      })
      .then(function(stylist) {
        console.log(stylist);
        return res.send(stylist);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  },
  // Would respond with a list of stylist available on the specific date
  // Also, would create an entry into the Stylist Scheduler Collection if there is  no entry for the date.
  getAvailableStylist: function(req, res) {
    console.log(req.params.day);
    console.log(req.params.month);
    console.log(req.params.year);

    db.stylist
      .find({})
      .then(function(stylist) {
        const response = stylist.map(value => {
          var name = value.firstName + " " + value.lastName;
          console.log(value._id);

          db.stylistSchedule
            .find({
              stylistID: mongoose.Types.ObjectId(value._id),
              day: req.params.day,
              month: req.params.month,
              year: req.params.year
            })
            .then(result => {
              if (result.length === 0) {
                db.stylistSchedule
                  .create({
                    stylistID: mongoose.Types.ObjectId(value._id),
                    day: req.params.day,
                    month: req.params.month,
                    year: req.params.year
                  })
                  .then(obj => {
                    console.log(
                      "Created new entry for :" + value._id + " " + name
                    );
                    console.log(obj);
                  });
              } else {
                console.log(
                  "Schedule Already Available for :" + value._id + " " + name
                );
                console.log(result);
              }
            })
            .catch(function(err) {
              console.log(err.message);
            });

          return { name: name, id: value._id };
        });

        return res.send(response);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  },
  stylist: function(req, res) {
    db.stylist
      .find({})
      .then(function(stylist) {
        // get all elements from the stylist array and construct the name
        const response = stylist.map(value => {
          var name = value.firstName + " " + value.lastName;
          return name;
        });

        return res.send(response);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  },
  insertAvailability: function(req, res) {
    // insert into Stylist Availabilty Table
    db.stylistSchedule
      .find({
        stylistID: mongoose.Types.ObjectId(req.body.id),
        day: req.body.day,
        month: req.body.month,
        year: req.body.year
      })
      .then(result => {
        if (result.length === 0) {
          db.stylistSchedule
            .create({
              stylistID: mongoose.Types.ObjectId(req.body.id),
              day: req.body.day,
              month: req.body.month,
              year: req.body.year
            })
            .then(obj => {
              return res.send(obj);
            });
        } else {
          console.log(result);
          return res.send(result);
        }
      })
      .catch(function(err) {
        console.log(err.message);
      });
  },
  bookAppointment: function(req, res) {
    console.log(req.body.stylistID);
    console.log(req.body.day);
    console.log(req.body.month);
    console.log(req.body.year);
    console.log(req.body.timeSlot);
    console.log(req.body.customerID);

    db.appointments
      .find({
        stylistID: req.body.stylistID,
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        timeSlot: req.body.timeSlot
      })
      .then(result => {
        // There a no appointments for this specific stylist at this time
        // create a new entry
        if (result.length === 0) {
          db.appointments
            .create({
              stylistID: req.body.stylistID,
              day: req.body.day,
              month: req.body.month,
              year: req.body.year,
              timeSlot: req.body.timeSlot,
              customerID: req.body.customerID
            })
            .then(value => {
              console.log(value.stylistID);
              db.stylistSchedule
                .findOneAndUpdate(
                  {
                    stylistID: req.body.stylistID,
                    day: req.body.day,
                    month: req.body.month,
                    year: req.body.year
                  },
                  {
                    [req.body.timeSlot]: false
                  },
                  { new: true }
                )
                .then(value => {
                  return res.send(value);
                });
            });
        } else {
          result.map(value => {
            // check if the existing appointments for that day is active
            console.log(value.state);
            if (value.state === "active") {
              return res.send({ error: "This Stylist is busy at this time" });
            }
          });
          // Create a row since none of the appointments are not active
          db.appointments
            .create({
              stylistID: req.body.stylistID,
              day: req.body.day,
              month: req.body.month,
              year: req.body.year,
              timeSlot: req.body.timeSlot,
              customerID: req.body.customerID
            })
            .then(value => {
              console.log(value.stylistID);
              db.stylistSchedule
                .findOneAndUpdate(
                  {
                    stylistID: req.body.stylistID
                  },
                  {
                    [req.body.timeSlot]: false
                  },
                  { new: true }
                )
                .then(value => {
                  return res.send(value);
                });
            });
        }
      });
  },
  getStylistSchedule: function(req, res) {
    console.log(req.params.stylistID);
    console.log(req.params.day);
    console.log(req.params.month);
    console.log(req.params.year);

    db.stylistSchedule
      .find({
        stylistID: req.params.stylistID,
        day: req.params.day,
        month: req.params.month,
        year: req.params.year
      })
      .then(result => {
        if (result.length !== 0) {
          return res.send(result);
        } else {
          return res.send({
            error: "No slots Found for the Requested Combination"
          });
        }
      });
  },
  getCustomerSchedule: function(req,res){
    console.log(req.params.customerID);

    db.appointments
      .find({
        customerID: req.params.customerID,
        state:"active"
      })
      .then(result => {
        if (result.length !== 0) {
          return res.send(result);
        } else {
          return res.send({
            error: "No Active Appointments"
          });
        }
      });

  }
};
