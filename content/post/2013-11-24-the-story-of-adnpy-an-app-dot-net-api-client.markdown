---
layout: post
title: "The Story of ADNpy: An App.net API Client"
date: 2013-11-24 08:32:22 -0700
comments: true
categories: ['python', 'API', 'app.net'] 
---

This is the story of [ADNpy](https://github.com/appdotnet/adnpy). A python App.net API client. From the earliest days of the App.net API I wanted to build a client. In the beginning though the approaches were infinite. For as many times as I started an API client, I stopped because I couldn't figure out how to start.

The fact is though, we are an API company and that meant we had to consume it. We didn't have the luxury of thinking about our options we just had to start building. Time went on though and in a series of small steps we created a python API client. So, a couple months ago I started taking our pieces and built a client library.

## The Parts

In July 2012, we started to work on the API. We decide the best way to showcase the it was to build a client. Thus Alpha, from day one, was going to be an API consumer, but what did that mean for us though?

For one thing we run on Django all be it with many pieces replaced. Our common data access pattern was to make a query to the database using Django's ORM and to then operate on the models. That method was going to turn into making REST API calls and getting back JSON objects.

This made the first part pretty clear. For the sake of letting old code work roughly the same as the new we wanted to use dot notation to access the properties of our API objects instead of using dict notation. This has the added benefit of being more aesthetically pleasing. The way we ultimately solved this had the added benefit of being able to fallback to to dictionary lookups instead of using hasattr, or getattr (even though they still work as expected).

You can see this piece in [adnpy.models](https://github.com/appdotnet/ADNpy/blob/master/adnpy/models.py).

Our first internal API consumer was Alpha, but it wasn't comprehensive, Alpha doesn't do everything the API can do. As we developed the API we all ended up building ways to make calls to the API for testing purposes. Besides needing to use the a dev, sandbox, and production version of the API for work, I build a lot of little test projects.

In my case, I built a script that modified a [requests session](http://www.python-requests.org/en/latest/user/advanced/) that would make calls to the API that looked like this, `r.get('/posts')`. This is prefect for someone who has a good understanding of the API and all its paths, but not so much for a new comer. I needed to add a way to go from a class method, to a path plus additional configuration information. You can see the descedant of that code in the [API handler](https://github.com/appdotnet/ADNpy/blob/master/adnpy/api.py).

## The Build

After many months of frustration that I couldn't have the best features of our internal API client in an easily installable python package. I decided to pull it all together in one python package and release it.

My goal was to build a python package in the most modern way possible with tests and nice-to-use API.

Seeing as that I use [requests](https://github.com/kennethreitz/requests) I heavily copied Kenneth Reitz style of python package. His [guide](http://docs.python-guide.org/en/latest/writing/structure/) to releasing python projects has also been incredibly helpful.

Considering python API's, I have always enjoyed using tweepy when I need to interact with the Twitter API, so I was very influenced by how the tweepy API worked. I liked that you could get a User object, and you could then call methods on that User object. Another great idea in tweepy was the cursor object. Even though I consume the API all the time I would rather not think about pagination when I don't have to. So, you can see that ADNpy also has a cursor.

I also took note of how tweepy built up its API internally. This allows one to encapsulate all the different configuration options required to make an API request. It also made possible the auto generation of doc strings so that there is at least some API docs, without needing to hand write each one. [You can see the docs here.](http://adnpy.readthedocs.org/en/latest/)

Finally came testing. I wanted something that I could run over and over again with out accidentally tripping the API rate limits. The best would be something that could replay API calls. Happily [that exists](https://github.com/davepeck/httreplay). This way as I made new API requests they would be recorded to a JSON file and replayed from the JSON file in the future. Using this tool I could run the whole test suite without needing to make actual API calls.

With this all in place I was able todo some TDD for the API. I'm not really a zealot when it comes to any paradigm, but in this case TDD was something that really helped.

## The Release

Once, I had the library and the tests it was time to release, but I still needed a few things. I wanted to have some docs with all the main API methods documented and a "quickstart" guide. I also needed to host the docs. Again borrowing ideas from requests I used [sphinx](http://sphinx-doc.org/) for the docs and I hosted them on [Read The Docs](http://readthedocs.org/).

Finally, I wanted there to be some kind of continuous integration. You may have seen some github projects that have these images saying the tests pass. That comes from an incredible open source resource called [Travis CI](http://travis-ci.org). It will do continuous integration for any public Github project, for free, and it's integrated into Github using webhooks.

There is a nice flow to all of these tools. I write code and test locally. I update the docs as needed. Then I commit to Github. Github will then ping travis and Read The Docs. Which in turn run the tests and rebuild the docs, so I don't have to do a thing.

From time to time, I just need to push a new version to [pypi](https://pypi.python.org/pypi).

## The Future

The test package I was using to do replay no longer works. I'll need to figure out how to fix that, until then running the tests often is problematic. I am hoping someone will fix it, but it may have to be something I do.

I am still not satisfied with how the docs have turned out, but its better then nothing. I at least didn't want people to have to look up the code all the time to figure out how to do things. I think I have achieved that. But, the docs could be a lot more helpful.

In the beginning, I am trying not to have to much of a schedule. I will continue to push point releases until I feel that we have a very strong v1 and then there might be a more stringent release schedule.

At the end of the day, this is just one part of a larger goal which is to make using the App.net API incredibly easy. Libraries like this one are only part of that effort, but I have found that building these kinds of projects expose the holes in our existing efforts to support developers. So, releasing new open source projects that help developers is something I will continue to do. It's only going to make App.net better.
