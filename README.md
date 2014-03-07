hubiquitus-twitter-counter
==========================

Simple interface to count tweets using Hubiquitus


# Start the bot

Install node.js and install dependencies

    cd *path*/hubiquitus-twitter-client
    npm install

Edit app.js and fill the Twitter api keys. To get those you need to create an app at https://apps.twitter.com/.

    var T = new Twit({
        consumer_key: "...",
        consumer_secret: "...",
        access_token: "...",
        access_token_secret: "..."
    });

Launch app with :

    node app.js
    
# Use the app

- Start the web page at http://localhost/twittercounter
- You can change the tracking word (more info on the *track* parameter [here](https://dev.twitter.com/docs/streaming-apis/parameters#track))
- Click the "Start counting !" button to reset the count
