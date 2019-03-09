const db = require("../models");

module.exports = {
    getAvailableStylist: function (req, res) {
        console.log(req.params.day);
        console.log(req.params.month);
        console.log(req.params.year);
        // // var parsedUnixTime = new Date('Mon, 25 Dec 1995 00:00:00 PST').getUTCDate();
        // console.log(parsedUnixTime);
        res.json({ 'message': 'Ping Successfull' });
    }
};
