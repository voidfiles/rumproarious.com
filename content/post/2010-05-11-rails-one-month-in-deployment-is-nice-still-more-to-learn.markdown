---
author: alex
date: 2010-05-11 21:04:38 -0700
layout: post
slug: rails-one-month-in-deployment-is-nice-still-more-to-learn
status: publish
title: Rails one month in; Deployment is nice; still more to learn
wordpress_id: '51'
---

Rails like I said is super magical, and so far building websites has
been an upfront, and forward kind of thing. Its nice to know that the
ideas I have been working on, models, views, templates. routes, tasks.
Are transferable from one framework to the next. I think there truly is
a web vernacular when it comes to building websites. This helps all of
use to have a common language.

If you just want to check out the code you can find it at github
[http://github.com/voidfiles/Watch-It-Latter](http://github.com/voidfiles/Watch-It-Latter),
while I am calling my web site [Wacchen](http://wacchen.com), I am going
to call the open source project Watch It Later. I am going to put a MIT,
or BSD style license on it.

So far, I have been developing on a cool stack.

I host at [Dreamhost](http://dreamhost.com), lots of people hate
Dreamhost, but to me its like I spend 7 bucks a month and I get what?,
thats awesome. I have always been a little disappointed that they don't
support things like django/python better, and now I know where all there
time has been spent; on ruby.

Using Dreamhost I am able to get up 70 request per second, while
maintain a sub-second page load time. Thats pretty good for Dreamhost.
When setting up Drupal on Dreamhost, it takes something like Boost, a
static page cache, to get anywhere near 70 rps

But, there are always differences, sometimes good, sometimes different,
and sometimes bad. I haven't run into anything that is bad, like makes
me shudder bad, but things are definitely different from Django

I am using [devise](http://github.com/plataformatec/devise) /
[warden](http://github.com/hassox/warden) for handling authentication.
Super useful, easy to customize to a point. There views generator is
broken I think, and I am not sure if rails, like Django allows you to
overide just the template portion of an addin.

For embedding the videos I use oembed, there are a couple oembed
libraries for ruby. Right now I am using
[ohembedr](http://benmcredmond.com/blog/2009/10/25/ohembedr-embedding-videos-and-images-with-oembed-in-ruby/),
but I think I am going to use something else in the end, what I really
want is someone to come along and just setup [embedly](http://embed.ly)
mappings in an existing library, so I won't have to, but I think in the
end I will probably have to do the leg work my self on this one.

# Routes

Routes aren't much different from Djangos url dispatcher, if anything
rails routes has more functionality. That is my problem though, I don't
feel like there is a consistent API for routes. I have the basics down,
but I am not sure I have more then that. Of course, this is a learn more
thing, but my understand of Djangos routes, has been almost the same
since I started using Django. They have a small api for urls, so it's
easy to get handle on all of its complexities quickly.

# Deployment, and Capistrano

Deployment is really easy on rails, its part of the magic I feel. I
especially like the idea, of having a public folder. Django, being a
much more libertarian framework kind of leaves that all up to you. I am
slightly torn on this one, its one more place for a newbie to screw up,
but its one more way that Django doesn't shepherd you into any specific
way of doing things.

I think this idea is missing from Django, because there was no plan in
the begging to ever server static files from the application server. The
Problem being that, that is exactly what a lot of newbies do, just to
get things working.

The ability to pull in all the dependencies into the source tree is
helpful. So far this has been like the inverse of django. Python has
lots of great libraries, but its not clear right off the bat how to use
things like virtual\_env, and pip to make your work flow easier.

[Capistrano](http://www.capify.org), for some reason getting it to work
with python not so easy. Tried Fabric. Disclaimer, tried this multiple
times before, I think each time it gets easier, this time may have just
been the breaking point where it all made sense.

# Working In Public

Still not entirely happy with the work flow of creating open source and
then deploying to a private server, just so many possible gotchas. There
has to be a better way then maintaining two completely independent
source trees maybe I could do it with branches. Have like a public
branch, and then a private release branch.

So far, I just manage this with gitignoreing files, that have sensitive
data in them, but then I need to create template files for the ones that
are missing in source tree.

I also had to add some extra hooks for deploying these private files,
using Capistrano because the files aren't where Capistrano expects them.
