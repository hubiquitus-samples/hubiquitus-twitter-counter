require('./tweetInjector.js');

var h = require('hubiquitus-core');
var logger = h.logger('hubiquitus:sample:twitterSample1');
h.logger.enable('hubiquitus:sample:twitterSample1', 'info');

h.addActor('tweetProcessor', function(req) {
  logger.info('Tweet by ' + req.content.userScreenName + ' : ' + req.content.text);
}).start();