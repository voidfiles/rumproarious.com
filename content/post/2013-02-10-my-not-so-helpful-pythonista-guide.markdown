---
layout: post
title: "My Not So Helpful Getting Started With Pythonista Guide"
date: 2013-02-10 23:06:22 -0700
comments: true
categories: python pythonista
---

Pythonista has been popping up recently in my stream, **cough** [Federico Viticci](https://alpha.app.net/viticci) on  [App.net](https://alpha.app.net/voidfiles) **cough**. So much so, I had to take a look. I also had a petty annoyance that I figured Pythonista could help me fix. There are probably better introductions, but this how I got up to speed.

My goal was the take feedburner links, you know the kind you would find in an RSS reader, and unwrap them into their real URLs. Feedburner also adds some query string cruft, so that had to go as well. In the end you would have a URL worthy of posting on your social network of choice. All of this could happen with out going over to your big boy computer.

After downloading Pythonista I stalled. Getting random bits of text to your phone is still a little tricky. This is the hardest part of Pythonista, at least in the first 5 minutes, getting code onto the phone in a sane way. Luckily, someone has gone down this path before me and I can just follow in their steps.

After installing, the first step is to use this [gist](https://gist.github.com/4702275). Copy, and paste this into a script called `gistcheck`. Then run the code. It will set up more scripts for you to use. [^1]

Now you'll have a couple of new scripts from which you can create actions. Goto settings find the "Actions Menu", scroll to the bottom and you will see your new scripts. Add them.

The next thing you need to do is setup the bookmarklet mentioned in the gistcheck [^2]. This will allow you to open a gist in mobile safari and save it to your scripts in pythonista.

From here you can create a gist with the code for any script you want. Then you can use the bookmarklet to get it into pythonista. From that point forward you can use Gist Pull action to update your script. On your dev box you can clone the gist, and push updates to github.

To solve my specific problem I developed this [gist](https://gist.github.com/voidfiles/4751549). Any text that is on your clipboard that has text surrounded by \*\*[text]\*\* will be replaced with a URL that has been unwrapped, and URL decrufted.


[^1]: I found it on the [pythonista forums](http://omz-software.com/pythonista/forums/discussion/5/sharing-code-on-github/p1).
[^2]: Which is an insane process on Mobile Safari. Pocket has some good [instructions](http://help.getpocket.com/customer/portal/articles/491013-installing-the-pocket-bookmarklet-on-iphone) for installing their bookmarklet, just use this one instead of theirs.


