
// Node components
const React = require('react');

// URL constants
const INTERNAL_TWITTER_BASE_API_URL = '/processRequest';
const HAVEN_URL = 'https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?apikey='+'fb254cfc-efba-4502-acd4-9abb576f4f77';

// Material UI components
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');

// Create AJAX request to fetch response from server
function ajax(target, callback){
  var request;

  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open(
    "GET",
    target,
    true
  );

  request.onreadystatechange = function(){
    if(request.readyState == XMLHttpRequest.DONE){
      if(request.status == 200){
        callback(request.responseText);
      }
      else{
        throw new Error("Error @_handleClick: AJAX load failed, invalid status returned: " + request.status);
      }
    }
  };

  try{
    request.send();
  }
  catch(e){
    console.warn("Error @_handleClick: Connection refused.");
  }
}

// Module components
// .

// Construct React component
const app = React.createClass({

  _handleResponse: function(res){
    // Analyze sentiment of the tweets in a single request
    ajax(HAVEN_URL+'&text='+res, function(e){
      e = JSON.parse(e);
      console.log(e);
      document.querySelector('.responseArea').innerHTML = 'score of: ' + e.aggregate.score;
    });

  },

  _handleClick: function(){
    var q = document.querySelector('#q').value;
    document.querySelector('.responseArea').innerHTML = 'loading';

    // If no search query, abort
    if(!q.length) return;

    ajax(INTERNAL_TWITTER_BASE_API_URL+'?q='+q, function(e){
      this._handleResponse(e);
    }.bind(this));

  },

  render: function(){
    return(
      <div>
        <input id='q' type='text' />
        <input onClick={this._handleClick} type='button' value='Go' />
        <div className='responseArea'></div>
      </div>
    );
  }

});

module.exports = app;