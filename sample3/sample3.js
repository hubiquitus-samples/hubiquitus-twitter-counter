require('../tweetInjector.js');
require('./gateway.js');
var h = require('hubiquitus-core');
var hChannel = require('hubiquitus-channel');

var logger = h.logger('hubiquitus:sample:twitterSample3');
h.logger.enable('hubiquitus:sample:twitterSample3', 'info');
hChannel.createChannel('tweetProcessor');


h.addActor('tweetDisplayActor', function(req) {
  logger.info('Tweet by ' + req.content.userScreenName + ' : ' + req.content.text);
});
h.send('tweetDisplayActor', 'tweetProcessor#subscribe');

h.addActor('tweetCounterActor', function(req) {
  switch(req.content) {
      case 'reset' :
          logger.info('Reset counter');
          this.counter = 0;
          break;
      default :
          this.counter++;
          this.send('twitcounterWeb', {count: this.counter});
  }
}, {counter: 0});

h.send('tweetCounterActor', 'tweetProcessor#subscribe');
h.start();