---
layout: post
title: "Programs are meant to be read by humans, and only incidentally for computers to execute."
date: 2015-01-20 21:00:00 -0700
---
PPK is on a tear. He's having a conversation in public that I've been having for a few years. You really should read [these](http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html) [three](http://www.quirksmode.org/blog/archives/2015/01/angular_and_tem.html) [blog posts](http://www.quirksmode.org/blog/archives/2015/01/front_end_and_b.html) for context.

I appreciate the discussion and I hope that it continues, but the scope is sufficiently broad enough that I won't be able to go through it all point by point. Instead I would like to provide a framework for the disscussion, thats why I titled this blog post with a quote from Donald Knuth

> "Programs are meant to be read by humans, and only incidentally for computers to execute." - Donald Knuth

I want to use that idea as the framework for this debate.

How many times have you read documentation, then read the tests, and finally went to the code and found some clarity? I don't think this always happens, but the source of truth is always the code, and ultimatly our clarity comes from the code. I read that quote as a test:

Can a human read this code an reason about what it's doing?
Could a new person grok it quickly?
Would a person be able to use the code to build an application faster?
With code you are communicating ideas. If your idea is easier to understand, more powerful, or effective your code will be better.

So, when it comes to frontend(FE) programing I hear when PPK says that far too many backends try to just apply their ideas to FE. It often fall's flat, but I don't actually think the problem lyes with backends.

The thing that started this whole disscussion is Angular and it's problems. Looking at Angular, I don't see backend influence nearly as much as I see Application Developer and Mobile Phone Developer influence. But, I also don't want this to be a semantic debate, my main thought here is that our exisiting JS frameworks were built to make websites, they weren't built to make applications. Angular is an attempt to help people make better applications that just so happen to run in a browser.

Yes the ideas are foreign, but our ideas as FEs are just as foreign to an iOS developer. The question should not be are they familiar, but are they better for the task at hand? Will these ideas make it easier to reason about the code? Will it make us more productive? I can say, from experience, that Angular makes it easier to build applications, even with all of its foreign ideas.

Not everything is a nail, and not everything needs angular. If you are building a website that doesn't look like an application, you might not want to use angular, but if you are building an application, don't dismiss angular, ember, react or whatever is new today just because it is foreign.