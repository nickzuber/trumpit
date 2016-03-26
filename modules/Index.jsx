
// Node components
const React = require('react');

// Material UI components
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');

// Module components
// require(...)

// Construct React component
const app = React.createClass({

  _handleClick: function(){
    console.log('clicked!');
  },

  render: function(){
    return(
      <div onClick={this._handleClick}>
        hello world
      </div>
    );
  }

});

module.exports = app;