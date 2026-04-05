---
title: "Your File System Is Already a Graph Database"
date: "2026-04-05T10:00:00-07:00"
draft: false
---

Karpathy recently posted about using LLMs to build personal knowledge bases — collecting raw sources into a directory, having an LLM "compile" them into a wiki of interlinked markdown files, and viewing the whole thing in Obsidian. He followed it up with an "idea file," a gist you can hand to your agent so it builds the system for you.

This is a great idea, I've been doing some form of this for over a decade. My Staff Eng co-host [@davidnoelromas](https://x.com/davidnoelromas) reached out after the tweet to ask for more details on how I've been using obsidian and AI. This an expanded version of what I told him.

I've collected possibly too many markdown files.

```
find . -type f | wc -l
52447
```

That's my obsidian vault, and I use it with AI everyday without a special database, or a vector store, or a RAG pipeline. It's merely files on disk.

## The problem this actually solves

Think about the context you carry around in your head for your job. The history of decisions on a project. What you discussed with your manager three months ago. The Slack thread where the team landed on an approach. The Google Doc someone shared in a meeting you half-remember. The slowly evolving understanding of how a system works that lives across fifteen people's heads and nowhere else.

Now think about what happens when you need to produce something from all that context. A design doc. A perf packet. A project handoff. An onboarding guide for a new team member. You spend hours reassembling context from Slack, docs, emails, your own memory, and you still miss things.

The knowledge base turns this into a system instead of a scramble.

## The architecture

A file system with markdown and wikilinks is already a graph database. Files are nodes. Wikilinks are semantic edges. Folders introduce taxonomy. You don't need a special MCP server or plugin. The file system abstraction is the interface, and LLMs are surprisingly good at navigating it.

I use a structure borrowed from Tiago Forte's [*Building a Second Brain*](https://www.buildingasecondbrain.com/), with the PARA taxonomy as a starting point, extended with categories that match how I actually work:

```
/projects/{name}
/areas/{topics}
/people/{slack_handle}
/daily/{year}/{month}/{day}/
/meetings/{year}/{month}/{day}/
```

Markdown files are nodes, wikilinks (`[[target]]`) are edges, the folder taxonomy is the schema and LLMs is the query engine. A graph database with a natural language query interface. No infrastructure required.

## How it works day to day

After every meeting, the agent creates a note in `daily/{year}/{month}/{day}/`, downloads any attached Google Docs, and links everything to the long-running notes I keep for each person I interact with regularly. A note from a 1:1 with my boss JP gets a wikilink to `[[/people/jp|jp]]` and to whatever projects we discussed.

Over months, each person's note becomes a timeline of every conversation, decision, and open thread. Each project folder accumulates every relevant artifact. You don't have to remember where things are. The graph remembers.

For a work project, I can point the agent at a starting doc and say: "Spider through every tool you have access to and pull down all the related context." It grabs Slack threads, Google Docs, web resources, all rendered as markdown inside the project folder. From that assembled context, the agent can draft design docs, product vision statements, problem/solution analyses. The output is better than prompting cold because the LLM is working with the real history of the project, not your summary of it.

This is the part Karpathy's tweet hints at but doesn't fully spell out: the knowledge base isn't just for research. It's a context engineering system. You're building the exact input your LLM needs to do useful work.

## What makes this different from just using an LLM

You might be thinking: I already ask Claude to help me write a design doc. True. But there's a real difference between prompting "help me write a design doc for a rate limiting service" and prompting an LLM that has access to your project folder with six months of meeting notes, three prior design docs, the Slack thread where the team debated the approach, and your notes on the existing architecture.

The knowledge base is a context engineering system. You're not building a wiki for the sake of having a wiki. You're building the input layer that makes every future LLM interaction better. Every meeting note, every linked decision, every filed artifact improves the quality of every query that follows.

## Where this is still hard

The piece I haven't cracked is automated inbox processing. The idea is straightforward: web clippings, meeting notes, Slack saves, and random captures all land in an inbox folder. The agent processes everything new, applies progressive summarization, breaks content into atomic pieces, correlates each piece with the right project, area, or person.

I have a graveyard of experiments here. The LLM is good at summarizing and categorizing. The hard part is defining what "processed" means in a way that's consistent enough to be useful six months later but flexible enough to handle the variety of stuff that lands in an inbox. Every attempt has been either too rigid (everything gets the same treatment) or too loose (the vault drifts into chaos).

If you've solved this, I'd genuinely like to hear about it.

## Getting started

You don't need 52,000 files to get value from this. Start with three things:

**One:** Create the folder structure. Projects, areas, people, daily. Even empty, the taxonomy gives you and the LLM a schema.

**Two:** After your next meeting, have the agent create a note and link it to the relevant person and project. Do this for a week. Watch the graph start to form.

**Three:** The next time you need to write something, a design doc, a status update, a perf self-review, point the agent at the relevant folders and ask it to draft from what's there.

The difference is noticeable right away. Not because the LLM is smarter, but because it finally has the context to be useful.

Your work compounds. That's the thing that feels genuinely new.
