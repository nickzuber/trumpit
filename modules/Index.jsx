
// Node components
const React = require('react');

// Constants
const INTERNAL_TWITTER_API_URL = '/processRequest';

// Material UI components
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');

// Module components
// .

// Construct React component
const app = React.createClass({

  _handleResponse: function(res){
    console.log(res);
  },

  _handleClick: function(){
    var q = document.querySelector('#q').value,
        cb = this._handleResponse,
        request;

    // Create AJAX request to fetch response from server
    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
    }else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", INTERNAL_TWITTER_API_URL+'?q='+q, true);

    request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE){
        if(request.status == 200){
          this._handleResponse(request.responseText);
        }
        else{
          throw new Error("Error @_handleClick: AJAX load failed, invalid status returned: " + request.status);
        }
      }
    }.bind(this);

    try{
      request.send();
    }
    catch(e){
      console.warn("Error @_handleClick: Connection refused.");
    }




  },

  render: function(){
    return(
      <div>
        <input id='q' type='text' />
        <input onClick={this._handleClick} type='button' value='Go' />
      </div>
    );
  }

});

module.exports = app;