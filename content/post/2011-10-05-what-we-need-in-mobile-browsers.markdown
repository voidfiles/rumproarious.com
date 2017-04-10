---
author: alex
date: 2011-10-05 18:51:56 -0700
layout: post
slug: what-we-need-in-mobile-browsers
status: publish
title: What we need in mobile browsers
---
Let's say you are a company who is getting ready to develop a new mobile app. Clearly, You want your app to be on as many platforms as possible to get as large an audience as possible. You could spend time developing an app for each platform with little shared code, but this could create a very high burn rate for engineering resources. Especially if you feel that your app doesn't require anything that native platforms can do better then the web. Your left with a tough decision. It is possible to develop HTML5 Apps, but there is still a long way to go in the feature set. This situation is happening to app developers everyday. For HTML5 apps to lead the way, and not just to be competitive, there are a few things that developers will need from mobile browsers, and platform makers.

### More Hooks into the platform

An example of a hook that most major mobile browsers have right now is the [GeoLocation API](http://www.w3.org/TR/geolocation-API/). The GeoLocation API allows a HTML5 app to get the current latitude, and longitude of the user. There is a JavaScript API that your app can call which interacts with the device hardware to use the GPS unit. This is a hook into the platform. 

Platforms need more hooks. From taking pictures with the camera to registering content handlers. There are two standards here that will help if they can get adoption. the [Device API](http://www.w3.org/2009/dap/), a way to interact with things like the camera, and the [File API](http://www.w3.org/TR/FileAPI/), a way to interact with the devices filesystem.

###  Better Fullscreen support

Some platforms like iOS allow the user to save a HTML5 app to the home screen. If the app uses the correct meta data iOS will then open that app into a fullscreen chromeless browser. This allows app makers to completely control the look, and feel. This is important because often HTML5 apps change the current URL while navigating the app. In many browsers when apps do this they expose the URL bar. Even if the app has intentionally scrolled the URL bar out of the way. This can make an app feel glitchy. If platform makers allowed more control over the fullscreen experience. App developers could stop this glitchy behavior.

###  Better Data Storage

Right now if you want to store data in a web app. The most cross-browser way to do that is through the [LocalStorage API](http://www.w3.org/TR/webstorage/). It's great that most mobile browsers support the LocalStorage API. It's a good first step, but there are problems. It can suffer race conditions if the web app is open in two or more tabs. Each tab is able to interact with the same LocalStorage database, but right now there has been no attempt to handle this fact. You can end up with access collisions. 

Another problem is that It's max storage right now is 5MB. In every platform I have tested there is a hard 5MB limit. In some platforms there is an alternative storage API called [WebSQL API](http://www.w3.org/TR/webdatabase/). It allows you to steadily increase the amount of data you use. It prompts the user every so often to let them know your app is increasing it's storage. The problem with WebSQL is that it's a dying API. Android, and iOS support it, but the W3C has decided to forgo WebSQL and instead build a brand new API that will overcome some of the problems behind LocalStorage, and WebSQL. 

IndexedDB, yea that is an intentional double d, is the answer to the HTML5 app storage problem. It's meant to handle large amounts of data, and it will be thread safe. The problem is that is far off. It's only supported in some versions of Mozilla, and no one has any hard timelines for when IndexedDB will be coming to iOS, or Android.

###  Better Install Method

Depending on who you talk too this is the biggest barrier to entry. Right now, unless you have the power of someone like the Financial Times, or the Boston Globe, you will be hard pressed to get someone to install your app to the homescreen. Even on iOS, who actually has support for home screen installs, the process can befuddle even advanced users.

The other part is partly political. Who want's to circumvent there native app stores. Platform providers put a lot of time, and money in to creating a distribution platform, and the app stores are paying the way. Right now they are probably not going to make it any easier.