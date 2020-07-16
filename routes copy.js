
const express = require("express");
const routes = express.Router();

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


    routes.get("/", function(req,res){
        res.render('./views/layouts/index.handlebars')
    });
    routes.get("/post", function(req,res){
        res.render('./views/layouts/post.handlebars')
    })
    routes.get("/board",function(req,res){
        res.render('./views/layouts/board.handlebars')
    });
    app.get("/myboard", (req, res) => {
        res.render('./views/layouts/myboard.handlebars')
    })

};






