---
layout: post
title: "Weekend App.net Hack Project"
date: 2012-08-10 22:04:22 -0700
comments: true
categories: Hack Project JavaScript CORS App.net
---

Yes, I work at [App.net](http://alpha.app.net/voidfiles), but I am also a hacker. I wanted to bring these two things together this weekend to build my first ever App.net API project.

In the spirit of the project its self. I am going to release early and often. I want make this thing as public as possible and I am going to try get it done by Sunday night.

Now I am going to the zoo, and park over the weekend to play with my kids, but all my spare time I think will be spent working on this first project.

## What am I going to build

The simplest possible useful thing. Something that is missing right now, but is coming soon - seriously soon - is the realtime portion of App.net. Part of that will include a realtime mentions feed. Right now I have a growl style system that notifies me when I get an email. Thanks to the [Chrome Notifications API](http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification) I am prompted every time I get an important email.  I want to replicated this for App.net, and mentions.

Basically whenever anyone mentions me on App.net I want to know about it.

## How am I going to do it

To me one of the most exciting parts of the API is that we support CORS. We do this right now. Among the many benefits of CORS, this means that I can write an entirely client side app and it can be a first class client of the API. So, CORS FTW. I am not sure exactly where I am going to host this yet, first I need to create the github repo.

__UPDATE__: its here [https://github.com/voidfiles/appdotnet-notifier](https://github.com/voidfiles/appdotnet-notifier)



