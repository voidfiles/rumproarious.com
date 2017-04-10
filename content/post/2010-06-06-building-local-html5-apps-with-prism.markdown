---
author: alex
date: 2010-06-06 08:46:18 -0700
layout: post
slug: building-local-html5-apps-with-prism
status: publish
title: Building Local HTML5 Apps With Prism
wordpress_id: '64'
---

[Prism](http://mozillalabs.com/prism/) is a great little single site
browser. It's not as feature complete as something like
[Fluid](http://fluidapp.com/), or
[NativeHost](http://cappuccino.org/discuss/2010/05/13/nativehost-run-your-cappuccino-applications-on-the-desktop/),
but it wins on cross-platform compatibility, and the ability to create
packages. That are distributable. Also for Macs, you can create self
contained .app's that you can just hand to someone and they can install
it.

I was faced with a problem though, I am all about [HTML5
Apps](http://alexkessinger.net/story/lets-go-html5-apps). In HTML5 App
space, I want people to be able to write server-less apps. For Prism to
work for this you need to be able to bundle your code with your app. For
the life of me, I could not find the docs on this.

If you get so far as to look at webapp.ini you will see something like
this

       [Parameters]
       id=some.nice.videos.to.watch@prism.app
       name=Some Nice Videos To Watch
       uri=http://somenicevideostowatch.com
       icon=webapp
       status=false
       location=false
       sidebar=false
       navigation=false
       trayicon=false

the uri is the important part. Just for example I have a file system
that looks like this.

       Resources
          webapp
             index.html
             webapp.ini
             base
                base.js

I want to boot up the index.html that is local I started by trying to
point to something like just path

    uri=index.html 

Nope

    uri=file://index.html

Nope

    uri=file:///Applications/Some\ Nice\ Videos\ To\ Watch.app/Contents/Resources/webapp/index.html

This works, but its not relative, this might work for every mac I
install on, but what about environments? I started seeing things with a
webapp:// protocol.

    uri=webapp://index.html

Nope, finally I just was looking at some [example
code](http://mozilla-labs-prism.googlegroups.com/web/webapp.advanced.js?gda=qd-nwkQAAAD06t5HV-10xwK6GpUE_laPnXkS5TpbNjNaLnYjfdO3KR1ufMLfNx5jBrCoU1Tkwn9V6u9SiETdg0Q2ffAyHU-dzc4BZkLnSFWX59nr5BxGqA),
and saw this thing resource:// being bandied about.

    uri=resource://webapp/index.html

This worked. I can even in my index.html point to relative files

    <script src="base/base.js" type="text/javascript" charset="utf-8"></script>

Booyah, so now if you want you can load in jquery, or whatever, and you
have a distributable webapp.
