---
author: alex
date: 2010-10-02 18:57:06 -0700
layout: post
slug: css-preprocessors-like-less-and-sass-can-be-inefficient-but-have-some-hidden-gems
status: publish
title: CSS preprocessors like LESS, and SASS can be inefficient, but have some hidden
  gems
wordpress_id: '94'
---

I never regret learning new tools, but after exploring a new tool
sometimes I ask what's so special. I recently had the opportunity to
start learning about [LESS](http://lesscss.org/),
[SASS](http://sass-lang.com/) is kind of the same deal. Whenever a group
of smart people say check this out, I put it on my to checkout list. I
dove in. At the end of a couple of weeks checking it out I think that
SASS, and LESS are of questionable value to any person working with CSS.
At first it just made me feel uneasy like other weird abstraction's such
as [Objective-J](http://cappuccino.org/), and
[CoffeeScript](http://jashkenas.github.com/coffee-script/), but now I
have some concrete reasons.Those reasons aren't the end of LESS, and
there are some reasonable ways to use them, but there are some easy ways
to be incredibly inefficient. Past what they represent now, I think
SASS, and LESS represent the future of CSS, and once we get some of
these ideas into an actual CSS spec they will be incredibly useful.

In all cases I think they seem to a person who does not know the base
tech very well to be a boon to productivity, and they probably are, but
it comes at a cost. I realize that I am about the give the get off my
lawn speech, so if you want someone to pat you on the back you should
probably go some place else. Besides being crotchety, I never thought I
would use the leaky abstraction argument, but now I can see how
powerful, and misunderstood it is. Yes, it's true that all abstractions
are leaky, but it's also true that some abstractions are more leaky then
other.

I have some words for SASS, and LESS, but not all CSS helpers are bad.
CSS Frameworks like [Blueprint](http://www.blueprintcss.org/),
[OOCSS](http://github.com/stubbornella/oocss/wiki),
[960gs](http://960.gs/) are great building blocks. Sure, they have their
problems, but they don't leak nearly as much as SASS, and LESS. Even if
you don't use a "CSS Framework" per-se almost all FE developers have
some set of CSS they start with. The key to why they are helpful is due
to fact that they embrace the underlying tech, instead of trying to
squeeze the underlying to tech into some other shape. For a long time I
stayed away from both SASS, and LESS. I have not worked with SASS, but
after I compared it with LESS, I realized they were making some of the
same basic mistakes. At the company where I work now they have been
using LESS, and so I embraced it. As I started to tackle new projects I
tried to figure out how to make the most out of LESS , but I was
consistently confronted with "uhg" moments. Every new feature just
failed in some other way.

There were a number of small gotchas, and one big one. If you use
something like less.js to help ease the process of development, you end
up with a bunch of inline-style code. The code it generates is fine, but
there was no way to connect a style rule back to a file. This can be
frustrating when you have conflicting styles, and you want to find out
where offending class lives. The second small problems is that it
creates a way for you to have functions, but then it doesn't give you an
efficient manner to split those functions into a library.

The biggest problem with LESS, and SASS is that the mixin tool allows
you to easily write incredibly inefficient code. They allow you to
include css will-nilly, and in almost all cases you could have just
encapsulated that code in another class. Then using the Cascade in CSS,
applied multiple styles to the same markup thus "mixing" the code
together.

There is a way to use LESS in an efficient way. For example, If you want
to use some of these new fangled CSS techniques like box-shadow, or
border-radius you will need to use many browser specific prefixes. Often
it will be a -moz, or a -webkit, but other browsers have there own
special tags. You end up writing basically the same style rule over, and
over again. Now, if you were using a mixin to accomplish this, you would
be including 3 to 4 extra CSS properties wherever you included the
mixin.

But, there is a way to harness the flexibility of LESS, and combine it
with the cascading part of CSS to produce the smallest possible set of
properties and still achieve a mixin like effect.

Let's say I have have some markup like this.

    <p class="blue">Blue rounded corner</p>
    <p class="orange">Orange Rounded Corners</p>
    <p class="green">Green Rounded Corners</p>

It's easy to end up writing CSS like this, using LESS, that feel's
concise.

    .rounded_corners(@radius: 5px){
      border-radius:@radius;
      -moz-border-radius:@radius;
      -webkit-border-radius:@radius;
    }

    .blue {
       background-color: blue;
       .rounded_corner(5px);
    }

    .green {
       background-color: green;
       .rounded_corner(5px);
    }

    .orange {
       background-color: orange;
       .rounded_corner(5px);
    }

That feel's nice right, seems compact, but if you see the rendered CSS
it's a different story.

    .blue {
       background-color: blue;
       border-radius:5px;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
    }

    .green {
       background-color: green;
       border-radius:5px;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
    }

    .orange {
       background-color: orange;
       border-radius:5px;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
    }

Now it doesn't looks so good. But you can do something, that uses
mixins, which is nice because as the browser specific css prefixes fall
out of mainstream you only have to edit one section of code. We can
change our css to be something like this.

    .rounded_corners(@radius: 5px){
      border-radius:@radius;
      -moz-border-radius:@radius;
      -webkit-border-radius:@radius;
    }

    .rounded-cornders-5 {
        .rounded_corner(5px);
    }

    .rounded-cornders-10 {
        .rounded_corner(10px);
    }

    .blue {
       background-color: blue;
    }

    .green {
       background-color: green;
    }

    .orange {
       background-color: orange;
    }

And you could change your markup to be like this.

    <p class="blue rounded-cornders-5">Blue rounded corner</p>
    <p class="orange rounded-cornders-5">Orange Rounded Corners</p>
    <p class="green rounded-cornders-10">Green Rounded Corners</p>

In using LESS like this there is some benefit to using a CSS
pre-processor. The mixin is an interesting idea, even outside of this
css-preprocessor world. If only it could be apart of the [css
spec](http://www.stubbornella.org/content/2009/11/09/css-wish-list/).
That is exactly what [Nicole Sullivan](http://www.stubbornella.org) is
proposing. By getting SASS, and LESS to implement the idea of a mixin,
people can see how a useful mental abstraction it can be, but in its
current form it's inefficient, but think about mixin if it was processed
by the client. That way you could define the mixin once, and then on the
client the mixin will be mixed. That way you aren't sending excess code
over the wire. Hopefully someone at the CSS working group gets started
on this.

Getting to know LESS was interesting, and I am glad that I found
something useful out of it. Makes me think that in all these
abstractions that make me slightly uneasy I might unearth a gem or two,
but I wish these ideas could percolate a little faster into standards.
