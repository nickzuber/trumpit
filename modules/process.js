
const twitter = require('twitter');
const RESULT_TYPE = 'mixed';
const MAX_COUNT = 50;
const LEGAL_CHAR_CODE = 256;
const captureLinks = /(http(?:s?)[A-Za-z1-9!@#$%^&\/*()_+:"<>?,.;']*)/gmi

var client = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});

function cleanString(string){
  var cleanedString = '';
  string.split('').map(function(character){
    if(character.charCodeAt() < LEGAL_CHAR_CODE &&
       character.charCodeAt() !== 35 &&
       character.charCodeAt() !== 13 &&
       character.charCodeAt() !== 10)
    {
      cleanedString += character;
    }
  });
  return cleanedString;
}

// @TODO: this is dirty, clean it up
const ProcessTweets = function(q, callback){
  this.params = {
    q: q,
    result_type: RESULT_TYPE,
    count: MAX_COUNT
  };
  this.callback = callback;
}

ProcessTweets.prototype.setParams = function(q){
  this.params.q = q;
}

ProcessTweets.prototype.getTweets = function() {
  client.get('search/tweets', this.params, function(error, response){
    if(error){
      throw new Error(error.message);
    }
    var res = '';
    response.statuses.map(function(tweet){
      res += cleanString(tweet.text);
    });
    this.callback(res.replace(captureLinks, '').replace('RT', ''));
  }.bind(this));
};

module.exports = ProcessTweets;