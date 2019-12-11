---
title: "Helpful Numbers for Designing Technical Systems"
date: 2019-12-11T07:56:26-07:00
draft: false
---

When I design a new system, I want it to be efficent. Foremost for any humans invovled, but also for the technical components. Why make two HTTP calls when you can make 1. When thinking about tradeoffs it can be helpful to consider how long certain operations take.

There are lists that have been made, as far as I can tell starting with Peter Norvig, and then repopularsed by Jeff Dean. [^norvig] They are sometimes referred to as latency numbers every engineer should know. I take issue with the every programmer should know language, but as you advanace in your carrer it's helpful to know these so that you can reason about design.

For instance if you wanted design a system that would redraw the screen everytime a character was typed into a screen you might not want to wait for a response from a remote system.

Here's a nice image version:

!(Latency Numbers Every Programmer Should Know)[http://i.imgur.com/k0t1e.png] [^gist]

There is also an interactive version of this that shows how these numbers have changed overtime. [^overtime]

Finally, its fun to see these numbers and think about them, but if you want to learn them and really incorperate them I would recomend this interactive exercise built by Julia Evans, ("Computers are Fast")[https://computers-are-fast.github.io/].

[^norvig]: http://norvig.com/21-days.html#answers
[^gist]: https://gist.github.com/jboner/2841832
[^overtime]: https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html

