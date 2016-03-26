/*
 *  Routing Configuration File
 *
 *  Here is where the routes to page files in
 *  the app are declared and defined. React apps
 *  are instantiated here and positioned into their 
 *  respective route. The React app is rendered down
 *  and piped into an .ejs page to be outputted.
 */

// Get dependencies 
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Modules
const ProcessTweets = require('../modules/process');




module.exports = function(app){


  //Default Index page
  app.get('/', function(req, res){
    var user_ip = req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
    var Index = React.createFactory(require('../modules/Index.jsx'));
    var renderedApp = ReactDOMServer.renderToString(Index({}));

    res.render('index', {
      reactOutput: renderedApp,
      view: "home"
    });

  });

  app.get('/processRequest?', function(req, res){
    // return twitter json

    var searchTerm = req.query.q;

    var pt = new ProcessTweets(searchTerm, function(response){
      res.send(response);
    });
    pt.getTweets();
  });

  // 404
  app.get('*', function(req, res){
    var user_ip = req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
    var Error = React.createFactory(require('../modules/Error.jsx'));
    var renderedApp = ReactDOMServer.renderToString(Error({}));

    res.render('error', {
      reactOutput: renderedApp,
      view: "error"
    });
  });

}