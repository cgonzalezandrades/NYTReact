/**
 * Created by carlosgonzalez on 11/11/16.
 */
// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');

//Require Click Schema
var Click = require('./models/articles.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function () {
    console.log('Mongoose connection successful.');
});

var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=140c561f689941ad8dc3d54a1e3199b5";

// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application


app.get('/#/?_k=ikwkse', function (req, res) {



    res.sendFile('./public/index.html');
})

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
// app.get('/api/', function(req, res) {
//
//     // This GET request will search for the latest clickCount
//     Click.find({})
//         .exec(function(err, doc){
//
//             if(err){
//                 console.log(err);
//             }
//             else {
//                 res.send(doc);
//             }
//         })
// });
//
// // This is the route we will send POST requests to save each click.
// // We will call this route the moment the "click" or "reset" button is pressed.
// app.post('/api/', function(req, res){
//     var newClick = new Click(req.body);
//     console.log(req.body);
//
//     var clickID = req.body.clickID;
//     var clicks = parseInt(req.body.clicks);
//
//     // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
//     Click.findOneAndUpdate({"clickID": clickID}, {$set: {"clicks": clicks}}, {upsert: true}).exec(function(err){
//
//         if(err){
//             console.log(err);
//         }
//
//         else{
//             res.send("Updated Click Count!");
//         }
//     });
//
// });


// -------------------------------------------------

request(url,function (err, res, body) {

    console.log('inside the get')
    console.log(body);

});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
