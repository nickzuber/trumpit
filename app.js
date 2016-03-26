
const express = require('express');
const path = require('path');

const _port = 8080;

const app = express();

// Initialize .jsx Transformer
require('node-jsx').install();

// Initialize injectTagEvent for material-ui
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Collect The Routes
const routes = require('./routes/core-routes.js');

// Configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Allow Access To File Directory
app.use(express.static(path.join(__dirname, 'www')))

// Fixes Material-UI related warning where server side rendered data did not match
// the client side data
app.use(function(req, res, next) {
    GLOBAL.navigator = {
        userAgent: req.headers['user-agent']
    }
    next();
});

// Set Up Routes
routes(app);

// Create Server
app.listen(_port, function(){
    console.log('Ready on port ' + _port + '...');
});