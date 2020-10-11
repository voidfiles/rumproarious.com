---
layout: post
title: "Optimistic Server Interactions"
date: 2012-08-30 20:58:22 -0700
comments: true
categories: javascript ajax ux frontend
---

At PicPlz we built a hybrid mobile app. We had a native container written for iOS and Android that hosted a web version of our code. PicPlz was the first time I had worked on a fully mobile website. My operating paradigm was that I was building a website for a small screen.

One day, our iOS developer asked me why our follow button didn’t just react when a user touched it. He pointed out that most iOS apps work that way. It was a glaring reminder that our app was something other than native. I genuinely had never thought about doing it any other way. I was building a web app, and when building web apps there is network IO. For things to be consistent, you need to wait until the network IO has finished. The other engineer persisted though, claiming that it doesn’t have to work that way.

In order to make it feel more native I wrote the code so that the button would activate and change state immediately. If there was an error, which was infrequent, the button would flip back to inform the user. In the other 99.99% of the time the user would feel as if the interaction happened immediately.

Since implementing these interactions in PicPlz I have found out what they are called: Optimistic server interactions. While it is how things work in most mobile applications, it’s not how most things work in web applications. Why? Well, we all know exactly what’s going on when we make a request to a server – nothing is certain unless a response is received. When we see a spinner or a loading bar we understand, but does a user? Do they understand that your web page is making HTTP requests on their behalf, or are they about to click away from your website because it feels slow?

I am sure you might be worried that this approach feels strange from a user experience point of view. Yes, it’s weird, but how often will this happen? If your code is that fragile, then you might have a bigger problem.

Coding Style
There are times when optimistic server interactions are awkward to write. For example, building a chain of such interactions will result in highly indented callbacks.

Despite this, most cases shouldn’t be more complex than the following pseudo-code example:

```js
$('body').on('click', '.favorite', function() {
    var button = $(this);
    button.addClass('active');
    $.post('/follow', { 'favorite': true }).fail(function() {
        // flip favorite button to inactive
        button.removeClass('active');
        // inform user action failed.
    });
});
```

Another criticism is that if this happens too often, users will begin to question whether their actions are actually doing anything. This is a valid concern, but as I said earlier if your code really is failing this often then you probably have larger problems.

To be fair, I haven’t really tried this on any major piece of code. This is a trick I use mostly for small interactions like follow or favorite buttons. Web apps like Google Docs are clearly using this type of interaction all the time. Still, this technique is slowly working its way into larger interactions. If you do client-side rendering, then you’re 90% there. You can capture user input and update the interface immediately.
