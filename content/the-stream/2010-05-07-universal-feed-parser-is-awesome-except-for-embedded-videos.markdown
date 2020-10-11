---
author: alex
date: 2010-05-07 22:39:43 -0700
layout: post
slug: universal-feed-parser-is-awesome-except-for-embedded-videos
status: publish
title: Universal Feed Parser is awesome, except for embedded videos.
wordpress_id: '49'
---

If you have never dealt with pythons awesome feedparser, [Universal Feed
Parser](http://www.feedparser.org), you should check it out. This bad
boy can take some of the crapiest, most mal-formed feeds atom, or rss,
and give you back manicured, well formed python objects. I have used the
project many times over, and am indebted.

There current security model is so tight that it removes all object, and
embed tags. This is very secure, and for most people probably a good
idea. But, while working on a recent project, I ran smack into this,
because I am processing feeds with videos in them, and the videos are
the most important part of the feeds. So, I needed to allow object, and
embed tags

I thought mayby I would have to maintain my own version of feedparser,
but that just had many problems written all over it. Then I remembered
that python, being the awesome language that it is, allows you to monkey
patch classes. It works because everything is an object, including
classes.

This is my quick tip feedparser tip if you need to extend feedparser to
include object, and embed tags

> *import feedparser*\
>  *feedparser.\_HTMLSanitizer.acceptable\_elements =
> feedparser.\_HTMLSanitizer.acceptable\_elements + \["object", "embed"\]*

Thats it now when you kick off a feed parser object it will whitelist
object, and embed tags
