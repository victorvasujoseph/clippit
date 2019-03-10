const db = require("../models");

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
  getAvailableStylist: function(req, res) {
    // console.log(req.params.day);
    // console.log(req.params.month);
    // console.log(req.params.year);

    db.stylist
      .find({})
      .then(function(stylist) {
        const response = stylist.map(value => {
          var name = value.firstName + " " + value.lastName;
          console.log(name);
          return name;
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
          console.log(name);
          return name;
        });

        return res.send(response);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  }
};
