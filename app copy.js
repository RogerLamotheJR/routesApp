
const express = require("express");
const app = express();
const port = process.env.port || 8080
const path = require("path");
const exphbs = require('express-handlebars');
const instruments = require("./routes");

// //Import body to parse JSON
// const parseRequest = require('./parseRequest');

const staticOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    maxAge: '1d',
    redirect: false,
};

app.use(express.static("public. options"));
app.set("view engine", "handlebars");

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));  


// //GET requests
// require("./routes/routes.js")(app);

// //POST requests
// require("./routes/apiRoute.js")(app)


app.set('view engine', 'hbs');


app.get("/", (req, res) => {
    res.send('index')
});

app.get("/post", (req, res) => {
    res.send('post')
});

app.get("/board", (req, res) => {
    res.render('board')
});

app.get("/myboard", (req, res) => {
    res.render('myBoard')
});


    app.listen(port, () => console.log(`Listen on port ${8080}`));


