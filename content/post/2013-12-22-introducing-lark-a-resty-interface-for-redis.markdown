---
layout: post
title: "Introducing Lark a RESTy interface for Redis"
date: 2013-12-22 10:21:22 -0700
comments: true
categories: ['redis', 'rest', 'api']
---

[Lark](https://github.com/voidfiles/lark) is a python library that provides a generic method for transforming a HTTP request into a redis command. If you know what [webdis](http://webd.is/) is then you'll roughly know what this is. It does a couple of things right now:

* It users REST as a guideline without getting to pedantic.
* It has built in support for per user key prefixs.
* It automatically JSON encodes redis values (where appropriate).
* It has lots of tests (and [TravisCI](https://travis-ci.org/voidfiles/lark) all setup).

I have been slowly amping up this project so that it could be my holiday project[^holidayproject], because I have a host of things I want to add quickly. Webdis has authentication right out of the box. Lark is setup for a scope based authentication scheme, but there is no examples of really how to do that. This is the next thing I am going to work on creating an authentication/authorization layer that people can use.

So, if you are interested checkout the [github page](https://github.com/voidfiles/lark) and fork it. Tell me how crazy I am, tell me where this thing just doesn't work at all like I say it does.


[^holidayproject]: for more on why holidays are a great time to work on projects checkout Macdrifters post [Seasonal Tasks](http://www.macdrifter.com/2013/12/seasonal-tasks.html) 
