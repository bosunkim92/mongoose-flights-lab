const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights})
    })
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {

    if(req.body.departs === ''){
        req.body.departs = Flight.departs;
    }

    Flight.create(req.body, function(err, flight){

        res.redirect('/flights');        
    })
}

function show(req, res){
    console.log('HTTP request is hitting the right show controller function');
    Flight.findById(req.params.id, function(err, flights){
        res.render('flights/show',{
            title: 'Flight Info.', flights
        });
    })
}