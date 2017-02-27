// dependencies 
//====================================//
var connection = require("../config/config.js");
var Events = require('../models/eventer.js')
var moment = require('moment');
moment().format();


//Routes
//======================//
module.exports = function(app){

    //Get the events//
    app.get('/api/all', function(req, res){
        Events.findAll({}).then(function(results){
           res.json(results); 
        });
        
    });
// Add a new event
    app.post('/api/new', function(req, res){
        console.log('event data:');
        console.log(req.body);
        Events.create({
            author: req.body.author,
            event_Name: req.body.event_Name,
            time: req.body.time,
            attendee: req.body.attendee,
            location:req.body.location,
            description: req.body.description,
            when_at: req.body.when_at
        }).then(function(results){
            res.json(results);
        })

        
    });
};