var Twit = require('twit');
var twitConf = require('./twitConf.js').twitConf
var h = require('hubiquitus-core');

var twit = new Twit(twitConf);
var stream = twit.stream('statuses/filter', {
  track: 'justin bieber'
});

stream.on('tweet', function(tweet) {
  // Send to the 'tweetProcessor' actor
  h.send('Twitter', 'tweetProcessor', {
    userScreenName: tweet.user.screen_name,
    text: tweet.text
  });
});
