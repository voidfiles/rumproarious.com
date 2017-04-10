---
author: alex
date: 2010-10-04 16:40:17 -0700
layout: post
slug: targeting-high-res-displays-and-using-css-sprites
status: publish
title: Targeting high-res displays, and using css sprites.
wordpress_id: '95'
---

Targeting high-res displays, and using css sprites.

On the next version of the [picplz](http://picplz.com) mobile site we
wanted to start targeting iPhone 4 with high-res images, while at the
same time keeping the lower resolution images for iPhone < 4. Of course
this was going to be a problem for media queries. Using
`@media screen and (-webkit-device-pixel-ratio: 2) {}` you can target
any device that is pixel-doubled. As phones a varying pixel density
enter the market we can figure out how to target each pixel density
specifically.

When you target a higher density screen with background images, you are
just slamming in twice the pixels into the same area. This way the
raster image doesn't look grainy. The rest of UI is built at higher
resolutions already, and things like fonts, and other graphical elements
are just rendered in higher resolution. This is why using something like
SVG for background images will be super useful in the future.

Everything worked well until we tried to put in a CSS sprite. I new I
would have to tell the browser that while we are giving you this big
image, we only want you to treat it like an image of a smaller size. So
we use the background-size property to try something like this. .button
{ background-image: url(/low-res.png) 0 -15px; width: 15px; height:
15px; }

    @media screen and (-webkit-device-pixel-ratio: 2) {
        .button {
            background-image: url(/high-res.png) 0 -30px;
            background-size: 15px 15px;
            -webkit-background-size: 15px 15px;
            -moz-background-size: 15px 15px;
        }
    }

It seemed logical. The css was telling the browser to use the same size
background-image as above, but our image was completely disappearing.
Quick side note: where the hell is a firebug, or webkit inspector for
the iPhone. Finally, I realized something, that made me feel a little
sheepish; background-size isn't how big your slice of the background
should be, you are essentially saying how big the entire
background-image should be, and then your width, and height are the
window. In the CSS above the background-size property was saying that
the entire css sprite was 15px x 15px size, and then we were shifting it
15px up, so it was disappearing.

Once that all fell into place I also figured out that you can statically
set one axis and scale the other axis. The other benefit, is the the
position math stays the same. All you need to do is replace your image,
and redefine the background-image size. Here is the new pseudo-css.

    .button {
        background-image: url(/low-res.png) 0 -15px
        width: 15px;
        height: 15px;
    }

    @media screen and (-webkit-device-pixel-ratio: 2) {
        .button {
            background-image: url(//high-res.png);
            background-size: 15px 15px;
            -webkit-background-size: 15px 15px;
            -moz-background-size: 15px 15px;
        }
    }

Now, the next step I think is figuring out how to use SVGs and falling
back to PNGs where not supported.

You can checkout the picplz app on [iPhone](http://picplz.com/iphone/),
or [Android](http://picplz.com/android/).
