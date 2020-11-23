---
Title: "Site Reliability Engineering"
SubTitle: "How google runs production systems"
slug: "site-reliability-engineering"
Authors:
  - name: Betsy Beyer
    link: https://research.google/people/105156/
  - name: Chris Jones
    link: https://research.google/people/ChrisJones/
  - name: Jennifer Petoff
    link: https://research.google/people/JenniferPetoff/
  - name: Niall Murphy
    link: https://twitter.com/niallm
Summary: "Members of the SRE team explain how their engagement with the entire software lifecycle has enabled Google to build, deploy, monitor, and maintain some of the largest software systems in the world."
Link: "https://landing.google.com/sre/sre-book/toc/index.html"
Date: "2020-11-22"
TakenOn: "2020-11-22"
---

## What did I get from this

* Reliability first and foremost
	* because systems aren't valueble if they can't be used
	* because systems will trend towards unusable unless tended too
* Reliability Achieved through
	* clear definitions of production readiness
		* SLOs
			* Provide clear expectations for services 
	* Rigurous engineering 
		* Clarity
		* Safety
		* The right mix of skills
	* The elimination of toil
		* Automation
* Eventually reliability as a platform
	* By acting as consultants, they can figure out a cross section of needs
	* Begin to build shared services that bake reliability into them

Table of Contents

### Foreword

> "Here, we see not only how Google built its legendary infrastructure, but also how it studied, learned, and changed its mind about the tools and the technologies along the way." - Mark Burgess

I think its important when reading this book to think about the context of where it came from. What were the challenges that spurred SREs. It's possible a transplant doesn't make sense.

### Preface

> "Software engineering has this in common with having children: the labor *before* the birth is painful and difficult, but the labor *after* the birth is where you actually spend most of your effort. Yet software engineering as a discipline spends much more time talking about the first period as opposed to the second, despite estimates that 40–90% of the total costs of a system are incurred after birth"

Source of estimate: R. Glass, *Facts and Fallacies of Software Engineering*, Addison-Wesley Professional, 2002.

> "The popular industry model that conceives of deployed, operational software as being “stabilized” in production, and therefore needing much less attention from software engineers, is wrong."

We can't "forget" about systems, but we can decide how to decide when to work on something.

> "there must be another discipline that focuses on the *whole* lifecycle of software objects, from inception, through deployment and operation, refinement, and eventual peaceful decommissioning."

* What is a SRE?
	* It's hard to define 
	* They are engineers
		* As oppose to system administrators
		* They write software with all the best practices 
		* They build systems, often large distributed ones
		* They work with product development teams often build tools for feature teams, with an eye towards re-use.
		* Sometimes how to apply existing solutions to new problems
	* Reliability 
		* Systems aren't useful if people can't use them
		* Reliability is so important they spend time making them more scalable, more efficient, and more reliable. 
		* But, only up to a point. sometimes things are "reliable enough", and they should focus elsewhere.


## Part 1 - Introduction

### Chapter 1 - Introduction

#### The Sysadmin Approach to Service Management

* This is the Ops approach 
	* Run the software in production, and connect it up
* Disadvantages and pitfalls
	* Direct costs
		* Manual interventions requires linear scaling of team size
	* Indirect costs
		* divergent incentives, culture
		* "throwing it over the wall"
		* > "We want to launch anything, any time, without hindrance" versus "We won’t want to ever change anything in the system once it works"
* The conflict between dev and ops and slow down development, without producing any additional value

#### Googles approach to service management: Site Reliability Engineering

* Take software engineering approach to operations.
* This feels a lot like "DevOps"
* 50-60% of SREs are traditional google software engineers
* 40-50% have software engineering qualifications, but also have something that might be rare for SWE to have.
	* Unix internals
	* Networking Layer 1 to layer 3
* Everyone believes in writing software to manage complex systems
* *They hire people who get bored with toil, and can write the software to fix it*

> "Without constant engineering, operations load increases and teams will need more people just to keep pace with the workload. Eventually, a traditional ops-focused group scales linearly with service size: if the products supported by the service succeed, the operational load will grow with traffic. That means hiring more people to do the same tasks over and over again."

* They apply a 50% cap on "ops" work for SREs
	* This forces them to solve ops work with software engineering
