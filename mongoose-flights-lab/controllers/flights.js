const Flight = require('./models/flight');

module.exports = {
    index,
    new: newFlight
}

function index(req, res) {
    Flight.find({}, function(err, flight){
        res.render('flights/index', {title: 'All Flights', flights})
    })
}