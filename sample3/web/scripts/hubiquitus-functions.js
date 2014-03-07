var Hubiquitus = window.hubiquitus.Hubiquitus;
var hubiquitus = new Hubiquitus({autoReconnect: true});

/* Hubiquitus connection parameters */
var server = window.location.hostname;
var endpoint = 'http://' + server + '/hubiquitus';

Hubiquitus.logger.enable('*','debug');

hubiquitus.on('message', function(req) {
    if (req.content.count) {
        $('#count').html(req.content.count);
    }
});

$('#resetButton').click(function() {
    hubiquitus.send('tweetCounterActor',  'reset');
    $('#count').html(0);
});

hubiquitus.connect(endpoint, {username:'twitcounterWeb'});