---
author: alex
date: 2010-09-06 06:39:21 -0700
layout: post
slug: storing-data-from-the-twitter-streaming-api-within-a-django-project
status: publish
title: Storing data from the Twitter streaming API within a django project
wordpress_id: '89'
---

For some reason I was afraid of the [Twitter Streaming
API](http://dev.twitter.com/pages/streaming_api), but it turns out the
streaming API is super simple. If you have ever wanted to implement a
twitter search bot, or just wanted to play around with a large amount of
twitter search data, or statuses the streaming API is the way to go.

The Streaming API is a little tricky, but ultimately easy. You are just
issuing a request to twitter, which doesn't close for a long time. Over
the length of the request Twitter will continue you pass data down the
pipeline.

This is a little tricky to understand at first, it's actually quite
counter to how a lot of programing is done. It's event/loop based,
versus sequential. If you are used to how things work in Javascript this
actually might come in handy.

As a matter of fact an environment like [NodeJS](http://nodejs.org/)
does a really great job at handling the streaming API. In less then 10
minutes I was able to understand how the streaming API works because of
[twitter-node](http://github.com/technoweenie/twitter-node). With code
like the following you get notified of every new status from group of
people. 

    var TwitterNode = require('twitter-node').TwitterNode, 
    sys = require('sys') 
    twit = new TwitterNode({ 
        user: 'username', 
        password: 'password', 
        follow: [8038312,40289924,68938254] 
    });
    twit.addListener(
        'tweet', 
        function(tweet) {
            sys.puts("@" + tweet.user.screen_name + ": " + tweet.text);
        }
    );

Once you run this code, and then wait for a while, you will start to see
tweets pop on the screen as they come down the pipeline.

I am really interested in using Node more, but I had already created a
project in [Django](http://djangoproject.com) and I wasn't interested in
writing SQL to talk to my mysql database to store all the new data I was
going to get from the Streaming API. This is a lossy version of what I
did, but it's close enough to give you a handle on whats going on.
[Tweepy](http://github.com/joshthecoder/tweepy) has support for the
streaming API, but they don't have the docs yet so I had to dig through
there code.

    from tweepy.streaming import StreamListener, Stream
    import simplejson
    from datetime import datetime
    import time
    import locale

    # Parses twitter dates stored in json # from twitter-python
    def parse_datetime(string):
        # Set locale for date parsing
        locale.setlocale(locale.LC_TIME, 'C')

        # We must parse datetime this way to work in python 2.4
        date = datetime(*(time.strptime(string, '%a %b %d %H:%M:%S +0000 %Y')[0:6]))

        # Reset locale back to the default setting
        locale.setlocale(locale.LC_TIME, '')
        return date


    # You need to subclass the StreamListener
    class MyStreamListener(StreamListener):
        """docstring for MyStreamListener"""

        def on_data(self, data):
            print "starting on data call"
            data = simplejson.loads(data)
            return True


        def on_timeout(self):
            print "we got a time out"

        def on_error(self, status_code):
            print "we got an error %s" % (status_code)
            return False

    mylisten = MyStreamListener()
    mystream = Stream("voidfiles","hacker",mylisten,timeout=30)
    mystream.filter(follow=[])

With something like that code I was able to save tweets that were from a
group of twitterers. Because it's python I was able use django's ORM to
store the tweets as they came.
