---
title: "Good API Design"
date: 2019-12-16T08:18:29-07:00
draft: false
---

It's easy to see Kubernetes as "a way to run containerized workloads". If you look at the comparisons that's what they all do: ECS, Docker, and Mesos, etc. But, I don't think that's the vision for Kubernetes. 

Here are a few tweets from [Kelsey Hightower](https://twitter.com/kelseyhightower):

> The future where Kubernetes clusters disappear and we just leverage Kubernetes style APIs to deploy workloads is fast approaching. [^tweet-1]

> The cloud made the hypervisor disappear. Kubernetes will be next. [^tweet-2]

According to that vision, The future of Kubernetes is not as the best tool to run containarized workloads. Instead, it's how you will manage your infrastructure for the whole company, no matter what cloud it runs on. No more terraform, or CloudFormation, or clicking around in interfaces. Just the Kubernetes API.

This is a masterstroke in strategy from Google. They are very far behind AWS. To catchup, they need more than technical competency, they need to change the game. Kubernetes is doing that. The project is changing our concept of infrastructure management for our applications. It's backing up that vision with material improvements over existing approaches. This is due in no small part to their API.

Kubernetes has parts. For instance, there is the part that manages containers, the part that manages cloud resources, and lots of other parts. But, there is also the API. That API is what you use to instruct all the other parts do their job. It's what `kubectl` talks to behind the scenes.

And, The Kubernetes API has incredibly scale. It has scaled from being merely a way to run containerized workloads to being a way you could manage an entire infrastructure. I think it's due to its design. Which you can read about in their doc on [api conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md). I know it sounds crazy to recommend reading an API conventions document, but it's a master class in API design.

They aren't just trying to get you to use Kubernetes for your containers, they are trying to get you use Kubernetes as the tool for configuring your cloud resources. One way to convince you to use Kubernetes is to build a better API. And, that is what they have done. Not only did they design the API well, but they documented it well.

[^tweet-1]: https://twitter.com/kelseyhightower/status/1202009305148358656
[^tweet-2]: https://twitter.com/kelseyhightower/status/1202010135213666304
