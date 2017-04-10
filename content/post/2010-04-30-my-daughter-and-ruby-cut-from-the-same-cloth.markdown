---
author: alex
date: 2010-04-30 01:32:08 -0700
layout: post
slug: my-daughter-and-ruby-cut-from-the-same-cloth
status: publish
title: My daughter, and ruby; Cut from the same cloth.
wordpress_id: '47'
---

Ruby is curious, playful, and eccentric. These are all adjectives I
would use to describe my daughter. In general I get a real sense of
discovery while learning to use ruby. Things like its for loop

    @names.each do |name|
        puts "Hello #{name}!"
    end

I just haven't seen a for loop like this before. Its cool.

Then other things like checking for things with a question mark

    if @names.nil?
        puts "..."
    elsif @names.respond_to?("join")
        ...
    end

I am not kidding, when I saw that question mark syntax, the first
thought in my head was how my daughter asks questions.

The other day, my wife went to the doctors. When my daughter woke from
her nap, she wanted to know where her mom was. I told her she was at the
doctors. She looked at me, leaned her head forward, and said "Mommy,
Doctors?" (think little kid voice though). As she neared the end of the
sentence, her eyes widened and her voice went up. It's an exaggerated
way of asking a question, but all the key elements are there.

This is what Ruby does too. We all have code that does boolean, true,
false assertions, and they are kind of boring like.
user.is\_authenticated, all we are looking for is a yes, no. But, in
ruby you know that its a question. Its like they have humanized code in
some regard.
