---
layout: post
title: "Who do we code for?"
date: 2012-06-07 21:35:22 -0700
comments: true
categories: semicolons style frontend javascript css
---

[Bootstrap](http://twitter.github.com/bootstrap/) was at the center of the recent semicolon debate. If you haven't seen Bootstrap yet checkout our their [docs](http://twitter.github.com/bootstrap/). Clearly work went into this project and it's had great adoption. Many sites use Bootstrap as a framework. They had a problem though; strong opinions on semicolons. The debate raged, and still rages to this day. To me the debate brought up two interesting ideas should we be able to code however we see fit, and who are we coding for?

Automatic semicolon insertion(ASI) as a topic of debate isn't new to Javascript, it probably has a long history of people contributing to the topic. I say probably because as [Ben Ward](http://the-pastry-box-project.net/ben-ward/2012-may-30/) points out we aren't the best at documenting it's history:

> We’ve taken our knowledge for granted, passed it on with examples and well-meaning advice, but failed to establish our references. ... here we’ve failed as librarians. We knew the knowledge was out there, we trusted the knowledge, but when it was challenged no-one had a robust answer. In its place, dogmatic presumption undermines a lot of the effort around education and best practice, and the cooperative attitudes of our community.

While I agree that documentation is important, I don't think the biggest prolem with this debate is one of history or the documentating of that history, it's all about perspective. In an effort to help document I tried to reacll the first time I saw this debate. I came to this article written by [Isaac Schlueter](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding). Here's something he had to say:

> If you don’t understand how statements in JavaScript are terminated, then you just don’t know JavaScript very well, and shouldn’t write JavaScript programs professionally without supervision, and you definitely should not tell anyone else how to write their JavaScript programs.

I was reminded of this post because of it's similarity in tone to @fat's remarks regarding semicolons, near the beginning of the [bootstrap semicolon debate](https://github.com/twitter/bootstrap/issues/3057).

> i have learned to use them, that's why there isn't one present.

You can see these two developers echoing roughly the same idea. I code how I want, its valid, so get off my ass. If this was just two developers writing code for themselves, the debate could stop there but that just isn't the case. These two developers are leading voices in the JS community, stewards of the language, if you will. But if you create a project like Bootstrap for general use you have to ask the question, who are we coding for?

When you take a project that is built for a large audience, including a fair number of new developers, you can't just write code however you want. You have to ask the question. Are we writing code for ourselves, or for other people?

[Ben Alman](http://benalman.com/) made this [point](https://github.com/twitter/bootstrap/issues/3057#issuecomment-5139250), in the very thread that caused all this ruckus:

> The solution to a problem like this is very simple. Project maintainers need to consider who the target audience for their project is, and maintain their project in such a way as to properly set and meet the expectations of that target audience.

and

> Also, regarding the setting of expectations, one of the most prominent headers on the Twitter Bootstrap homepage is *Designed for everyone, everywhere*.

His voice was a rare change of topic in the long, winding thread, and hasn't gotten it's due. In the case of Bootstrap it's clear that the creators don't understand the audience they are writing for. They may not even want to think of themselves as stewards of Javascript, but I don't think they have a choice anymore. The bottom line, if you are a steward of Javascript, you need to start thinking about your audience.

A great counterpoint to Bootstrap would be something like [Backbone.js](http://backbonejs.org/), or [Underscore.js](http://underscorejs.org/). When you frequent the bug lists of those project or read the source, you get a sense that someone is thinking about who is going to be reading this code. Granted not as many new developers, but still a great example of how you can create something beautiful that also helps the community.

