---
layout: post
title: "CORS is pretty awesome"
date: 2012-08-11 01:16:22 -0700
comments: true
categories: CORS JavaScript Project App.net
---

So, I just finished setting up the Authentication flow for a client side app. You can see the code up on [github](https://github.com/voidfiles/appdotnet-notifier).

The next step here is that I need to contact that API on behalf of the user. I want to just use JavaScript to contact the API, but the API clearly lives on another host then my project. In the past at this point I would need to write some kind of server component to proxy my requests to the API, but the future is here. I am going to use CORS.

[CORS](http://www.w3.org/TR/cors/) stands for cross origin resource sharing. Basically you can `$.post` across domains __boom__ did I just blow your mind.

## But what about the Same Origin Policy?

That is a good point, if sites could just `$.post` willy nilly it would be a problem, but the magic of CORS is that it allows for your browser to negotiate the nature of the connection to the remote origin.

So, the first step is that it when you try and use CORS to go cross domain your browser sends an OPTIONS request. The receiving server, if its set up correctly, can then respond with a magic header. That header tells to browser whether the requesting origin can have access to the remote origin, or not.

There are a couple other things that happen at this points as well. The remote origin can let the browser know what headers it will allow and what HTTP methods are acceptable.

So, at the end of the negotiation if the remote origin allows if the browser will then allow your site to make cross origin requests.

## CORS, and App.net

At App.net we also support the [client side](https://github.com/appdotnet/api-spec/blob/master/auth.md) [OAuth 2 flow](http://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.2). This means that you can setup a whole application that lives only on the client, and using CORS you can also make authenticated requests to our API on behalf of a user.

I am using CORS, and the client side auth flow on App.net you can see how I set it all up [here](https://github.com/voidfiles/appdotnet-notifier).

## It's not supported everywhere though

CORS is pretty awesome. And if you put your future-forward hat on it makes a lot of sense to start investing in the idea of CORS. Even right now there is really [good browser support](http://caniuse.com/#feat=cors) for CORS and it will only get better in the years to come. So, if you are starting now and you don't have to support legacy browsers, check it out.