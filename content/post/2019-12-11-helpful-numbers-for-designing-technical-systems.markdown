---
title: "Helpful Numbers for Designing Technical Systems"
date: 2019-12-11T07:56:26-07:00
draft: false
---

When I design a new service, I want it to be efficient. Mostly, for any humans involved, but also for the technical components. Why make two HTTP calls when you can make 1. When thinking about tradeoffs it can be helpful to consider how long common operations take.

Not surprisingly, lists have been made of these common operations. As far as I can tell starting with Peter Norvig, and then re-popularised by Jeff Dean. [^norvig] They are sometimes referred to as latency numbers every engineer should know. I take issue with the "every programmer should know" language, but as you advance in your career it's helpful to know these so that you can reason about service design.

For instance, if you are designing a service that would redraw the screen every time a character was typed you might not want to wait for a response from a remote system. The reason being, a network response will never be fast enough. And it would feel incredibly slow for the person typing. If you can reasonably think through service design earlier in the design process it will be much cheaper for everyone involved. These numbers can help you make these kinds of decisions much earlier in a design process.

Here's a nice image version:

![Latency Numbers Every Programmer Should Know](https://i.imgur.com/k0t1e.png) [^gist]

There is also an interactive version of this that shows how these numbers have changed overtime. [^overtime]

Finally, its fun to see these numbers and think about them, but if you want to learn them and really incorperate them I would recomend this interactive exercise built by Julia Evans, ["Computers are Fast"](https://computers-are-fast.github.io/).

[^norvig]: http://norvig.com/21-days.html#answers
[^gist]: https://gist.github.com/jboner/2841832
[^overtime]: https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html

