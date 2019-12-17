---
title: "Good API Design"
date: 2019-12-16T08:18:29-07:00
draft: false
---

It's easy to think of of a tool like Kubernetes and see it as "a way to run containarized workloads", because if you look at the comparisons, that's what they all do: ECS, Docker, and Mesos, etc. But, I don't think that's the vision for Kubernetes. 

Here are a few tweets from [Kelsey Hightower](https://twitter.com/kelseyhightower):

> The future where Kubernetes clusters disappear and we just leverage Kubernetes style APIs to deploy workloads is fast approaching. [^tweet-1]

> The cloud made the hypervisor disappear. Kubernetes will be next. [^tweet-2]


[^tweet-1]: https://twitter.com/kelseyhightower/status/1202009305148358656
[^tweet-2]: https://twitter.com/kelseyhightower/status/1202010135213666304
