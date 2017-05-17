---
layout: post
title: "An App.net and Webscript.io example"
date: 2012-11-04 14:54:22 -0700
comments: true
categories: app.net webscript.io hack code example lua
---

[Webscript.io](https://www.webscript.io/) is like a programmable Yahoo Pipes. It allows you to run simple Lua scripts in a sandbox. They can make HTTP requests, store data in a simple key/value store, and they can load in lua modules from github. By giving you access to a real language and not a simulacrum of programing they open up a bunch of possibilities.

It's still early though. I keep running into pain points, but the guys running it have been very responsive to support request, and have already addressed some of my earlier problems. I signed up to be a paying member because I think this affords a lot of hackability, its kinda like drinkability.

One pain point I keep running into is that to import modules from Github you need to add a webhook to your Github project. Which makes sense from the perspective of  Webscript.io. It allows them to only update there local copy only when its updated on Github. At least I imagine that is how it works on there side. On the user side you must fork any module that looks cool, then add the webhook. After a few times of something like this:

1. Fork the project
1. Add the webhook
1. Click test webhook

I created a repo and now add modules as I find them to that one repo. You can use it too: [webscript-lua-modules](https://github.com/voidfiles/webscript-lua-modules)

Anyway, other then trying to import a [Markdown](https://github.com/jgm/lunamark) module(haven't got that to work yet) the first thing I have tried was to hookup App.net, and Webscript.io. Here is a simple authorization flow.

[https://gist.github.com/voidfiles/4014269#file-adn_webscript-lua](https://gist.github.com/voidfiles/4014269#file-adn_webscript-lua)

The next step would be to setup sessions of some kind. Another interesting bit of information is that Webscript.io is supporting CORS so you could build a very interesting client side only app using Webscript.io.

