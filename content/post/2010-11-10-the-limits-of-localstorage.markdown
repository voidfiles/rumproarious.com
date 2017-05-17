---
author: alex
date: 2010-11-10 17:22:31 -0700
layout: post
slug: the-limits-of-localstorage
status: publish
title: The limits of localStorage
wordpress_id: '100'
---

While building a [Google Reader](http://reader.google.com) client using
[jQuery Mobile](http://jquerymobile.com/), and
[Lawnchair](http://blog.westcoastlogic.com/lawnchair/) using just
[localStorage](https://developer.mozilla.org/en/dom/storage) became
problematic. No matter the browse they all had a hard 5MB cap, and it
wouldn't grow. 5MB is roughly equivalent to 1600 google reader articles
stored as JSON. At any given time a google reader client should be able
to store 20,000 to 50,000 stories.

Using localStorage for what some have called a local cookie, is probably
a good idea, but it is not meant as a general purpose database.

Right now the only other options for client side storage is
[WebSQL](http://dev.w3.org/html5/webdatabase/). WebSQL is on it's way
out, it's going to be replaced by
[IndexedDB](https://developer.mozilla.org/en/IndexedDB), but who knows
when. This has lead to limited support for WebSQL. This narrowed the
browsers on which the Google Reader client could run. Ultimately this
was going to be a test for PhoneGap, so mostly WebKit Browsers. The
iPhone, and Android, and Palm versions of webkit have WebSQL. Then there
is Blackberry, which has some form of Blackberry storage API for which
Lawnchair has an adapter for.

Using the WebSQL adaptor for lawnChair was an easy cut-over. There are
less storage limits when using WebSQL then when using localStorage.
Storing a months worth of unread articles was not a problem. On a side
note, dates in JS have always been lacking a great API. Though, there is
[Datejs](http://www.datejs.com/). It's old, and marketed as a fuzzy date
parser, but it has a wonderful API for picking dates. For example:

    var pastDate = Date.now().add(-7).days();

That is just subtracting 7 days worth of time from right now. You end up
with a javascript Date object.
