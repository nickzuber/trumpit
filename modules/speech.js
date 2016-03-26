
// Speech templates

const POS_HIGH = [
  'Fully support and back  <noun>.',
  'And I will tell you this, and I said it very strongly, years ago, I said — I love <noun>, I want to have the greatest <noun> that we’ve ever had, and we need it more now than ever.',
  'It\'s true. And I love <noun>. I love <noun>s, and I love many of these countries that rip us off too because we have leaders that are incompetent and don\'t know what they\'re doing.',
  'I have so many <noun>, I have them all over the place. I hire people, they do a <noun>. It costs me $3. $5 billion <noun>.',
  'Well, let me just say, once again.. that, having been in the trenches fighting for this, I believe strongly we have to guarantee <noun> for every American citizen. That much is absolute.',
  'Very, very pro-<noun>, nobody more pro-<noun>.',
  '<noun> is great because each generation before us did what needed to be done.',
  'I have a lot of - I have tremendous love for <noun>.',
  'And I has such a great handle on <noun>. I want competitive <noun>s.',
  ''
];

const POS_MED = [
  'If we don\'t have <noun>, we don\'t have strength, we don\'t have a country.',
  '<noun> can be wonderful if you have smart people, but we have people that are stupid.',
  'I\'m going to save <noun>. I\'m going to bring <noun> back from China.',
  'We like <noun>, <noun> is our friend.',
  'I mean, where were my oponents when I was supporting <noun> back in the day?',
  'We always like to talk about <noun>, and who wouldn\'t? It\'s good stuff.',
  'We need leaders that are protecting <noun>.',
  '<noun> is a beautiful thing in many respects.',
  ''
];

const POS_LOW = [
  'Listen folks, <noun> isn\'t great, but it isn\'t the worst.',
  'But honestly, should we really be worrying so much about <noun> when we have China breathing down our necks? Think people.',
  'I wouldn\'t say I support <noun>, but it\'s things like this that may raise a few eyebrows.',
  'I\'m real when it comes to this issue. <noun> isn\'t doing so hot right now, but what can we expect with our current president?',
  'It\'s easier to <noun>. It\'s harder to <noun>. I think we should do both.',
  'Many people have had a lot to say about <noun>.',
  'In this economy, we need <noun>, but we must consider how best to approach it.',
  'And a strong <noun> is what the entire world is begging for. Where has America gone is what many of our allies say around the world.'
];

const NEG_LOW = [
  'Let\'s be honest, nobody here really cares much for <noun>, but we have bigger issues to deal with. I mean just look at China.',
  'Remember this, our <noun>s will be paid for by Mexico. This I can tell you.',
  'I believe in <noun>, but I believe in efficient <noun>, not wasteful <noun>.',
  '<noun> has potential to not be bad, so we should work on that.',
  'I would like to take a hard look at every part of <noun> and really do the kind of analysis that would rebuild some confidence in people, because right now, how can we be expected to support <noun> as a country?'
  'Listen, we\'ve got lots of challenges with <noun>. But the answer can\'t just be wave a magic wand and say problem go away. You have to understand <noun>. You have to have real solutions.',
  'It will now allow them to become set permanent and in stone.',
  'I have a fundamental disagreement and I think most Americans do, that we shouldn\'t be allowing billions of dollars to go to <noun>.',
  'We don\'t have our right people negotiating, we have people that don\'t have a clue.'
];

const NEG_MED = [
  'There is a great deal of skepticism about <noun>. I’m aware of that. It comes from the right, from the left, from people on all sides of the political spectrum.',
  'I\'ve set forth very specific plans about how to get costs down, especially <noun>. We all know that is an issue.',
  'Based on every analysis that I can find about <noun>, the numbers don’t add up, and many people will actually be worse off than they are right now.',
  '<noun> is not what America is supposed to be about.',
  'Many people have been avoiding talking about <noun>, but not me. I\'m not afraid to oppose <noun>.',
  'You\'ve got to understand the nature of the <noun> we\'re facing and how you deal with them.',
  'I am not going to destroy the U.S. economy for a law that will do nothing for <noun>.',
  'What we should have done is made a much better <noun>. Cause that <noun> is a disaster.'
];

