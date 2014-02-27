var express = require("express");
var Twit = require("twit");
var http = require("http");
var path = require("path");
var h = require("hubiquitus-core");
var hGateway = require("hubiquitus-gateway");

var app = express();
var countTweets = 0;

app.use('/twittercounter', express["static"](path.resolve(__dirname, 'web')));
var httpServer = http.createServer(app);

app.use(function(req, res, next) {
    return next();
});

var gateway = hGateway.createGateway();
gateway.start(httpServer, {
    port: 80
});

var T = new Twit({
    consumer_key: "dqGDtCAXOmnQvwXwm8g",
    consumer_secret: "SeYAk5GCFyTK5IonXxMRJsNvHfJQAQPkIKHNdVQXw",
    access_token: "1175951557-dcrneobSyt2YbnMpdOWpfLeUwz20qV8yoVYogHy",
    access_token_secret: "UNAaQJvUWBZ2qb9RkaKCJwCc24hvAzLGmiypZqdgb78"
});

console.log("=====================================");
console.log("Hubiquitus Twitter counter is running");
console.log("Start the web page now at http://localhost/twittercounter");

var stream = T.stream("statuses/filter", {
    track: "justin bieber"
});

h.addActor("twitcounterBot", function(req) {
    switch (req.content.type) {
        case "initTwit":
            stream.stop();
            stream = T.stream("statuses/filter", {
                track: req.content.track
            });
            return stream.on("tweet", function(tweet) {
                return h.send("twittestbot", "twitcounterWeb", {
                    type: "tweet"
                });
            });
    }
}).start();
