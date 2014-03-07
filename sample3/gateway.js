var express = require("express");
var path = require("path");
var http = require("http");

var app = express();
app.use('/twittercounter', express["static"](path.resolve(__dirname, 'web')));
var httpServer = http.createServer(app);

var hGateway = require("hubiquitus-gateway");
var gateway = hGateway.createGateway();
gateway.start(httpServer, {
    port: 80
});