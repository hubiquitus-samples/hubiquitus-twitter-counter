hubiquitus-twitter-samples
==========================

These few samples shows what you can do with tweets and Hubiquitus ...


## Getting started

Install node.js and install dependencies

    cd *path*/hubiquitus-twitter-samples
    npm install

Edit twitConf.js and fill the Twitter api keys. To get those you need to create an app at https://apps.twitter.com/.

    var T = new Twit({
        consumer_key: "...",
        consumer_secret: "...",
        access_token: "...",
        access_token_secret: "..."
    });


## Sample 1 :
To launch, type :

    node sample1.js

When receiving a message, the *tweetProcessor* actor displays the tweet in log.

## Sample 2 :
*tweetProcessor* is now a channel. *tweetDisplayActor* and *tweetCounterActor* are two actors **subscribed** to the *tweetProcessor* channel. Thus, any message sent to *tweetProcessor* will be received by both actors.

*tweetCounterActor* counts tweets received and displays a counter.
    
## More infos
- [Hubiquitus-core](https://github.com/hubiquitus/hubiquitus-core)
- [Twit](https://github.com/ttezel/twit) : Twitter API Client for Node.js
- Infos on the *track* parameter [here](https://dev.twitter.com/docs/streaming-apis/parameters#track)
