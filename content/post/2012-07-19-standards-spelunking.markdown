---
layout: post
title: "Standards spelunking, App.net, and a change of heart"
date: 2012-07-19 21:56:22 -0700
comments: true
categories: app.net, atom, rss, activity streams, work, standards
---

I have been standards spelunking recently. <a href='http://en.wikipedia.org/wiki/Atom_(standard)'>ATOM</a>, [OStatus](http://ostatus.org/), [JSON XMPP](http://xmpp.org/extensions/xep-0295.html) (hint: that one is a joke), and [Activity Steams](http://activitystrea.ms/). All this exploration led me to a conclusion - standards are not the panacea I once thought. There is a lot to like about standards; hard work, thourough thought, and sometimes a success, but we can't blindly follow the standards off a cliff.

I have been [presented with an amazing opportunity](http://daltoncaldwell.com/an-audacious-proposal) to spend some time looking through all this prior art. Within minutes of learning what I would be working on for the next month my mind leapt to standards. I thought to my self we can do this the responsible way. Activity Streams was the clear frontrunner, being implemented and shipped in Google+. I have even been following its development out of an academic interest in such things. Mostly lurking on the public email list. I am sad to say though, here is where it all starts to fall apart.

I can remember when activity streams was an XML only initiative. If you look at what kind of Activity Steams Google+ shipped it's the JSON implementation. So, why isn't ActivtyStreams only XML? From the outside looking in it seems as if the problem they had was that the process took so long that the public eye shifted from XML to JSON. They needed to created a JSON version of the schema. It's laudable that they responded to market conditions, but JSON is not XML. To true XML nerds JSON is an abomination.

If you look back you can see that ActivityStreams has its start in the ATOM community. ATOM it's self originated out of the webs 2.0 holy war between RSS and civility. As far as I can tell the whole idea behind ATOM seems to be an attempt to civilize RSS. All they achieved was another mess, but that's not where we stop. One of ATOM's progeny is OStatus. Which you can think of as the container for ActivityStreams. ATOM its self is a container for OStatus...

Look, I can keep going here, but my point is that we already have one major problem with the current JSON version of ActivityStreams - it's steeped in XML history - and its a deal breaker. They literally fork lifted some XML ideas out of ATOM, and then ported them to JSON. What I don't understand is why no one thought to challenge the premise of building a realtime feed on top of ATOM, especially after the [writing was on the wall](https://groups.google.com/forum/?fromgroups#!topic/twitter-development-talk/aVncSX5NxUY). I don't even dislike ATOM either. I am a feed reading wonk to the nTH degree, but it just clearly isn't what realtime social feeds are. Twitter isn't, Facebook isn't. You can't just build the thing you wish existed, and not base it any reality.

If the WHATWG got anything right about standards, it got that you can't just keep piling bad ideas on top of one another. You can't create standards in an [Ivory Tower](http://en.wikipedia.org/wiki/Academic_elitism). You need to look at what the ecosystem is already doing. In this case they had two models they could have looked at - Twitter and Facebook - but chose not too. When web standards were confronted with creating what came after HTML4 they started with XHTML, which like ActivityStreams was an Ivory Tower method. It took the WHATWG breaking away from the W3C and creating HTML5 to wake everyone up. They had amazing buy in from the ecosystem because they paved the cow paths(section, header, name). They solved users real needs (localStorage).

Where I ended up was partially in a state of awe. After digging through this corpus of documents that had been created by some web giants, I realized that they weren't solving anyone's problems. There was no there, there.

So, here is the part that I hope lives on after this mad dash of a project. We chose to go in with [clear eyes, and full hearts](http://daltoncaldwell.com/oh-the-places-youll-go/) we [read](http://en.wikipedia.org/wiki/Atom_(standard)) [the](http://ostatus.org/) [specs](http://activitystrea.ms/), we [talked](http://twitter.com/blaine/status/224201745046306817) with some [really](https://twitter.com/ralphm) [smart](http://twitter.com/haxor/status/224183175570669568) people, we [paved](https://dev.twitter.com/docs/api) [some](https://stripe.com/docs) [cow](http://instagram.com/developer/) [paths](https://developers.facebook.com/), and in the end we created [something](https://github.com/appdotnet/api-spec) that I am really happy with.

Please, come and [help us](http://join.app.net).

PS: Github has created, bar none, one of the best collaborative code tools ever known to man. There is no reason it can't also do that for creating a useful convention for a whole community.