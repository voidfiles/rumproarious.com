---
title: "It's Going to Get Weird"
date: "2026-04-10T12:00:00-06:00"
draft: false
---

I was a front-end engineer before the iPhone existed.

As apps increased in use, a thought occurred to me: *what if websites just... disappear?* What does that mean for my job? My gut reaction was I guess it's time to learn Objective-C. I tried it. It wasn't fun. It wasn't my world.

Cut to today, Websites didn't disappear. But more importantly, I realized my job was never "writing front-end code." My job was delivering value to people sustainably and efficiently. The technology was just the vehicle.

I've carried that with me ever since. And right now, with AI reshaping how we build software, this lesson applies now more than ever.

Here is the best advice I have so far, for anyones personal AI adoption story.

**Lean Into the Whimsy**

AI is going to make things weird.

Lean into it and have fun. Try to play free. Don't even try for competence at this point. The people who come out of this well are the ones who give themselves permission to be weird for a while.

## The Table Stakes

There are things everyone should just be doing, today. None of them take more than five minutes.

**Replace "let me Google that" with "let me ask the AI."**

Remember when Google came around and people started saying "let me Google that for you"? The modern equivalent is asking an AI. It might not answer well. But when it doesn't, that's the interesting moment — why didn't it work? Am I missing context? Did I phrase the question badly? Every failed query is a rep. I coach youth sports, and I think about reps a lot. How many can we get in?

**Throw a bug ticket at an AI agent and see what happens.**

Just pick one. Say "go fix it." Watch what it does. Watch where it breaks. You'll learn more about how these tools fail in five minutes than from any blog post about AI (including this one).

**Use agents to explain code, not just write it.**

One of my favorite moves is pointing an agent at a codebase and saying: "Write me a markdown file explaining how this works." I'm not asking it to change anything. I'm not going to commit the output. I just want it to read the code and tell me what it sees. It's shockingly useful.

**Generate multiple approaches, not just one.**

Code is cheap now, but so are approaches. Have the AI create three different versions of a solution, have it critique each one. Then incorporate the feedback and present the best option back to you. Anthropic's [skill creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) actually has this baked in — it spins up a web server to show you the options visually.

The key shift: let the AI explore paths, then use your taste to decide what to take.

**Pay attention to what frontier AI companies are shipping.**

The people at these companies hit the limits faster than anyone else, and they produce genuinely useful guidance. Anthropic's [prompt engineering docs](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), the trick of wrapping prompt sections in XML tags (because the models were trained on massive amounts of XML) — small things that create better outcomes.

And they're shipping fast. I had a copy of the skill creator from six months ago. When I finally pulled the latest version, I couldn't believe how much better it had gotten. We have to actively pull the latest, because the tools improve faster than we realize.

**Browse skill repositories like you'd browse Hacker News.**

Sites like [skills.sh](https://skills.sh) and [clawhub.ai](https://clawhub.ai/skills?sort=downloads) are the Hacker News of AI skills. I check them to see what's hot in the last 24 hours. Half the time I discover something I didn't know existed. It's a fun five-minute habit that compounds.

Checkout my post on using markdown notes for context: [Your File System Is Already a Graph Database](/2026/04/04/your-file-system-is-already-a-graph-database/).

## Fighting AI Slop with AI

> "The amount of energy needed to refute bullshit is an order of magnitude bigger than that needed to produce it." - Brandolini's Law 


> "the amount of human effort needed to identify, correct, and clean up AI-generated slop is an order of magnitude greater than the compute needed to produce it" - AI Brandolini's Law  

Yea, the world will be filled with AI slop. It's Pandora's box. But there's a tool: AI. Fight fire with fire.

**From Vibes to Legos**

For over a year, I've been experimenting with using AI to summarize and extract insights from research papers. I vibed a lot of Python code into existence. It worked (kind of). But the code became unreadable almost immediately.

When I hit a wall on quality — I had the first 90%, but needed the last 10% — I asked myself: what am I actually iterating on? The Python or the prompts?

It was the prompts, and I was fighting with python trying to load it all into my head. So I did what any engineer would do: I built a DSL in YAML to describe my prompt pipelines. Now, I could see the flow clearly — prompt, prompt, prompt, take data from here, put it there — without wading through Python boilerplate.

I think there's something here worth paying attention to: **our job is shifting toward using AI to move our codebases into a place where we're dealing with large, comprehensible concepts — Legos — that we can think through quickly as humans.** Then we spend our time reconfiguring and improving the Legos, not wrestling with implementation details.

We need to reduce cognitive load on ourselves so we can let AI tools run within boundaries we actually understand. If you've looked at [Karpathy's auto-research tool](https://github.com/karpathy/autoresearch), those kinds of self-reinforcing AI loops are going to be really useful — but only if humans can stay inside the ability to understand what the AI is doing.

### Domain-Driven Design Can Help

I've always been a fan of [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design), but especially right now. Ubiquitous language, domain models, bounded contexts — these become critical as we move forward.

If we can use AI to wring out the cogitive load, it unlocks our cross-functional partners to participate in the build process. Our designers and product managers are going to have their own AI tools. Those tools will need to understand our domain models. If we can hand them domain models that are connected to our code, we unlock their ability to iterate with us on core architectural constructs.

I think that's going to be really cool.

## Distillation: Steal Like an Artist

One of my favorite patterns is finding someone whose thinking I admire and using their perspective as a lens.

I'm a fan of [John Cutler](https://cutlefish.substack.com/), a product thinker who writes extensively about connecting product outcomes to engineering work. He has a huge corpus of blog posts. I basically told the AI: "Help me build a product vision as if I were John Cutler." I distilled his approach into rules, then turned those rules into a reusable skill.

This works for any domain. Interested in incident response? Distill the principles of Sidney Dekker or John Allspaw. Coaching kids? Distill constraints lead approach. The pattern is always the same: find the expert, internalize their lens, make it a tool you can apply.

## When Aesthetics Are Cheap, Taste Remains

Here's the thing I keep coming back to: as AI gets better at producing things, taste becomes the critical skill (Everything old becomes new again).

For me, taste is largely a feeling, lean in to that. You stand in front of a great painting and you feel the power of it. You read a piece of writing and something in your chest says: *yes, that's it.* I react way more to an outcome than a blank page. I'm a better editor than a writer.

So one of my favorite things is using AI to generate a draft, and then having this deep gut reaction — *no, that's not good enough* — and editing it. The AI becomes the first-draft machine. I become the taste layer.

A specific technique I use: **"Rewrite this as if you're [person with a strong voice]."**

I tried this with Andy Grove, the legendary Intel CEO. I took a casual message to my team about Q2 preparation — the kind of thing you'd dash off in Slack — and asked the AI to rewrite it in his style. The result scared me. It shrugged off all of my passive voice, all of my pre-tense and I was left with the raw ambition. Which is honestly what I want, but can be too timid at times.

## Lastly, We're All Fumbling

I'm doing a [podcast](https://podcast.staffeng.com/) right now where we talk to AI practictions across the industry. What I can tell you: we are at the cutting edge, even when it feels like we're fumbling in the dark.

My hypothesis: The difference between the people who come out of this well and those who don't isn't that one group figured it out — it's that one group kept getting reps in.

Five minutes a day. Ask the AI a question. Throw a ticket at an agent. Browse a skill repository. Take a note.
