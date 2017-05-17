---
author: alex
date: 2011-02-09 23:42:16 -0700
layout: post
slug: goodbye-php
status: publish
title: Goodbye PHP
wordpress_id: '118'
categories:
- code
---

Last night it occurred to me, I might never use PHP in a serious manner
ever again. It’s bittersweet. No one is a bigger advocate for leaving
PHP behind then me, but it was where it all started for me. I had played
around with VB in grade school, but desktop programming never got to me
like web programming. PHP was ready for me, meaning the metaphorical
person who doesn’t know how to program but wants to learn. PHP has
things in it, that after you learn a little bit, shouldn’t exist, but
those are also the things that make it so easy for a beginner to get
shit done, and feel good about themselves. My favorite example is
something like `file_get_contents`
([more](http://php.net/manual/en/function.file-get-contents.php)). File
get contents sounds like it should just open a file, and then give you
the contents, and it can, but it can also open things across the
network.
    $homepage = file_get_contents('http://www.example.com/');

If you have been a programmer for a while, and have never seen this
feature, it might scare you a little. Like, there’s no check if the
stuff was returned successfully, or not. To a beginner though this is
such a wonderful piece of code. I learned how to use file*get*contents,
before I knew what an API was. I would then hack at HTML with `spliti`(
a case insensitive split, because there is also `split` which is case
sensitive), until I got the piece of data I needed. I think that better
tools will be created in the future. Things like
[YQL](http://developer.yahoo.com/yql/) are great places to start.
## Update:

In the comments someone asked what I would recommend instead of PHP on
the server side. To be clear the reason I suggested YQL is that I think
it can be a good intro to programming, a gateway drug if you will. PHP
was there as kind of a stepping stool to other languages. If you had to
pick a server side language I would say python, but I am not certain
it's awesome as a starter language.
