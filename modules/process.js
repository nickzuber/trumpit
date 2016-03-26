
const twitter = require('twitter');

var params = {
  screen_name: 'nick_zuber'
}



var client = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});

client.get('search', params, function(error, tweets, response){
  if(error){
    throw new Error(error.message);
  }
  console.log(tweets); 
  console.log(response);
});
