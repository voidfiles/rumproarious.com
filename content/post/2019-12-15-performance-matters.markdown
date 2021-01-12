---
title: "Performance Matters"
description: "It's hard making the case for perfomance, but its important not only for the tech or the product, but its important for the humans in the loop as well."
date: 2019-12-15T12:41:40-07:00
draft: false
---

I'm torn between two axes. The first is being user-oriented. Thinking about the problems from their perspective and ensuring you are always working on something that improves value. The second is that good software is often fast software. 

While it's hard to make a case that keeping a service at a p99 of 500ms will increase the value to your users, I've found that trying to make it is important. The reality of the situation is always that **it depends**. It's highly contextual. But, when it comes to reminding myself of how powerful performance can be, I've got two articles that can help.

The first is "[Performance Matters](https://www.hillelwayne.com/post/performance-matters/)" by Hillel Wayne. He writes about EMTs and a report they have to fill out about what they did for a patient called a Patient Care Report (PCR). Apparently about 30 million are filled out each year: 

> At that scale, time and life are interchangeable. Every minute writing and filing a PCR is a minute not spent on actual treatment. If 0.1% of PCRs have mistakes that waste an hour of a doctor’s time, that’s 30,000 doctor-hours not spent on other patients. It’s a factor so grand and diffuse we can’t see it in motion. We can’t think in those terms.

I appreciate that Wayne contextualizes performance. He's saying that, EMTs must fill out this report and when they do so accurately less time is wasted. Therefore to improve the capacity of EMTs overall we should improve the performance of their software. Otherwise, humans will do what we do best and follow the path of least resistance, which might affect the accuracy of these reports.

I know the inevitable remark - "most of us aren't dealing with 'human lives'". Sure, most of us won't cause harm in our user's lives because our software doesn't work exactly right, but hold on to that thought for a moment though. 

Here is another essay from Craig Mod, "[Fast Software, the Best Software](https://craigmod.com/essays/fast_software/)".

> To me, speedy software is the difference between an application smoothly integrating into your life, and one called upon with great reluctance. Fastness in software is like great margins in a book — makes you smile without necessarily knowing why.

I think Mod makes an elegant argument that performance is one of the most valuable invisible requirements for good software. It's required for software that isn't just dealt with, but appreciated.

> It feels — intuitively — that software (beyond core functionality) should aim for speed. Speed as a proxy for efficiency. 

Speed as a goal. That's an interesting idea and one that I think brings this us full circle.

I am a human that works on software in an orgaization of people. We are accountable for its operations. When we are prevented from caring about performance and correctness there is an inevitable degradation in quality, like entropy. This kind of degradation starts small, but can grow into an uncontrollable mess. Which can lead to stress and pain for the humans in the loop. In the best case, people you care about will be so stressed that they leave your organization. Leading to further degradation.

Unless, of course, we see performance as a sign of capacity. We can do that by making performance a perpetual goal. Things will naturally slow down over time, and slow systems can be dangerous systems. In the same sense that a dull knife requires more force to use and thus a higher chance of doing serious harm when that force is mis-directed. When we awknowledge that performance is not just about delivering value to users but is also about keeping our knives sharp, that's where we can find the time to build capacity into our organization by ensuring our systems are snappy.

> "Make it work. Make it right. Make It fast" [^aphorism]

[^aphorism]: https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast