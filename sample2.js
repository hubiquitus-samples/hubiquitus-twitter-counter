require('./tweetInjector.js');

var h = require('hubiquitus-core');
var hChannel = require('hubiquitus-channel');

var logger = h.logger('hubiquitus:sample:twitterSample2');
h.logger.enable('hubiquitus:*', 'info');
hChannel.createChannel('tweetProcessor');


h.addActor('tweetDisplayActor', function(req) {
  logger.info('Tweet by ' + req.content.userScreenName + ' : ' + req.content.text);
});
h.send('tweetDisplayActor', 'tweetProcessor#subscribe');

h.addActor('tweetCounterActor', function(req) {
  this.counter++;
  logger.info(this.counter + ' tweets');
}, {counter: 0});
h.send('tweetCounterActor', 'tweetProcessor#subscribe');

h.start();
