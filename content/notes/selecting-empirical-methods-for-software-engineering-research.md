---
Title: "Selecting Empirical Methods for Software Engineering Research"
slug: "selecting-empirical-methods-for-software-engineering-research"
Authors:
  - name: Steve Easterbrook
    link: https://scholar.google.com/citations?hl=en&user=bD8DWiEAAAAJ
  - name: Janice Singer
    link: https://scholar.google.com/citations?hl=en&user=xun9v94AAAAJ
  - name: Margaret-Anne Storey
    link: https://scholar.google.com/citations?hl=en&user=WhjQewkAAAAJ
  - name: Daniela Damian
    link: https://scholar.google.com/citations?hl=en&user=B-1karUAAAAJ
Summary: "Researchers studying software engineering often choose inappropriate methods. This chapter from, 'Guide to Advanced Empirical Software Engineering', is intended to help folks understand how to choose the right methods."
Link: "https://link.springer.com/chapter/10.1007/978-1-84800-044-5_11"
Date: "2020-10-30"
TakenOn: "2020-10-30"
---

[Find Fulltext](https://scholar.google.com/scholar?q=selecting+empirical+methods+for+software+engineering+research&hl=en&as_sdt=0&as_vis=1&oi=scholart)

The study of software engineering is inherently the study of human activity. Given that fact, any attempt to gain a deeper understanding of software engineers should use methods developed by disciplines that study human activity. For instance, psychology and sociology. 

*Research Question*

The first step to selecting an appropriate method is to clarify your research question. Through an exploratory process of asking questions that provide rich qualitative data you may begin to clarify your own understand of terms and the phenomena. Next you can seek to deepen your knowledge of the phenomena by understanding the baseline. Then explore how things are related and  the possibility of correlation or causality. Through this process you’ll gain a deeper knowledge of the phenomena that you are studying.

In addition to knowledge building, you may also want to ask questions about the effectiveness of software design. In the long run you’ll probably need to ask a mix of design and knowledge building questions. 

*Empirical Truth*

Before you begin a study you should decide what you will accept as valid results. Your philosophical stance on knowledge will impact what you accept as valid. You should articulate your stance, and make it clear before you decide what is a valid result.

*Role of Theory*

A major feature of scientific study is the building of theories that explain phenomena, and allow for for predictions. As you study progresses the theory will be the lens the researcher uses to see their research. Many Software Engineer studies to date fail to explicitly detail a theory which may have an impact on others to interpret the studies.

A scientific theory should:

	* identify and define a set phenomena
	* make assertion about their nature
	* and the relations ships between them
	* Precisely defines theoretical terms
	* Explain why relationships occur

While few scientist give thought to how theories are created an exception is *grouned theory*, which is a technique to build a theory up literately from qualitative data.

*Method Selection*

After you have clarified your research question, decided on a philosophical stance, understood that you are building a theory, you are now ready to choose a method of research.

It’s often the case that you will choose more then one method for your research, often this is necessary to fully develop a theory.

The methods described in the chapter are:

* Controlled Experiments: Lab based, can determine causality, not “real life”
* Case Studies: In the field
	* Two kinds
		* Exploratory: Rich qualitative data 
		* Confirmatory: Meant to confirm or refute a theory
* Survey Research: Data from a broad populate
	* Sampling is important
	* Shared understanding of terms is important when asking questions
* Ethnographies: “study a community of people to understand how the members of that community make sense of their social interactions”
* Action Research: Asses a project as it’s happening from 
* Mixed Method: Some mixture of the above. It’s useful to do some amount of qualitative and quantitative research.

*Data collection*

After you’ve chose your methods, you’ll need to decide on how to collect data. This will be based on your methods, and the unit of analysis you’ve chosen.

*Practical Considerations*

When you undertake research you should be aware of the practical considerations as well including: time, budget and personnel resources, and access to data.

*Conclusion*

Finally, a note of caution, “empirical research never produces certain knowledge”

 
# Notes
Appears in [Guide to Advanced Empirical Software Engineering](https://link.springer.com/book/10.1007/978-1-84800-044-5)

*Published* 

2008 

*Authors*

* Steve Easterbrook,
* Janice Singer
* Margaret-Anne Storey,
* Daniela Damian

*Abstract*

Selecting a research method for empirical software engineering research is problematic because the benefits and challenges to using each method are not yet well catalogued. Therefore, this chapter describes a number of empirical methods available. It examines the goals of each and analyzes the types of questions each best addresses. Theoretical stances behind the methods, practical considerations in the application of the methods and data collection are also briefly reviewed. Taken together, this information provides a suitable basis for both understand- ing and selecting from the variety of methods applicable to empirical software engineering.

## 1. Introduction
> Despite widespread interest in empirical software engineering, there is little guidance on which research methods are suitable to which research problems, and how to choose amongst them. 

* Folks choose the wrong method
	* Because they don’t understand the goals of a method
	* Don’t know about alternatives
* To help, this chapter:
	* Key questions tog guide selection
		* From the nature of knowledge 
		* to practical soniderations
* They will characterize key empirical methods that are applicable to software engineering
	* Will also explain the strength and weakness of each method

> To understand how software engineers construct and maintain complex, evolving software systems, we need to investigate not just the tools and processes they use, but also the social and cognitive processes surround- ing them. 

#social #technical

* It requires the study of human activities 
	* You must understand how individuals do their job
	* How teams coordinate effort 
* Because of this, research methods are borrowed from disciplines that study human behavior
	* At individual (psychology)
	* At organizational (sociology)
* This paper focuses on a few methods
	* Controlled Experiments (including Quasi-Experiments)
	* Case Studies (both exploratory and confirmatory)
	* Survey Research
	* Ethnographies
	* Action Research
* They’ll try to describe the tradeoffs
* They use two fictitious examples to guide the discussion
	* Jane a PHD student wants to understand the effectiveness of a fish-eye technique
	* Joe is a researcher at a lab and he wants to understand how developers use UML


## 2. What kind of Research Question are You Asking?
In order to choose a method, you have to clarify your research question. It’s possible you might understand the problem, but you may only have a vague notion of the process, people, and phenomena you want to look at.

Before you can choose am method, you need to find precise meaning of terms.

You should start with an exploratory phase that will produce rich qualitative data. That should help to illuminate a phenomena. A few kinds of exploratory questions would be:

* Existence questions: Does the thing I want to study exist?
* Description and Classification questions: Breaks down the thing into parts 
* Descriptive-Comparative questions: How is your thing different or similar to other things. 

From here you should be able to develop a more precise understanding of terms and the phenomena it self. From here you should be able to ask more knowledge building questions.

* Base Rate Questions: Help you understand what’s normal, and what’s exceptional
	* These can be stat based or procedural
* Relationship and Causality questions: How are things related, and does one thing cause another
	* Are X and Y related?
	* Does X cause Y?
	* What causes Y?

This process will increase your knowledge of things that are. Often studies and research in software engineering are related to design. Understanding how designs effect outcomes would have different questions. “What’s an effective way to achieve X?”. Long term research into software engineer will involve both kinds of questions.


*  When choosing a method, first you must clarify the research question
* Folks often understand the problem they are looking at first
	* Which could lead to many research questions
	* Which leads to different methods
* The most obvious question may not be the best
	* For Jane: “Is a fisheye-view file navigator more efficient than the traditional view for file navigation?”
	* For Joe: “how widely are UML diagrams used as collaborative shared artifacts during design?”
* The questions are vague
	* They make assumptions about
		* The phenomena being studied
		* The situations where it occurs

> Jane’s question only makes sense if we already know that some people (who?) need to do file navigation (whatever that is?), under some circum- stances (which are?), and that efficiency (measured how?) is a relevant goal for these people (how would we know that?). 

> Joe’s question presupposes that we know what a “collaborative shared artifact” is, and can reliably identify one, and even reliably say which things are UML diagrams. 

* Defining a precise meaning of terms is a crucial part of empirical research
* Tied closely with selecting an appropriate theory

* In early stages you need to ask exploratory questions
	* You are attempting to understand the phenomena
	* Identify useful distinctions to clarify understanding
* Good methods for exploratory phase
	* Produce rich, qualitative data,
	* Help build tentative theories

*Kinds of exploratory questions*

* Existence questions
	* Does X exist
	* Jane: Is file navigation something developers do?
	* Joe: Do collaborative shared artifacts exist?
	* Us:
		* Do design docs exist for your team?
		* Do you follow any technical directions of standards?
		* What code qualatiy rules do you like to follow?
* Description and Classification questions
	* What is X like?
	* What are it’s properties
	* How can it be categorized
	* How can we measure it
	* What is it’s purpose
	* What are it’s components
	* How do the components relate to on another?
	* What are all types of X?
	* Jane: How can we measure the efficiency for file navigation?
	* Joe: What are all the types of collaborative shared artifacts?
* Descriptive-Comparative questions
	* How does X differ from Y
	* Investigate the similarities and differences between two or more phenomena
	* Jane: How do fisheye views differ from conventional views?
	* Joe: How do UML diagrams differ from other representations of design information?

* These questions should result in clearer understanding of the thing
* Including:
	* more precise definition of terms
	* Evidence things can be measured
	* Evidence of the validity of measurement
* Should be able to refine ideas about the thing
* There might be new, or different questions at this point.
* There might already be answers for these new questions
	* Literature review at this point may be more useful then an empirical study

*Base Rate Questions*

* Once you have a clear understanding of the phenomena
* You might need to know the base rate
* So, you can know if something is normal or unusual

* Frequency and distribution questions
	* How often does X occur
	* What is the average amount of X
	* These might follow normal statistical distributions in well-defined population
* Descriptive-Process questions
	* How does X normally work
	* What is the process by which X hapens?
	* In what sequence do the events of X occur?
	* What are the steps X goes through as it evolves?
	* How does X achieve its purpose?

*Relationship and Causality Questions*

Understanding the relationship between two different things is often a goal. Specifically, weather x is related to y

* Are X and Y related?
* Do the occurrences of X correlate with the occurrences of Y
* Jane: “Does effiecney in file naviaation correlate with the programmers familiarity with the programming environment?”
* Joe: “Do managers’ claims about how often they use UML correlate with the actual use of UML?”

If you can identify a relationship between X and Y. You might want to understand if there is a *correlation* or a *causality*.

It’s harder to demonstrate causality, then correlation

There are questions you can ask to understand causality

* Causality questions
	* Does X cause Y?
	* Does X prevent Y?
	* More general forms:
		* What causes Y?
		* What are all the factors that cause Y?
		* What effect does X have on Y?
* Causality-Comparative questions
	* investigate relationships between different causes 
	* Does X cause more Y than does Z?
	* Is X better at preventing Y than is Z?
* Causality-Comparative Interaction
	* questions investigate how context affects a cause–effect relationship
	* Does X or Z cause more Y under one condition but not others?

> The classes of research question above are all knowledge questions focused on the way the world is. Empirical research in software engineering addresses these types of questions. In contrast, most non-empirical research in software engineering focuses on a very different type of question concerned with designing better ways to do software engineering (Simon, 1996)

> These types of question are necessary when the goal is to design better procedures and tools for carrying out some activity or to design suitable social or regulatory policies. Such questions presuppose that the associated knowledge questions have already been addressed so that we have enough information about the nature of the design problem to be solved. In practice, a long term software engineering research program involves a mix of design questions and knowledge questions as the researchers investigate specific problems, how best to solve them, and which solu- tions work best (Wieringa and Heerkens, 2006).

## 3. What will You Accept as an Empirical Truth?
* once you have a question, you’ll need to know what you accept as a valid answer
* The validity of that answer is determined by your philosophical stance on knowledge 
	* For instance, can you verify a causal connection in a lab, or in the field?
* There are four kinds of philosophical stances
	* Positivitism: “all knowledge must be based on logical inference from a set of basic observable fact”
	* Constructivism: “the meanings of terms used in scientific theories are socially con- structed, so interpretations of what a theory means are just as important in judg- ing its truth as the empirical observations on which it is based”
	* Critical Theory: “judges scientific knowledge by its ability to free people from restrictive systems of thought”
	* Pragmatism: 
		* “acknowledges that all knowledge is approximate and incomplete, and its value depends on the methods by which it was obtained”
		* “knowledge is judged by how useful it is for solving practical problems”

> Although there are examples of research from each of these stances in the software engineering literature, the underlying philosophies are never mentioned. We believe this has contributed to confusion around the selection of empirical methods and appropriate evaluation of empirical research. In particular, it is impossible to avoid some commitment to a particular stance, as you cannot conduct research, and certainly cannot judge its results, without some criteria for judging what constitutes valid knowledge.

## 4. The Role of Theory Building

> A distinguishing feature of scientific study is the development of theories that explain how and why certain phenomena occur, and allow predictions to be made. Theories are therefore the building blocks of scientific knowledge. The different philosophical stances differ in their ideas about the role of theory (Gregor, 2006).

* A scientific theory:
	* identifiers and defines a set phenomens
	* Makes assertion about their nature
	* and the relations ships between them
	* Presicicle defines theoretical terms
	* Wexplains why relationships occur
* The theory becomes the lens
	* wether or not it’s explicit articulated

*Grounded Theory*

> Few scientists give thought to how theories are created. A notable exception is *Grounded Theory*, a technique for developing theory iteratively from qualitative data (Glaser and Strauss, 1967). In grounded theory, initial analysis of the data begins without any preconceived categories. As interesting patterns emerge, the researcher repeatedly compares these with existing data, and collects more data to support or refute the emerging theory. Despite its close association with the constructivist stance, Grounded Theory probably approximates how most scientists end up developing theories. The difference is that Grounded Theory makes the process explicit and systematic. 

* the theory can connection the research to there research 

> Software Engineering researchers have traditionally been very poor at making theories explicit (Jørgensen and Sjøberg, 2004). Many of the empirical studies conducted over the past few decades fail to relate the collected data to an underly- ing theory. The net result is that results are hard to interpret, and studies cannot be compared.


## 5. Selecting Methods
> A method is a set of organizing principles around which empirical data is collected and analyzed. 

* Many methods may be used
	* Often nescecarty to fully understand the problem
* Choice of method depends on
	* theoretical stand of research
	* access to resources
	* how closely the method clings with the research question
* *Research Design* is the process of selecting a method for a particular research problem
	* The validity of the results depends on how well the research design compensates for the weaknesses of the methods. 

> The validity of the results depends on how well the research design compensates for the weaknesses of the methods

### 5.1. Controlled Experiments

> A controlled experiment is an investigation of a testable hypothesis where one or more /independent variables/are manipulated to measure their effect on one or more /dependent variables/. Controlled experiments allow us to determine in precise terms how the variables are related and, specifically, whether a cause–effect relationship exists between them. 

### 5.2. Case Studies

> Yin (2002) introduces the case study as “an empirical inquiry that investigates a contemporary phenomenon within its real-life context, especially when the boundaries between phenomenon and context are not clearly evident.” 

* Case studies have in-depth understanding of
	* how and why certain phenomena occur
	* the mechanisms of a cause and effect relationship
* *Exploratory case studies*
	* used as initial investigations of some phenomena
	* derive new hypotheses
	* build theories
* *Confirmatory case studies*
	* test existing theories
	* Important for refuting theories
	* A detailed case study of a real situation in which a theory doesn’t work might be more convincing then a lab based experiment.
	* Details from one more more may help pick a prevailing theory

* Preconditions for case study
	* Research questions concerned with how or why certain things happen
* Precondition leads to *study proposition*
	* which states what the study is intended to show
	* guide the section of cases
	* guide the types of data to collect
* Selection of cases is a crucial step
	* Case studies use *purposive sampling* rather then random sampling 
	* Select cases most relevant to the study proposition
	* Sometimes one case is enough
		* Maybe because it is a *critical case*
			* For a well formulated theory
			* If theory holds, its likely to be true for others
		* Might be extreme or unique case
			* yield insights into what happens under extreme conditions
			* such as crisis
		* A *typical case* is useful as well
			* gain insight into common situations
	* However, multiple case’s offer greater validity
		* The cases should be thought of as replications
			* not samples

> For confirmatory case studies, these can be chosen as *literal replications*, where each case is expected to show the same results, or as *theoretical replications*, where cases are expected to show contrasting results for predictable reasons. 

* Case studies comprise of many data sources
	* Qualitative data 
		* interviews and observation offer rich insights 
	* “Data collection is always performed with respect to a well-defined *unit of analysis*. “
	* In SE a unit of analysis may be:
		* company
		* project
		* team
		* individual
		* episode or event
		* work product
	* Choosing an apppriate unit of analysis is important
		* Ensures the study focuses on the intended phenomena

> Case study research is most appropriate for cases where the reductionism of controlled experiments is inappropriate. This includes situations where the context is expected to play a role in the phenomena (for example if the stresses of a real project affect developers’ behaviour), or where effects are expected to be wide ranging, or take a long time (e.g. weeks, months, years) to appear.


### 5.3. Survey Research

> Survey research is used to identify the characteristics of a broad population of individuals. It is most closely associated with the use of questionnaires for data collection. However, survey research can also be conducted by using structured interviews, or data logging techniques. The defining characteristic of survey research is the selection of a *representative sample* from a well-defined *population/* and the data analysis techniques used to *generalize* from that sample to the population, usually to answer base-rate questions. 

* Must have a clear research question that asks about the nature of a particular target population.
	* Because, you can’t talk to everyone, you must have a representative sample
	* The unit of analysis is important to build a representative sample
		* If it’s a company, you’ll need folks from lots of companies
	* Random sampling may not be okay either
		* A random sample of individuals may end up with folks all from one company.

> A major challenge in survey research is to control for sampling bias. Sampling bias causes problems in generalizing the survey results, because the respondents to the survey may not be representative of the target population. Low response rates increase the risk of bias. 

> An even harder challenge is to ensure that the questions are designed in a way that yields useful and valid data. It can be hard to phrase the questions such that all participants understand them in the same way, especially if the target population is diverse. 


### 5.4. Ethnographies

> Ethnography is a form of research focusing on the sociology of meaning through field observation. The goal is to study a /community/of people to under- stand how the members of that community make sense of their social interac- tions (Robinson et al., 2007). 


### 5.5. Action Research

> In Action Research, the researchers attempt to solve a real-world problem while simultaneously studying the experience of solving the problem (Davison et al., 2004). While most empirical research methods attempt to observe the world as it currently exists, action researchers aim to intervene in the studied situations for the explicit purpose of improving the situation. 

### 5.6. Mixed-Methods Approaches

> While mixed method research is a powerful approach to inquiry, the researcher is challenged with the need for extensive data collection, the time-intensive nature of analyzing multiple sources of data, as well as the requirement to be familiar with both quantitative and qualitative forms of research. 

> The *Sequential explanatory strategy* is characterized by the collection and analysis of quantitative data followed by the collection and analysis of qualitative data. 

> The *Concurrent triangulation strategy* is probably the most familiar and widely used among the mixed-method approaches. This strategy uses different methods concurrently, in an attempt to confirm, cross-validate or corroborate findings. 


## 6. Data Collection Techniques
> Once the research method has been selected, the researcher must decide which data collection techniques are the most suitable for gathering data based on the study’s /unit of analysis/. 

## 7. Empirical Validity
> For empirical work to be acceptable as a contribution to scientific knowledge, the researcher needs to convince readers that the conclusions drawn from an empirical study are /valid/. Not surprisingly, the criteria by which researchers judge validity depend on their philosophical stance. 

## 8. Practical Considerations
> Most of the practical challenges relate to time, budget and personnel resources, and access to data. Rather than describe the challenges for each method individu- ally, we summarize the challenges related to groups of methods, according to the type of data they deal with: 

## 9. Conclusions
> A key message throughout the chapter is that empirical research never produces certain knowledge. 

## References
* Bratthall, L. and Jørgensen, M. (2002) Can you trust a single data source exploratory software engineering case study? /Journal of Empirical Software Engineering/, 7(1), 9–26. 
* Calhoun, C. (1995) /Critical Social Theory: Culture, History, and the Challenge of Difference/. Blackwell, Oxford, UK. 
* Chalmers, A. (1999) /What Is This Thing Called Science?/3rd Edition, Hackett Publishing Co, Indianapolis.  310 S. Easterbrook et al. 
* Creswell, J.W. (2002) /Research Design: Qualitative, Quantitative and Mixed Methods Approaches/. 2nd Edition, Sage Publications, Thousand Oaks, CA. 
* Damian, D. and Chisan, J. (2006) An empirical study of the complex relationships between requirements engineering processes and other processes that lead to payoffs in productivity, quality and risk management, /IEEE Transactions on Software Engineering/, 32(8), 433–453. 
* Damian, D.E., Eberlein, A., Shaw, M., and Gaines, B. (2000) Using different communication media in requirements negotiation, /IEEE Software/, 17(3), 28–36. 
* Davison, R.M., Martinsons, M.G., and Kock, N. (2004) Principles of canonical action research, /Information Systems Journal/, 14(1), 65–86. 
* Dittrich, Y. (2002) Doing Empirical Research on Software Development: Finding a Path Between Understanding, Intervention, and Method Development. In /Social Thinking: Software Practice/, Y. Dittrich, C. Floyd, and R. Klischewski, Eds. MIT Press. 
* Dittrich, Y., John, M., Singer, J., and Tessem, B. (2007) Editorial for the Special Issue on Qualitative Software Engineering Research, /Information and Software Technology/, 49(6), 531–539. 
* Flyvbjerg, B. (2006) Five misunderstandings about case study research, /Qualitative Inquiry/, 12(2), 219–245. 
* Glaser, B.G. and Strauss, A. (1967) /Discovery of Grounded Theory: Strategies for Qualitative Research/. Sociology Press, Mill Valley, CA. 
* Gregor, S. (2006) The Nature of Theories in Information Systems, /MIS Quarterly/, 30(3), 611–642 
* Jørgensen, M. and Sjøberg, D.I.K. (2004) Generalization and Theory-Building in Software Engineering Research. /IEE Proceedings, Workshop on Empirical Assessment in Software Engineering/(EASE’04), at ICSE’04, pp. 29–36. 
* Kitchenham, B., Pickard, L., and Pfleeger, S.L. (1995) Case studies for method and tool evaluation, /IEEE Software/, 12(4), 52–62. 
* Klein, H.K. and Myers, M.D. (1999) A set of principles for conducting and evaluating interpretive field studies in information systems, /MIS Quarterly/, 23(1), 67–93. 
* Lau, F. (1999).Towards a framework for action research in information systems studies, /Information Technology and People/, 12(2), 148–175. 
* Lincoln, Y.S. and Guba, E.G. (1985) /Naturalistic Inquiry/. Sage, Beverly Hills, CA.
* Littlejohn, S.W. and Foss, K.A. (2004) /Theories of Human Communication/. 8th Edition, 
* Wadsworth Publishing, Belmont, CA.
* McGrath, J.E. (1995) Methodology matters: doing research in the behavioral and social sciences. 
* In /Human–Computer Interaction: Toward the Year 2000/, R.M. Baecker, J. Grudin, W. Buxton, A., and Greenberg, S., Eds. Morgan Kaufmann Publishers, San Francisco, CA, pp. 152–169. 
* Meltzoff, J. (1998) /Critical Thinking About Research: Psychology and Related Fields/. American Psychological Association, Washington DC. 
* Menand, L. (1997) /Pragmatism: A Reader/. Vintage Press, New York.
* Morse, J.M., Barrett, M., Mayan, M., Olson, K. and Spiers, J. (2002) Verification strategies for 
* establishing reliability and validity in qualitative research, /International Journal of Qualitative/
* /Methods/, 1(2), 1–19.
* Robinson, H., Segal, J. and Sharp, H. (2007) Ethnographically-informed empirical studies of 
* software practice, /Information and Software Technology/, 49(6), 540–551.
* Sandelowski, M. (1993) Rigor or rigor mortis: the problem of rigor in qualitative research revisited, 
* /Advances in Nursing Science/, 16(2), 1–8.
* Simon, H. (1996) /The Sciences of the Artificial/. 3rd Edition, MIT Press, Cambridge, MA. Singer, J.A. and Vinson, N.G. (2002) Ethical issues in empirical studies of software engineering, 
* /IEEE Transactions on Software Engineering/, 28(12), 1171–1180.
* Varkevisser, C.M., Pathmanathan, I., and Brownlee, A. (2003) /Designing and Conducting Health/
* /Systems Research Projects: Volume 1 – Proposal Development and Fieldwork/. Chapter 10: Data Collection Techniques. Available online at http://www.idrc.ca/en/ev-56605-201-1-DO_ TOPIC.html 
* 11 Selecting Empirical Methods for Software Engineering Research 311 
* Vinson, N.G. and Singer, J.A. (2004) Consent issues raised by observational research in organisa- tions, /NCEHR Communique/, 12(2), 35–36. 
* Wieringa, R.J. and Heerkens, J.M.G. (2006) The methodological soundness of requirements engineering papers: a conceptual framework and two case studies, /Requirements Engineering Journal/, 11, 295–307. 
* Wohlin, C., Runesson, P., Höst, M., Ohlsson, M.C., Regnell, B., and Wesslén, A. (2000) /Introduction to Experimentation in Software Engineering/. Kluwer Academic Publishers, Boston, MA. 
* Yin, R.K. (2002) /Case Study Research: Design and Methods/. Sage, Thousand Oaks, CA. 
