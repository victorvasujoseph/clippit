const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  addNewStylist: function(req, res) {
    const { body } = req;
    const { fName } = body;
    const { lName } = body;
    console.log(fName);
    console.log(lName);

    db.stylist
      .create({
        firstName: fName,
        lastName: lName
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
  }
};
