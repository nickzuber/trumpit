
const twitter = require('twitter');

var client = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});


// @TODO: this is dirty, clean it up
const ProcessTweets = function(q, callback){
  this.params = {
    q: q,
    result_type: 'mixed',
    count: 3
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
    var res = [];
    response.statuses.map(function(tweet){
      res.push(tweet.text);
    });
    this.callback(res);
  }.bind(this));
};

module.exports = ProcessTweets;