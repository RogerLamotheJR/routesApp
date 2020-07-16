// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.User.findAll({})
        .then(function(allPosts){
        console.log("posts sent");
            res.json(allPosts);
    });
     
  });

  // Get route for returning posts of all selling instruments
  app.get("/api/posts/instruments/:sell", function(req, res) {
    db.instruments.findAll({})
        .then(function(allInstruments){
        console.log("Selling instruments");
            res.json(allInstrument);
      });
    });
  
  // Get route for returning posts of all buying instruments
  app.get("/api/posts/instruments/:buy", function(req, res) {
    db.instruments.findAll({})
        .then(function(allBuyingInstruments){
        console.log("Buying instruments");
            res.json(allBuyingjeInstrument);
      });
    });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      body: req.body.body,
      instruments: req.body.myBorard
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  
  // This function grabs posts from the database and updates the view
  function getPosts(myBoard) {
    var myBoardString = category || "";
    if (myBoardString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/posts" + categoryString, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

};