---
Title: "The Phoenix Project"
SubTitle: "A Novel about IT, DevOps, and Helping Your Business Win"
slug: "the-phoenix-project"
Authors: 
  - name: Gene Kim
    link: http://www.realgenekim.me/
  - name: Kevin Behr
    link: https://twitter.com/kevinbehr
  - name: George Spafford
    link: https://www.gartner.com/analyst/38065/George-Spafford
Summary: "Bill is an IT manager at Parts Unlimited. It's Tuesday morning and on his drive into the office, Bill gets a call from the CEO.The company's new IT initiative, code named Phoenix Project, is critical to the future of Parts Unlimited, but the project is massively over budget and very late. The CEO wants Bill to report directly to him and fix the mess in ninety days or else Bill's entire department will be outsourced."
Link: "https://amzn.to/2O0nEwi"
Date: "2020-01-25"
TakenOn: "2016-01-26"
---

The Phoenix Project is a modern re-interpretation of a book called [The Goal](https://amzn.to/38zO5Rv). Originally published in 1984, The Goal was focused on helping american manfuactuers keep up with enlightend foriegn manufactures. Overtime folks began to see The Goal through lens of IT. The authors the Phoenix Project decided to retell it in that context.

# Takeaways

### Capacity and Constraints

* The whole process can only move as fast as the slowest part, or the constraint/bottleneck
* Optimizing anything other then the bottleneck is an illusion
* Find the bottlneck
* Optimize flow for the bottleneck
* Optimize new bottlenecks
* Start releasing into the system at a level that can keep utilization of the constraint the highest.

### The Three Ways

**The First Way** emphasizes the performance of the entire system, as opposed to the performance of a specific silo of work or department — this can be as large a division (e.g., Development or IT Operations) or as small as an individual contributor (e.g., a developer, system administrator).

The focus is on all business value streams that are enabled by IT. In other words, it begins when requirements are identified (e.g., by the business or IT), are built in Development, and then transitioned into IT Operations, where the value is then delivered to the customer as a form of a service.

The outcomes of putting the First Way into practice include never passing a known defect to downstream work centers, never allowing local optimization to create global degradation, always seeking to increase flow, and always seeking to achieve profound understanding of the system (as per Deming).

**The Second Way** is about creating the right to left feedback loops. The goal of almost any process improvement initiative is to shorten and amplify feedback loops so necessary corrections can be continually made.

The outcomes of the Second Way include understanding and responding to all customers, internal and external, shortening and amplifying all feedback loops, and embedding knowledge where we need it.

**The Third Way** is about creating a culture that fosters two things: continual experimentation, taking risks and learning from failure; and understanding that repetition and practice is the prerequisite to mastery.

We need both of these equally. Experimentation and taking risks are what ensures that we keep pushing to improve, even if it means going deeper into the danger zone than we’ve ever gone. And we need mastery of the skills that can help us retreat out of the danger zone when we’ve gone too far.

The outcomes of the Third Way include allocating time for the improvement of daily work, creating rituals that reward the team for taking risks, and introducing faults into the system to increase resilience.


### 4 kinds of work

* Business projects
* Internal Projects
* Preventative Maintaence
* Unplanned Work

What is it that IT does? What if I said that IT Operations does only 4 things, well more accurately, 4 types of work? And by understanding the types, their relative importance and how work flows through the organisation you will be better equipped to improve the delivery of projects, manage outages and compliance, and limit work-in-progress.

So what are they? No, one of them is not email.

Well it should come as no great surprise that the first one is **Business Projects**. You know, those projects that the business is screaming for, those projects that have a direct link to business processes and tie to the outcomes of the business groups. In essence this is all the business is really asking IT for.

The second is **Internal Projects**. Installing a fleet of new network devices, decommissioning a data centre, and any number of other internally focused system based activities. The problem with many of these projects is that all too often internal teams are left to manage them independently. They progress with little oversight or visibility and consume untold amounts of resource, which will often adversely affect progress on Business Projects. We have the PMO managing Business Projects, but who manages internal Projects?

So projects are generally classed as larger pieces of work, but we all know IT does a lot of little jobs to keep systems functioning. Patching, security upgrades, vendor software updates, problem resolutions etc. All of these, and many more, make up a third category of work, **Operational Change**. Every day IT operations will be registering, planning, assessing, building, testing and deploying changes, which may also include managing the process to deploy a change that relates to ether of the project types above.

And lastly the killer, the work that keeps Operations Managers, Service Owners and other IT folk awake at night. This type of work has the ability to put everything else on the backburner, which can then affect the delivery of projects, the deployment of changes, and any other work that IT may be attempting to deliver. **Unplanned Work**. Unplanned work is recovery work, which almost always takes you away from meeting your goals.

Unplanned work is the enemy here.

"Preventing unplanned work is incredibly important because it prevents the under-utilization of the bottlneck" see "Total Product Maintenance"

"Improving daily work is more important then doing daily work"

"It almost doesn't matter what you improve as long as your are improving something. Why? Because if you are not improving, entry guarantees that you are actually getting worse, which ensures the there is not path to zero-errors, zero work related accidents, zero loss" - Mark Rather

### Work Centers

Consist of:

* The machine
* The person/team
* The Method
* The Measuers

Work center is the combination of worker/and work center.

> **Function Documentation**: Provisioning a server is a set of steps, its not magic. As we make changes why not document the exact set of steps so that the process is repeatable? Furthermore, why not use something like Ansible that acts like functional documentation of the steps. You can see whats going to happen. Instead of typing commands into a machine, just change the playbook, and run it again. It forces you to document the entire process. It should standardize the flow, and prevent unplanned work because their are no surprises.

> **Improve as you go**: Taking the time to improve the system, and capturing improvements should be important.

### KPIs

Derriving a kpi, and example.

If you are a cross-country deliver company, a primary KPI is probably percent of on-time deliveries. An immpediment to on-time deliveries is probably vehicle breakdowns. One way to prevent vehicle breakdowns is to change the oil often enough, like very 5k miles. So, a forward looking 5k is what percentage of vehicles have had their required oil changes performed.

### Understanding the needs of the business

Interview the different business units to figure out what kind of an infrastructure they need to to increase growth.

> Q: Without data how do you know what you need to grow

> N: When you interview all the business owners, won't they see you coming? If you need to asses the state of the companies IT needs, and business owners see you coming, won't they attempt to jocky position with you? In the book everyone seems bewildered that you are even asking about them, in real life their is going to be some politics their.


Work should never go backwards, probably a reason for not cutting release branches.

Continuous Deployment is the inevitable outcome of apply the three ways.

"Until code is in production, no value is actually being generated because it's merely WIP stuck in the system."

"You pay back the company faster for its use of capital."


## Over all thoughts

**Quality of life**

I missed this entirely the first time through. They constantly re-iterate about how hard this industry can be at times, and how we are literally grinding our people up. It's easy to think that quality of life is about how it looks. Even in places where you have "good hours", ie no one is held to the grinding stone, etc, if you can't spend time on improvement that can be a grind.

We need to find ways not only to be nicer, but to support innovation as well. It need's to come from both directions.

Also, clear goals. If you company doesn't have clear goals, your employees are going to get burnt out over not being able to deliver.

**Continuous**

At first I thought this was just about integration, and delivery, but I have started to realize that continuous is a theory for everything. Always be learning, always be shipping. I think this is where the OODA loop comes in. If your ooda loop is months, or years you can't deliver on value.

**Technical Debt**: Is like trying to shove to much into a suitcase. Sometimes it works, but when it fails all your clothes fall all over the airport. At the worst possible time.

* Understanding what you as a team are committed too
* Figure out resource utilization
* Optimize for the bottleneck
* Value stream mapping?
* Reduce batch size
	* To increase quality
	* Lock up less capital
	* Make deploys easier
* Understand the vision of the company
	* Mapping IT too business value, based on vision
	* Prioritize work based on vision
* Know how to take calculated bets
* Business needs to understand its self.
	* If we don't know how the business grows, we can't get close

## Implicit understandings

Things that I didn't feel like the book explicitly stated, but was important for the story to work.

- Intrinsic motivation
	- Everyone was intrinsically motivated. They love the company they work for. They understood exactly what the goals of the company were, and exactly how to improve the company they just couldn't get the IT support they needed.
- Everyone got the vision, but they didn't have the tools
- The impact that working at a disjointed place has on our lives.
- The business new exactly the KPIs
- **What do you do if you don't have a vision, and you don't have KPIs**

## Questions to learn more

- How do you identify work centers in IT operations?
- How do you identify the measures?
- How do you standardize the work?
- How we can we attach preventative KPI's to primary business KPI's?
- Also checkout W. Edwards Deming, John Allspaw, Paul Hammond, Jez Humble, and Dave Farley

## Chapters

### Chapter 1 - He gets the job

* Talks briefly about the state of failure the company is in
* New CEO
* IT Guy gets a promotion
* Has to fix payroll

This is the classic way you see IT. Why can't it just be like toilets? It's a misunderstanding of it as infrastructure. It is infrastructure, but it's also your business process represented as architecture. Your toilets don't represent your business. 

Also, starts to being in the themes of being overworked, and asked to do two things at once. Family and work, and not being able to do either very well.  Re: the scene in the doctors office.

### Chapter 2 - payroll issues

- Sets up the insanity of working or large long running projects.
- Payroll is hugely important, but it's broken, but not completely broken.
	- With elbow grease it continues to woke
	- Until one day it doesn't.
	- Even the fix for the fix doesn't work.
	- Cause: no one felt that they had the time to do the right thing. 
		- They had 3 other things they needed to do yesterday, so they fixed it as fast as they could.
- The introduction of Brent. He always seems to be at the center of everything.
- Are all the issues related, or not? We have no idea.
- Starts to bring up the work queue. Who gets priority, what external business leaders can meddle with IT. 
- What's with the references to the paint and the carpet? Is he just trying to say that things should look nice so that people feel nice. 
- Tech can't fix systemic issues.

**Quotes**

“We’ve had so many problems with this particular upload,” she says, obviously frustrated, “that IT gave us a program that we use to do manual corrections, so we don’t have to bother them anymore.” 

Lets fix the fix for the fix. Instead of addressing the issue a hand everyone dances around the issue. 

For some reason I've encountered a large amount of people who seem to either not want to track down the issue, or don't know that they can. What ends up happening now usually is you end up building an upside down pyramid. 

---

"To get Finance the data they need, we may have to cobble together some custom reports, which means bringing in the application developers or database people. But that’s like throwing gasoline on the fire. Developers are even worse than networking people. Show me a developer who isn’t crashing production systems, and I’ll show you one who can’t fog a mirror. Or more likely, is on vacation."

We can't do this the right way because it seems really hard right now. And, I agree. I have seen many projects way after you could have fixed them. Fixing isn't something you do at the end. It's baked into the process. 

---

"Building a new server is now a right-click inside of an application. Cabling? It’s now a configuration setting. But despite the promise that virtualization was going to solve all our problems, here we are—still late in delivering a virtual machine to Chris."
 

### Chapter 3

The general depth of brokenness is laid on heavily here. It just keeps getting worse. You can't get to meetings. You can't get onto your laptop. You can't get your calendar to the people who need it. All because everyone is too busy. 

- Conflict as an unnatural state
- Preposterous conditions for release
	- Because they are so far behind
		- Because they aren't released in pieces
- Things are so deeply broken because everyone is busy
- How beauracy can get in the way

### Chapter 4

* Sets up completely unrealistic expectations for the project
* No one is listening to IT
	- Could this be the chicken little problem
* Dev has used all the time
* Biz still says go
* Later in the changes meeting no one shows up
	* Another layer of no situational awareness

### Chapter 5

* Audit stuff
	* Not sure I know what this means for a company that isn't bound by SOX
* Starting to understand commitments
	* You need to be able to see what you are working on
* What are we signed up to do

### Chapter 6

* Make it easy to know whats going on
* People won't do hard things or pointless things
* You need to give people time and space to think
* They start to realize how over committed they are
	* By visualizing the work
- Writing docs (Need to be automated, part of the build)
	- We can mostly automate the process of writing docs
- Manual testing (Needs to be automated, part of the build)
	- We can automatically test like 99% of all changes if we build it into the process
- The design process can be a waste if you try and think to far forwards
- "Write it down", and hopefully we'll get to it later
	- Did you tell me to just go fuck my self?

### Chapter 7

* The first meeting with aid
* First thing that people try is to grasp tighter
	* That may not be what is needed
* What are the kinds of work?
* Introducing the idea that you can map it to a manufacturing process
* Theory of constraints
	* How do you control the flow of work?
	* WIP is a silent killer
* Optimize for the bottleneck
* Introduces the 3 ways
* Possible Bottlenecks:
	* How do we know what to build?
	* If our customer feedback cycle is months, or years, how can we effectively compete?
	* Human time spent fixing bugs, for sure.
	* Not spending time fixing the lower level issues
	* Spent discussing the wrong bottleneck

### Chapter 8

* Re-iterating make work visible
	* But, if you don't have support from management you can't do much
* Management thinks its spending to much on IT so it won't green light new initiatives
* Prioritizing changes
	* Understand risk
* Working with other departments to help make changes

### Chapter 9

* Nothing is special
* Have one system for rolling out
* Change management starts to work
* Think they have identified the third kind of work

### Chapter 10

* Introduces the idea: The main mode of operations is to understand, to seek information.
	* Going and talking to brent made the problem simple
	* But, only someone from outside the system made that possible
* ^ GO SEEK
* "Death by a thousand cuts"
* Brent won't document things
* Calling out break fix work as in contention with strategic goals
* Sort of out of scope, but documentation is hard
* Better of building systems that create documentation
* Distribute the knowledge
	* We are soloed but we don't have to be

### Chapter 11

* Starting to see the 4th kind of work
* IT Needs to accept work, it can't just let work be assigned to IT
* Seeing how WIP Affects planned work

### Chapter 12

* When shit is broke don't run away from it
* No proper release planning
* Fuck this, "Perfection is the enemy of good"
* Lots in here that would be fixed by having a CI/CD pipeline

### Chapter 13

* Phoenix seriously screwed up
* CEO realizes that they pushed the release too early
* Tech team rallies to fix performance issues before addressing usability issues. 
* pCI compliance while you're treading water is hard
* Looming issues with john
* When he gets a chance to do his job it feels good. 

### Chapter 14

* Have to come close to disasters to make changes sometimes
* Re-iterates how should crushing this work can be at times
* IT is costing more then its making
* Starts to focus on how should crushing it can be to work with technology. You are expected to make miracles.
* Fear of keeping up
* Product can feel like a whiplash if you don't have a vision for everything
* Quality spiral: More and more work, longer and longer ours timelines lessened, less quality

### Chapter 15

* Again, with the personal cost that goes with this work
* Starting to see small wins by making the work visible, "One of the problems with prevention is that you rarely know if you averted a disaster"
* Discovers the 4th kind of work, unplanned work
	* It steals from your goals
	* Introducing the first way: Creating fast flow
	* Introduces the second way: Remove sources of unplanned work continually.
	* Re-inforcing the theory of constraints
* Subordinating the constraint
* Use tools to release work at the right pace
* Reduce WIP by reduce unplanned work
* Leading to the third way, reduce needless work
	* One way to reduce needless work is to align with business

### Chapter 16

* Do the best you can but don't let people put unreasonable demands on you.

### Chapter 17

* Re-iterating the cost to ones self
	* The cost was their even before he got in the host seat
* Good old fashioned team work
* It's a process not an event

### Chapter 18

* Start to build trust again
* When leadership buys in everyone feels better
* Trust
* Understanding

### Chapter 19

* Trust/touchy feely
* Dig into **Definition of Done**
* Without capacity planning, and planned acceptance you end up with lots of technical debt
* Unplanned work makes it really hard to plan for the future
* So, if you can't plan you can't capacity plan and you stay blind
* Fix technical debt so you can increase throughput, which will make velocity go up.

### Chapter 20

* Single tasking helps, but their is still a lot of work
	* Took a lot of institutional rigor to make that happen
* Need to figure out how to schedule work so that things can continue to get done
* Starting to identify the need to understand work centers and how work flows through them
* Figuring out the need to know all the work centers involved and who can man the work centers
* Realize that preventative maintenance can improve work flow and monitoring can make sure they are doing the correct maintenance
* It almost doesn't matter what you improve, because if you don't improve anything, but default you are probably moving backwards.

### Chapter 21

* You've got to bake security and compliance into the system otherwise you destroy throughput attempting to force it in at the end.
* There are all sorts of secondary, and tertiary concerns while making software, like security and compliance the point is that you have to involve your self early in the planning process. You need to work in the process

### Chapter 22

* IT is like a factory work. It has work centers.
	* By visualizing flow you can make things more efficent
	* I am starting to see how user stories can help bundle work together
* They implemented Kanban
* Then they try and figure out how to prioritize internal projects
* They realize they should prioritize project w which increase throughput at the blockage
* Resource utilizing impacts wait time

### Chapter 23

* Touch time vs queue time

### Chapter 24

* Less stress, happy people probably better work

### Chapter 25

* Start to figure out they why. How to align with business
* When you actually figure out whats important for your company, tech may not be that important
* Goes back too the 3 ways
* Once you understand value for the company you can start to develop KPIs that look forward


### Chapter 26

* Understanding value
* mapping tech projects to business goals can help IT prioritize but it also means that business needs to know what drives business
	* Monitoring is important but connect it with outcomes
* Phoenix was suppose to fix everything but when you try to fix everything you start over from scratch. Maybe you don't end up fixing the issues.
* R and D can be like WIP that just locks up capital

### Chapter 27

* Mapping IT to business goals
* Making things visible again makes certain answers easy
* Redefining the work that IT does so it aligns better
* Redefining the schedule in which IT operates works so they don't ever lock up to much capial
* audit stuff

### Chapter 28

* lots of 2nd way stuff getting rid of busy work
* Having clear guidlines around outsourcing
* No shadow IT

### Chapter 29

They continue to run into problems, probably because its so hard to deploy. If they could constantly deploy no one would feel like they need to manually change production.

### Chapter 30

* Build CI/CD
* Great anecdotes about reducing a 3 day task to 10 minutes
* Introducing devops
* Introducing allspaw
* day die flip to 10 minutes, we can fucking do that its all software

### Chapter 31

* Value stream mapping
* Staring CI/CD
