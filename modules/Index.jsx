
// Node components
const React = require('react');
const Speech = require('./speech');

// URL constants
const INTERNAL_TWITTER_BASE_API_URL = '/processRequest';
const HAVEN_API_KEY = 'fb254cfc-efba-4502-acd4-9abb576f4f77';
const HAVEN_SENTIMENT_URL = 'https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?apikey='+HAVEN_API_KEY;
const HAVEN_CONCEPTS_URL = 'https://api.havenondemand.com/1/api/sync/extractconcepts/v1?apikey='+HAVEN_API_KEY;


// Material UI components
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Progress = require('material-ui/lib/circular-progress');

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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function correctFormatting(text){
  var cleanString = '',
      temp;

  text.split('.').map(function(sentence){
    temp = sentence.trim();
    cleanString += capitalize(temp) + '. ';
  });

  return cleanString;
}

// Module components
// .

// Construct React component
const app = React.createClass({

  _reset: function(){
    document.querySelector('.app-banner').style.height = '100%';
    document.querySelector('.-retry').style.opacity = '0';
    document.querySelector('.speechArea').innerHTML = '';
    document.querySelector('.speechArea').style.opacity = '0';
  },

  _showSpeech: function(speech){
    document.querySelector('.progress-bar').style.width = '100%';
    document.querySelector('.progress-bar-wrapper').style.opacity = '0';
    document.querySelector('.app-banner').style.height = '0px';
    
    // show speech
    setTimeout(function(){
      document.querySelector('.speechArea').innerHTML = correctFormatting(speech);
      document.querySelector('.speechArea').style.opacity = '1';
      document.querySelector('.progress-bar').style.width = '0px';
      document.querySelector('.speech-text').value = '';
    }, 500);

    // reset prompt
    setTimeout(function(){
      document.querySelector('.-retry').style.opacity = '1';
    }, 1000);
  },

  _handleResponse: function(res){
    var that = this;
    // 'res' holds all tweet data

    // Analyze sentiment of the tweets in a single request
    ajax(HAVEN_SENTIMENT_URL+'&text='+res, function(score){
      score = JSON.parse(score);
      
      // @TEST
      document.querySelector('.progress-bar').style.width = (Math.floor(Math.random() * 70) + 50)+'%';

      ajax(HAVEN_CONCEPTS_URL+'&text='+res, function(keywords){
        keywords = JSON.parse(keywords);

        // sort ascending by occurence
        keywords.concepts.sort(function(a, b){ return (b.occurrences)-(a.occurrences); });

        var cleanedKeywords = [];

        keywords.concepts.map(function(word){
          console.log(word)
          if(word.concept.length <= 3) return;
          if(word.occurrences <= 1) return;
          cleanedKeywords.push(word.concept);
        });

        document.querySelector('.progress-bar').style.width = (Math.floor(Math.random() * 95) + 80)+'%';

        // Ready to generate speech
        var topic = document.querySelector('#q').value.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
        var SpeechObj = new Speech(topic, cleanedKeywords, score.aggregate.score);
        that._showSpeech(SpeechObj.speech);

      });

    });

  },

  _handleClick: function(){
    var q = document.querySelector('#q').value.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    // If no search query, abort
    if(!q.length) return;

    document.querySelector('.progress-bar-wrapper').style.opacity = '1';
    document.querySelector('.progress-bar').style.width = (Math.floor(Math.random() * 40) + 15)+'%';
    console.log(q);


    // easter eggs
    if(q.indexOf('zodiac') > -1){
      this._showSpeech('No comment');
      return;
    }
    else if(q.indexOf('benghazi') > -1){
      this._showSpeech('FATAL ERROR: ABORTING IMMINENTLY');
      return;
    }
    else if(q.indexOf('emails') > -1){
      this._showSpeech('Server has been wiped: no results found');
      return;
    }
    else if(q.indexOf('jeb') > -1){
      this._showSpeech('Please clap');
      return;
    }

    ajax(INTERNAL_TWITTER_BASE_API_URL+'?q='+q, function(e){
      this._handleResponse(e);
    }.bind(this));

  },

  render: function(){

    var genWords = ['Immigration', 'Abortion', 'Health Care', 'Fast and Furious', 'Who is the Zodiac Killer'];

    var suggestionWord = genWords[Math.floor(Math.random() * genWords.length)] + ', Etc.';

    return(
      <div>
        <div className="app-banner">
          <div className='vert-align'>
            <div className='logo-area'></div>
            <h1>TrumpIt</h1>
            <input className='speech-text' placeholder={suggestionWord} autoComplete='off' id='q' type='text' />
            <input className='speech-button' type='button' onClick={this._handleClick} value='Generate Speech!' />
            <div className='progress-bar-wrapper'><div className='progress-bar'></div></div>
          </div>
        </div>
        
        <div className='vert-align -under'>
          <div className='speechArea'></div>
          <input className='speech-button -retry' type='button' onClick={this._reset} value='Try Another?' />
        </div>
      </div>
    );
  }

});

module.exports = app;