const NEG_HIGH = [
  'We need to cut the budget and stop any funding for <noun>. Terrible stuff.',
  'We are in tremendous debt, and I’d be lying if I said <noun>s didn\'t have something to do with it.',
  'We have to do something about <noun>, and it can be — and — and it can be replaced with something much better.',
  'When was the last time you saw a <noun> in Tokyo?',
  'We have a disaster called the big lie: <noun>.',
  'So then, I would repeal and replace the big lie, <noun>.',
  '<noun>? I have been against <noun> since day one.',
  'I do think this: It’s an unbelievable thing that they’ve done, it’s unbelievable lack of respect for <noun>.',
  'How stupid are our leaders? How stupid are these politicians to allow <noun> to happen? How stupid are they?',
  'But I will say, <noun> are absolutely killing our country.',
  'We will destroy ISIS, Mr. Putin, and <noun>, you better understand, you\'re either with us or you\'re against us.'
];

// OPEN WITH ONE
const OPENINGS = [
  'Listen here folks.',
  'Of course, <noun>. ',
  'Let\'s get right to the point.',
  '<noun> is an important topic of interest.',
  'I\'m glad we can talk about <noun> today.',
  '<noun>. What a topic.',
  '<noun>?'
];

// CLOSE WITH ONE
const CLOSINGS = [
  'So, basically, I would do various things very quickly and make <noun> great again',
  'But, to be honest <noun> is a thing that we cannot avoid any longer',
  'This is a good thing to be bringing to my attention',
  'And that’s what I intend to do about <noun>'
];

// RANDOMLY INTERSPERSED WITHIN SPEECH
const NONSENSE = [
  'I do think this: It’s an unbelievable thing that they’ve done, it’s unbelievable lack of respect for <noun>.',
  'Have you seen the polls by the way? Crazy stuff, I’m doing so well.',
  'Nobody can do that like me. Believe me. It will be done on time, on budget, way below cost, way below what anyone ever thought.',
  'I\'m doing that to say that that’s the kind of thinking our country needs. We need that thinking. Right now, we have the opposite thinking.',
  'I know the smartest <noun>s in the world. I know the good ones. I know the bad ones. I know the overrated ones.',
  'Jeb is so wrong. What a mess.',
  'Mitt Romney.'
];


// shuffle an array
// @ http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




// Speech generator

const Speech = function(topic, keywords, score){
  this.topic = topic;
  if(!keywords.length){
    this.keywords = [this.topic];
  }else{
    this.keywords = keywords;
  }
  this.score = score;
  this.speech = '';

  // generate speech
  this.generate();
}

Speech.prototype.generate = function(){
  var score = parseFloat(this.score, 10);
  console.log(score);
  if(1 >= score && score > 0.66){
    this.speechify(POS_HIGH);
  }

  else if(0.66 >= score && score > 0.33){
    this.speechify(POS_MED);
  }

  else if(0.33 >= score && score >= 0){
    this.speechify(POS_LOW);
  }

  else if(0 > score && score > -0.33){
    this.speechify(NEG_LOW);
  }

  else if(-0.33 >= score && score > -0.66){
    this.speechify(NEG_MED);
  }

  else if(-0.66 >= score && score >= -1){
    this.speechify(NEG_HIGH);
  }

  else{
    this.speechify(POS_LOW);
  }
}

Speech.prototype.speechify = function(arr){
  var array_size = arr.length;
  var keywords_size = this.keywords.length;

  // intro
  this.concat(
    OPENINGS[Math.floor(Math.random() * OPENINGS.length)],
    this.topic
  );

  var availableEntries = [];
  for(var i=0; i<array_size; ++i){
    availableEntries.push(i);
  };
  availableEntries = shuffle(availableEntries);

  //for(var i=0; i<Math.floor(array_size/2); ++i){
  while(availableEntries.length >= 2){

    // choose between topic or a keyword
    if(Math.random() < .5){
      console.log('keyword: ' + this.keywords[Math.floor(Math.random() * keywords_size)]);
      random_word = this.keywords[Math.floor(Math.random() * keywords_size)];
    }else{
      random_word = this.topic;
    }

    // choose between relevent sentence or nonsense
    if(Math.random() < .75){
      this.concat(
        arr[availableEntries.shift()],
        random_word
      );
    }else{
      this.concat(
        NONSENSE[Math.floor(Math.random() * NONSENSE.length)],
        random_word
      );
    }
  }

  // closing
  this.concat(
    CLOSINGS[Math.floor(Math.random() * CLOSINGS.length)],
    this.topic
  );

  this.speech

}

Speech.prototype.concat = function(str, noun){
  this.speech += ' ' + str.split('<noun>').join(noun);
}


module.exports = Speech;