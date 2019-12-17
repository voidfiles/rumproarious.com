---
title: "Good API Design"
date: 2019-12-16T08:18:29-07:00
draft: false
---

It's easy to think of of a tool like Kubernetes and see it as "a way to run containarized workloads". If you look at the comparisons that's what they all do: ECS, Docker, and Mesos, etc. But, I don't think that's the vision for Kubernetes. 

Here are a few tweets from [Kelsey Hightower](https://twitter.com/kelseyhightower):

> The future where Kubernetes clusters disappear and we just leverage Kubernetes style APIs to deploy workloads is fast approaching. [^tweet-1]

> The cloud made the hypervisor disappear. Kubernetes will be next. [^tweet-2]

The future of Kubernetes isn't the best tool to run containarized workloads. It's how you will manage your infrastructure for the whole company, no matter what cloud it runs on. No more terraform, or CloudFormation, or clicking around in interfaces. Just the Kubernetes API.

This is a masterstroke in stratgey from Google. They are very far behind AWS. In order to catchup, you don't just need to be technically competent, you need to change the game.

Kubernetes is doing that. The project is changing our concept of infrastructure management for our applications.

But, just having a vision isn't enough. Your vision to hit the pavement. Here Kubernetes has made material improvements over exististing approaches but their API in particular.

Kubernetes has parts. There is the part that manages all the containers, then there is the part that will manage cloud resources, and lots of other parts. But, there is also the API. That API is what is being interacted with to make all the other parts do their job. It's what `kubectl` talks to behind the scenes.

And, that API is designed well. It has scaled from being merely a way to run containrized workloads to being a way you could manage an entire infrastructure. That's do in no small part to the deisng. You can see that design in their doc about [api conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md). I know it sounds crazy to recommend reading an API conventions document, but it really is a master class in API design.

They aren't just trying to get you to use Kubernetes for your containers, they are trying to get you use Kubernetes as the tool for configuring your cloud resources. One way to convince you to use kubernetes is to build a better API. And, that is what they have done. Not only did they design the API well, but they documented it well.

[^tweet-1]: https://twitter.com/kelseyhightower/status/1202009305148358656
[^tweet-2]: https://twitter.com/kelseyhightower/status/1202010135213666304