* Advantages
	* "*the number of SREs needed to run, maintain, and improve a system scales sublinearly with the size of the system*"
	* SRE teams are characterized by both rapid innovation and a large acceptance of change.
* Challenges
	* The hiring pool is small, (maybe)
	* We are so new, no one knows how to manage us
	* Their potentially unorthodox approaches to service management require strong management support
		* "the decision to stop releases for the remainder of the quarter once an error budget is depleted might not be embraced by a product development team unless mandated by their management."

#### Tenets of SRE

SRE teams are in charge of  *availability, latency, performance, efficiency, change management, monitoring, emergency response, and capacity planning* of their service(s)

##### Ensuring a Durable Focus on Engineering

* Because of the 50% cap, they redirect work when it goes over 50% to product development teams, until that drops below 50%
	* It provides a feedback mechanism
	* Works best when everyone understand why the feedback valves exist 
* SREs should not receive more then 1-2 pages per on call shift
	* They should have time to investigate, restore service, and write a post mortem 
	* Any more then this will cause fatigue
	* If they aren't getting any pages it's not worth being on call 
* Postmortems should be written for al signification incidents 

##### Pursuing Maximum Change Velocity Without Violating a Service's SLO

* There is structural friction between ops and dev, ops want stability and dev wants velocity.
* Shipping code is inherently risky, ops overtime can overtime become a source of friction for velocity
* SRE's resolve this issue with and error budget
* 100% reliability is the wrong goal for most software projetcs
	* User's can't get the different between 100% and 99.999% availability 
		* Other systems in the way (Wifi, ISP, power grid)
* If 100% is wrong whats right
	* Focus on client/user outcomes
	* Set availability with stake holders
* Once you know what the error budget is, what do spend it on?
	* Quickly launching features
		* Using tools to reduce impact of rollouts will engender understanding of how to spend the budget 
* Error budges remove conflict between ops and dev
	* outages are no longer a bad thing, they are a normal operating principal 

##### Monitoring 

* An important part of functioning organizations
* Should be done thoughtfully
* Engineers should only be notified when they need to take an action 

##### Emergency Response 

