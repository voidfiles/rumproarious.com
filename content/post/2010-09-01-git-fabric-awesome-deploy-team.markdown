---
author: alex
date: 2010-09-01 08:08:30 -0700
layout: post
slug: git-fabric-awesome-deploy-team
status: publish
title: git + fabric = awesome deploy team
wordpress_id: '87'
---

I just rewrote my web site [Wacchen](http://wacchen.com) in python with
[Django](http://djangoproject.com). I converted it from a rails project.
It's easy to say something like rails sucks, but clearly people have
been very successful while using rails, so I am not going to say that. I
am going to say that I love Django, and the process of building my
project from the ground up in Django was fun. But, rails ain't all bad,
they do have a cousin called
[Capistrano](http://www.capify.org/index.php/Capistrano).

Capistrano isn't actively developed anymore, but it still kicks ass. It
helps you build a one line deployment script, which is really-really
important. For years, I would start to build a script like that, and
then at some point I was like, fuck it, I can do it later. What I didn't
realize was that I was throwing one of the best getting shit done tools
out of the window. Once you taste one line deploys, a lot of mental
blockage fades away, and you can iterate faster. I had never realize how
powerful the thought of trying to deploy was. It was actually stoping me
from want to hack. Now though, I converted to python land, and I needed
something like Capistrano. Django doesn't have as tight a relationship
with [Fabric](http://docs.fabfile.org/0.9.1/) as Rails does with
Capistrano, but it's been mentioned in more then one place.

-   [Fabric, Django, Git, Apache, mod\_wsgi, virtualenv and pip
    deployment](http://morethanseven.net/2009/07/27/fabric-django-git-apache-mod_wsgi-virtualenv-and-p.html)
-   [Deploying Django with
    Fabric](http://blog.thescoop.org/archives/2008/12/02/deploying-django-with-fabric/)

That is what I chose. I started with the above, and an assortment of
blogs posts, but fabric has changed a lot since many of these posts were
written. For instance, it's not config anymore it's env. Also you can't
use the fancy text replacer syntax any longer. This
`run('cd $(path); mv releases/current releases/_previous;')` now becomes
this run('cd %(path)s; mv releases/current releases/\_previous;' %
env)\`.

I am glad to say that it works, and it's been quite plesant. I have
learned a couple things along the way that I can share though.

## There is no package deal

Borrow, cheat, look around, but you aren't going to be able to use
someone elses script verbatim, deployment is personal. This was a huge
stumbling block for my self in the beginning, but like I said capistrano
was like crack, so I got myself over the hump.

## Use git

The ability to have git just dump a tar of your current directory is
super useful. Then all you need to do is take that tarball and `put` it
on the server. This was the extent of my putting.

This get's me using git too, which is a nice added bonus. I use git, but
I often forget at the very beginning to use it.

## Use your fabfile as a scratch pad

Because there is no cannon for fab files, and you can't just use someone
else's I found it best to create new deployment steps as I went. I would
ssh to the server, mess with the command until it was right, and then
immediately write it into my fabfile.

## Chunk it up

Don't try and write big fab targets, use lot's of little ones, that way
as your deployments get longer, you can start to target smaller portions
of the deployment. I have an app server, and celery server, and I didn't
want to deploy too both servers all the time.

Those are my quick notes for now. I also ended up using a lot of other
new tools like [gunicorn](http://gunicorn.org),
[nginx](http://gunicorn.org/deploy.html), [dreamhost
ps](http://dreamhostps.com),
[celery](http://ask.github.com/celery/getting-started/introduction.html),
and [rabbitMQ](http://www.rabbitmq.com/), all of which have their own
set of notes.
