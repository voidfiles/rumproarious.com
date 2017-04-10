---
author: alex
date: 2010-05-12 08:56:50 -0700
layout: post
slug: ruby-oembed-and-embedly-all-that-was-needed-was-a-little-love
status: publish
title: Ruby, oEmbed, and Embedly - all that was needed was a little love
wordpress_id: '52'
---

**Update 1/30/11: **They guys over at [emedly](http://embed.ly/) who
have done some awesome work in the last few months now ship
ruby-specific gems to help with oEmbed. Check it out
[https://rubygems.org/gems/embedly](https://rubygems.org/gems/embedly)
[Wacchen](http://wacchen.com), trys to figure out what the best way to
embed a users selected video into the web page is. Right now the best
way I have is [oembed](http://www.oembed.com/). oembed is a great,
simple standard for determing the best embed method for a give url. You
just ping the service provider, ie youtube.com, with a url, and it will
tell you the best way to embed the content from that url. There is alot
of good python libs, and there are a few ruby libs.
-   [oembed\_links](http://github.com/netshade/oembed_links) - based on
    the idea, that you will want to transform links inside text
-   [OhEmbedr](http://github.com/benofsky/ohembedr/)
-   [ruby-oembed](http://github.com/voidfiles/ruby-oembed)

I started out with [OhEmbedr](http://github.com/benofsky/ohembedr/), but
quickly I realized the downfall of all of the libs was that they had
relativly few built in supported service providers. Even the fallback
mechanism, [http://oohembed.com/](http://oohembed.com/), was running
into instance limits at google app engine. A couple weeks ago though, I
remembered seeing that
[django-oembed](http://github.com/embedly/django-oembed), had been
pumped full of new urls from [Embedly](http://embed.ly), a new sort of
meta oembed. Hoping they had done the same thing for ruby, I shot them
an email, but no dice, as [Sean Creeley](http://www.screeley.com/) said,
"we are a python shop", So, embedly didn't have was a good ruby
implementation, so I knew I had to do it my self. I forked a copy of
[ruby-oembed](http://github.com/voidfiles/ruby-oembed). And essentially,
I took an awesome [JSON file from
embedly](http://api.embed.ly/static/data/embedly_regex.json), that lists
a bunch of simple regular expression urls they support. I was able to
quickly load that file into ruby-oembed, and then I added some more
tests, while not good tests, but tests. So, even though
[Embedly](http://embed.ly) didn't have a ruby lib, everytime I had a
question Sean, was very quick with an email back. I am not entirely sure
why [Embedly](http://embed.ly) is so cool, they don't seem to do
anything right now other then help people embed stuff, and that is
awesome they do it really well, but they must have something super
secret under the hood. Now, [wacchen](http://wacchen.com), has support
for like 20+ videos providers out of the box. [Embedly](http://embed.ly)
was a huge help. Next up, figuring out how to embed videos, found not on
the original webpages. Like youtube videos, embedded in blog posts.
