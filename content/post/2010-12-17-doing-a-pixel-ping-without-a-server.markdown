---
author: alex
date: 2010-12-17 07:29:37 -0700
layout: post
slug: doing-a-pixel-ping-without-a-server
status: publish
title: Doing a Pixel Ping without a server
wordpress_id: '104'
---

Content is slippery stuff now days,
[everyone](http://www.google.com/support/news_pub/bin/answer.py?hl=en&answer=191283),
and your
[grandma](http://www.ap.org/pages/about/pressreleases/pr_101810a.html)
wants to know how to track it. Even more so now that content can meander
all over the internet.

There are some technical hurdles to this problem. First, a classic way
of keeping abreast of your stats is to use a [javascript
method](www.google.com/analytics/). This works well on the source so, or
on sites that you control the domain, but as content makes it's way into
the community. You can't bring JS with you.

For this reason some people have turned to using small unobtrusive
images, that allow them some insight into where there content is going.
A while ago a nice piece of [content
tracking](http://documentcloud.github.com/pixel-ping/) was
[released](http://www.propublica.org/nerds/item/pixel-ping-a-nodejs-stats-tracker),
by a [fledgling news org](http://www.documentcloud.org/home).

There solution is great, but you need to own a server, but there is
another way, and you don't need a server.
[Mixpanel](http://mixpanel.com/) is a new player, there whole company is
about tracking data. If you dig through there
[docs](http://mixpanel.com/api/docs/specification) you can find that
they offer this "pixel ping", as apart of there API.

If I wanted to do this for say, this article I would start by signing
up, and getting an account. Then you get a token. Mine is,
15de388dc6d39118b914db428a8975de, you will see what sharing this with
you isn't a bad thing in a moment. Our goal is to create a JSON string,
and the base64 encode it. What I want is to track a content-view. This
is incredibly inaccurate, but gives you some amount trackiness. Here is
my string.

    {
        "event": "content-view", 
        "properties": {
            "token": "15de388dc6d39118b914db428a8975de",
            "url": "http://alexkessinger.net/my-story"
        }
    }

In python I can create something like the above

    import base64
    import simplejson

    item = {
        'event':'content-view',
        'properties': {
            'token': '15de388dc6d39118b914db428a8975de',
            'url': 'http://alexkessinger.net/my-story'
    }

    data = base64.b64encode(simplejson.dumps(item))
    url = 'http://api.mixpanel.com/track/?data='
    url = url + data
    url = url + "&img=1"
    print url 
    >>> http://api.mixpanel.com/track/?data=eyJldmVudCI6ICJjb250ZW50LXZpZXciLCAicHJvcGVydGllcyI6IHsidXJsIjogImh0dHA6Ly9hbGV4a2Vzc2luZ2VyLm5ldC9teS1zdG9yeSIsICJ0b2tlbiI6ICIxNWRlMzg4ZGM2ZDM5MTE4YjkxNGRiNDI4YTg5NzVkZSJ9fQ==&img=1

Now I can take that url and embed it in an image tag

    <img src="http://..." width=1 height=1 > 

And if I embed that into this article I can know how many times it's
been viewed, although not necessarily read.

The other thing to keep in mind is that just because it looks like
gobbeldy gook doesn't mean it's secure. People just have to base64
decode to see the string, so it shouldn't be counted upon. While if
Mixpanel did want to get serious they could do some form of encrypting
with a private shared secret and make it harder to tell what data was
being sent.

![image](http://api.mixpanel.com/track/?data=eyJldmVudCI6ICJjb250ZW50LXZpZXciLCAicHJvcGVydGllcyI6IHsidXJsIjogImh0dHA6Ly9hbGV4a2Vzc2luZ2VyLm5ldC9teS1zdG9yeSIsICJ0b2tlbiI6ICIxNWRlMzg4ZGM2ZDM5MTE4YjkxNGRiNDI4YTg5NzVkZSJ9fQ==&img=1)
