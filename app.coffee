express = require "express"
Twit = require "twit"
http = require "http"
path = require "path"
h = require "hubiquitus-core"
hGateway = require "hubiquitus-gateway"
#h.logger.enable('*', 'trace');

app = express()

app.use('twittest', express.static(path.resolve(__dirname,'web')));
httpServer = http.createServer app
app.use (req, res, next) ->
  next()
gateway = hGateway.createGateway()
gateway.start httpServer,
  port: 80

T = new Twit(
  consumer_key: "..."
  consumer_secret: "..."
  access_token: "..."
  access_token_secret: "..."
)

console.log "Test Twitter"

stream = T.stream("statuses/filter",
  track: "justin bieber"
)

countTweets = 0
aa = 0
h.addActor "twittestBot", (req) ->
  switch req.content.type
    when "initTwit"
      stream.stop()
      stream = T.stream("statuses/filter",
        track: req.content.track
      )
      stream.on "tweet", (tweet) ->
        h.send "twittestbot", "twittestIHM", {type:"tweet"}

    else
h.start()