> Reliability is a function of mean time to failure (MTTF) and mean time to repair (MTTR)  [[Sch15]](https://landing.google.com/sre/sre-book/chapters/bibliography#Sch15) . The most relevant metric in evaluating the effectiveness of emergency response is how quickly the response team can bring the system back to health—that is, the MTTR.

* Humans in the loop add latency
* Systems that can resolve failures automatically will be more reliable 
* When your systems can't automatically resolve failures, having a playbook is 3x more effective then winging it
* You can't have a playbook for everything,
* There are things you can do to prepare though

##### Change Management

* 70% of outages are due to making changes to live systems
* three things they've noticed can catch things
	* Progressive rollouts
	* Quickly and accurately detecting problems
	* Rolling back changes safely when problems arise

##### Demand Forecasting and Capacity Planning

* Important to do
* Many teams and services don't try at all 

##### Provisioning

* Change management and capacity planning

##### Efficiency and Performance

* *Efficient use of resources is important anytime a service cares about money*

### Chapter 2 - The Production Environment at Google, from the Viewpoint of an SRE

Largely a cursory description of the production environment at Google. Arguably you could have the same kinds of things if you are in a cloud environment.

* Google's hardware is way different then most
* Borg Distributes load among machines
* They have lots of storages systems 
* Networking systems 

## Part 2 - Principles

> This section examines the *principles* underlying how SRE teams typically work—the patterns, behaviors, and areas of concern that influence the general domain of SRE operations.

### Chapter 3 - Embracing Risk

> Extreme reliability comes at a cost: maximizing stability limits how fast new features can be developed and how quickly products can be delivered to users, and dramatically increases their cost, which in turn reduces the numbers of features a team can afford to offer.

> With this in mind, rather than simply maximizing uptime, Site Reliability Engineering seeks to balance the risk of unavailability with the goals of rapid innovation and efficient service operations, so that users’ overall happiness—with features, service, and performance—is optimized.

#### Managing Risk

* Clients loose faith in  unreliable systems
* But, improvements in uptime don't result in linear increases in perceived stability
* While at the same time improvements in reliability are increasingly costly
	* Extra machines resources hanging around as backups
	* Opportunity cost
* SRE's try and balance uptime with innovation

##### Measuring Service Risk

You have to understand what the target availability of a service is. This needs to be determined by stakeholders. Sometimes product owners, sometimes service consumers.

There then needs to be some kind of feedback loop. If a service fails to meet a target work must be invested to bring it back into line.

* First decide on a measurable, business relevant goal, for a service
* Then set a target
* You can then use this target to know what your error budget is
* You can measure availability in terms of uptime
	* But, google can have brownouts
	* They measure availability in terms of request success rate
	* 

### Chapter 4 - Service Level Objectives

> SLOs can—and should—be a major driver in prioritizing work for SREs and product developers, because they reflect what users care about. A good SLO is a helpful, legitimate forcing function for a development team. But a poorly thought-out SLO can result in wasted work if a team uses heroic efforts to meet an overly aggressive SLO, or a bad product if the SLO is too lax. SLOs are a massive lever: use them wisely.

#### Terminology 

*Indicators* 

* A carefully defined quantitative measure of some aspect of the services 
* Kinds
	* Request latency
	* Error Rate (Errors/Requests)
	* Throughput (Requests per second)
	* Availability (Failed Requests/Succesfull Requests)

*Objectives*

* SLO: Service level objectives
* A target value or range of values measured by an SLI
	* SLI <= target 
	* lower bound <= SLI <= upper bound
* The intentional chubby outages are interesting

*Agreements*

* SLA: Service Level Agreement or contract

#### Standardizing Indicators

Using standard definitions and aggregations help reason about SLIs without having to come up to speed each time. It also helps you share SLI templates across teams.

* Aggregation intervals: “Averaged over 1 minute”
* Aggregation regions: “All the tasks in a cluster”
* How frequently measurements are made: “Every 10 seconds”
* Which requests are included: “HTTP GETs from black-box monitoring jobs”
* How the data is acquired: “Through our monitoring, measured at the server”
* Data-access latency: “Time to last byte”

#### Choosing Targets

This isn't purely technical, SREs should be there, but you can't do this all alone.

* Don't pick a target base don current performance
	* This feels like its important for systems that start fast
	* You don't want to lock yourself into something that takes a lot of effort to maintain
* Keep it simple
	* Don't build overly complicated SLIs
* Avoid Absolutes
	* No always, no infinite
* Have as few SLOs as possible
	* If you can't manage tradeoffs by quoting SLOs you probably don't have the right ones
* Perfection can wait
	* It's easier to refine SLOs over time, then it is to loosen then when you encounter issues

#### Control Measures

SLOs and SLIs allow teams to build control loops.

1. Monitor measure
2. If SLI is approaching limit 
3. Decide if and what action to take
4. Take that action 

### Chapter 5 - Eliminating Toil

> "If a human operator needs to touch your system during normal operations, you have a bug. The definition of normal changes as your systems grow." - Carla Geisser, Google SRE

In SRE, we want to spend time on long-term engineering project work instead of operational work. Because the term *operational work* may be misinterpreted, we use a specific word: *toil*.

#### The Definition of Toil

Toil isn't just anything you don't like. Or, "grungy" work. HR stuff, cleaning up configurations, etc. Sometimes that work has long term value. 

So what is toil. 

* Manual - Hands on cognitive work
* Repetative - Things you do over and over again
* Automatable - If you can automate it, but a human is doing it
* Tactical - Interupt driven
* No enduring value - You aren't making things better, just keeping things alive
* O(n) with service growth 


### Chapter 6 - Monitoring Distributed Systems

> Google’s SRE teams have some basic principles and best practices for building successful monitoring and alerting systems. This chapter offers guidelines for what issues should interrupt a human via a page, and how to deal with issues that aren’t serious enough to trigger a page.

### Chapter 7 - The Evolution of Automation at Google

> For SRE, automation is a force multiplier, not a panacea. Of course, just *multiplying* force does not naturally change the accuracy of where that force is applied: doing automation thoughtlessly can create as many problems as it solves. Therefore, while we believe that software-based automation is superior to manual operation in most circumstances, better than either option is a higher-level system design requiring neither of them—an *autonomous* system. Or to put it another way, the value of automation comes from both what it does and its judicious application. We’ll discuss both the value of automation and how our attitude has evolved over time.

### Chapter 8 - Release Engineering

> Release engineering is a relatively new and fast-growing discipline of software engineering that can be concisely described as building and delivering software

> Running reliable services requires reliable release processes.

#### Philosophy

* *Self-Service Model*: teams should be able to define their own process, but have access to great tools
* *High Velocity*: Frequent releases, fewer changes, easier to debug, push on green (Deploy every build that passes tests)
* *Hermetic Builds*: If two people do the same thing, the release should do the same thing.

#### Enforcement of Policies and Procedures

Sox, code-review, lint. 

### Chapter 9 - Simplicity

*TODO*: This could be an interesting assessment level

> "The price of reliability is the pursuit of the utmost simplicity." - C.A.R. Hoare, Turing Award lecture

> Software systems are inherently dynamic and unstable. [38](https://landing.google.com/sre/sre-book/chapters/simplicity/#id-BWDujIehq)  A software system can only be perfectly stable if it exists in a vacuum. If we stop changing the codebase, we stop introducing bugs. If the underlying hardware or libraries never change, neither of these components will introduce bugs. If we freeze the current user base, we’ll never have to scale the system. In fact, a good summary of the SRE approach to managing systems is: "At the end of the day, our job is to keep agility and stability in balance in the system." [39](https://landing.google.com/sre/sre-book/chapters/simplicity/#id-MJbuJtOhb) 

> This chapter has repeated one theme over and over: software simplicity is a prerequisite to reliability. We are not being lazy when we consider how we might simplify each step of a given task. Instead, we are clarifying what it is we actually want to accomplish and how we might most easily do so. Every time we say "no" to a feature, we are not restricting innovation; we are keeping the environment uncluttered of distractions so that focus remains squarely on innovation, and real engineering can proceed.

#### System Stability Versus Agility

Sometimes you lean towards instability to achieve something new, or learn something, but eventually you'll have to bring it back. It's not about one or the other it's about balance.

#### The Virtue of Boring

There should be a distinct lack of surprise in code and systems. 

But, there is no one way to do this.

It helps to think about accidental and essential complexity. 

SRE's role is minimize accidental complexity. Call it out when you see it. Strive to remove it from systems they are in.

#### I Won’t Give Up My Code!

Delete it. Don't comment out, don't gate. Delete.

## Part IV - Management

### Chapter 28 - Accelerating SREs to On-Call and Beyond

> You’ve hired new employees into your organization, and they’re starting as Site Reliability Engineers. Now you have to train them on the job. Investing up front in the education and technical orientation of new SREs will shape them into better engineers. Such training will accelerate them to a state of proficiency faster, while making their skill set more robust and balanced.

How do ramp up an engineer who is to become an SRE

How would we apply this at SF?

### Chapter 29 - Dealing with Interrupts

> “Operational load,” when applied to complex systems, is the work that must be done to maintain the system in a functional state. For example, if you own a car, you (or someone you pay) always end up servicing it, putting gas in it, or doing other regular maintenance to keep it performing its function.

How to deal with the operation load. Pages, tickets, ongoing work.

### Chapter 30 - Embedding an SRE to Recover from Operational Overload

How to help a team by temporarily embed an SRE. Some good ideas in here. Like kindling, things that will lead to the next outage.

### Chapter 31 - Communication and Collaboration in SRE

* The success of SRE is built on
	* It's focus on reliability
	* Plus, its ability to communicate and collaborate
* Communication and Collaboration act like the API for an org
* Meetings
	* Production meeting
		* Like standup for a service
		* Make sure you connect whats going on to design goals
	* 

### Chapter 32 - The Evolving SRE Engagement Model

> We've discussed in most of the rest of this book what happens when SRE is *already* in charge of a service. Few services begin their lifecycle enjoying SRE support, so there needs to be a process for evaluating a service, making sure that it merits SRE support, negotiating how to improve any deficits that bar SRE support, and actually instituting SRE support. We call this process *onboarding*.

> Another way, perhaps the best, is to short-circuit the process by which specially created systems with lots of individual variations end up "arriving" at SRE's door. Provide product development with a *platform* of SRE-validated infrastructure, upon which they can build their systems. This platform will have the double benefit of being both reliable and scalable.

> A production platform with a common service structure, conventions, and software infrastructure made it possible for an SRE team to provide support for the "platform" infrastructure, while the development teams provide on-call support for functional issues with the service—that is, for bugs in the application code.
