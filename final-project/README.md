<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

The hardest part of writing is spitting out the first draft. This site makes it easier to produce that first draft by hiding your writing as you go, forcing you to just get words on the page without second guessing and over-editing. 

The target audience is creative writers.

Information I need to convey includes:
* Where on the page writers can draft their content
* How to save their draft and access it later

I hope this site is interesting and engaging by creating a new, surprising mechanism to produce first drafts.

## Part 2: User Interaction

1. Click on drafting area to activate it
2. Input text in drafting area
3. Save text
4. Potential to keep writing the same draft or start a new one
5. After saving, a link to their draft appears under history. Click draft to read it
6. Copy text (for example, to take it to a word processor for their typical editing workflow)

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. FontAwesome Icon Library
   * Wide variety of icons and icon styles available
   * Included a icon from the library with New Draft link on upper right of page to make it more eye-grabbing/attractive
   * Adds some visual appeal to the website
2. DarkMode.JS
   * Easy to implement and highly customizable
   * Added a dark mode toggle to the site
   * Speaks to user need I heard in user interviews - writers often work at night and like the ability to write in dark mode

## Part 4: Design Iteration

* My website adheres relatively strictly to my design prototypes, with the exception of history (see Part 5 below)

## Part 5: Implementation Challenge

* History implementation: I tried several ways to make history drafts available after "save draft" is clicked. As I continue to work on this site I'd like to generate a separate page for each draft - my understanding is that I'll need to learn something like AJAX to do this. For now I landed on anchor links.
* Timer: I tried several countdown timer libraries but none of them were customizable enough so I ended up coding it myself.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Perplexity | Usage | No | No | Yes | Yes | No | See note in CSS
| Tool1 | Productivity | N/A | N/A | 3 | 3 | N/A |
| Claude| Usage | No | No | No | Yes | Yes | See note in CSS. Also used for debugging and Claude identified some syntax issues
| Tool2 | Productivity | N/A | N/A | 3 | 3 | N/A |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Perplexity: Yes
  2. Claude: Yes
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: ChatGPT: Its output wasn't helpful and I stopped using it quickly
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  N/A - I only used GenAI for debugging when I was stuck

> Use patterns
* I accepted the generations when …  For example, 
  1. Perplexity: It identified CSS bugs and confirmed my understanding of the issue on Stack Overflow
  2. Claude: It identified syntax issues like typos
* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: I once asked this tool for help debugging a for loop and it suggested alternate conditionals that I wasn't familiar with, so I didn't use its output.


> Pros and cons of using GenAI tools
* Pros
  1. Claude: Effective and debugging
* Cons
  1. Claude: Paywalled after a few questions.
  2. Perplexity: More often provides incorrect output than correct.
  2. ChatGPT: More often provides irrelevant or incorrect ouptput than correct.


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

* My usage logs and context are provided as comments in my code.

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

The hardest part of writing is spitting out the first draft. The writer Sean Platt puts it this way: “The first draft is your “vomit onto the keyboard” draft, wherein your task is to simply keep moving and outrun your doubts.”

This site makes it easier to produce that first draft by hiding your writing as you go, forcing you to just get words on the page without second guessing and over-editing. As indicated by Platt's quote, in the writing business this type of draft is known as a "vomit draft," and I haven't encountered another site or app that's focused on producing vomit drafts.

## High-Fi Prototypes

### *Validating Assumptions*

Before I ran my usability tests, I asked my testers to explain their writing processes - to validate/refute my assumptions about the site. Both testers described the importance of writing a first draft without interruption. (E.g., “If I start going back, I’m going to interrupt it and lose whatever I was going to say.") However one tester reported struggling with finishing a first draft if they don’t have an outline or plan.

### *Prototype 1*

![Flow 1: Write and save draft](../final-project/images/Prototype%201.png)

User arrives on the homepage where they can start drafting a story. As they draft, the word count tallies the length of their text. When they're ready to save the draft, they press Save Draft and it appears in the History tab. They can then keep writing or start a new draft.

1 tester was confused about the appearance of the "curtain" that hides part of the draft - they thought it was a glitch when it appeared suddenly.

Both testers described the drafting experience as a useful exercise for their writing process.

### *Prototype 2*

![Flow 2: Delete a previous draft](../final-project/images/Prototype%202.png)
User selects a previous draft from the History tab, opens the menu, and deletes it ("Move to trash").

1 tester expected to see the word count on the draft history pages. Otherwise the prototype met expectations.

## Usability Test

I asked each tester to complete 2 tasks: 
- (Prototype 1) Write a 40-word story and keep it for later. 
- (Prototype 2) Delete a previously written story

Test 1 had a 50% completion rate. 1 tester didn't complete the task successfully because they expected to save the draft by copy-pasting (as opposed to pressing the Save Draft button).

Test 2 had a 50% completion rate. 1 tester didn't complete the task successfully because the History tab didn't look to them like a list of previous drafts - they thought it was all one story and expected to see a gallery view of drafts by clicking History.

## Updated Designs

![Updated History tab](../final-project/images/Updated%20landing%20page.png)

Based on confusion about the History tab, I adjusted the spacing and added a hover state so it’s clear that these are all separate drafts. I also added a “copy text” option to the drafting page because of how P1 expected to save the draft for later.

![Slower curtain](../final-project/images/veil%20appearance.gif)

I slowed down the appearance of the text mask so that it looks more intentional, based on confusion from user test 1.

## Feedback Summary

**Flow/Interface Questions**
- After trashing a page, where does someone locate the trash?
- How does someone start a new draft other than from the homepage landing state?
- When someone starts the timer, what happens? Do they choose from a list of possible times?

**Design Recomendations**
- Try glassiness or transparency on the curtain (didn't have time to ask for more input on what problem this would address)
- Make the "start writing" instructions on the landing state a grayed out placeholder, so there's an affordance along with the written instructions
- Add a gallery page for all History items in case the list of previous drafts gets long
- Add branding, even if it's just the name of the site

**Concept Ideas/Questions**
- Consider creating a way for the site to give writing prompts
- Do people usually start their writing process with a title? (If so, that should be allowed for in drafting page)

## Milestones

### *Implementation Plan*

- [X] Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Decide whether/how to include an outlining option in the site (based on user test 2)
  - [X] Make site map
  - [X] Make list of all functionality and prioritize it
  - [X] Update prototype based on lab feedback
  - [X] Start developing color palette
  - [X] Code HTML for all pages
  - [X] Start coding CSS for all pages

- [ ] Nov 11 \- Nov 15: 
  - [X] FP Check-in
  - [X] Finish developing color palette
  - [ ] Finish coding CSS for all pages
  - [X] Start coding JS for priority functionality

- [ ] Nov 18 \- Nov 22:   
  - [ ] Continue coding JS for priority functionality

- [ ] Nov 25 \- Nov 29:
  - [ ] Continue coding JS for priority functionality
  - [ ] Run usability tests

- [ ] Dec 2 \- Dec 6:  
  - [ ] Make high-priority updates from usability tests
  - [ ] FP4 due 

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 

- https://darkmodejs.learn.uno/
- Clipboard API: https://www.sitepoint.com/clipboard-api/

## Generative AI Use Plan

### *Tool Use*

* Perplexity / ChatGPT
  * I will use it for algorithmic thinking because it can help me evaluate logic in code I've written and point out potential errors
  * I will use it to suggest functionality when I'm stuck because it can help me identify JS that I'm unfamiliar with that will accomplish what I need
  * I will not use it for writing 5+ lines of code because with more lines of code it's more likely to make errors or produce code that I won't understand

### *Responsible Use*

How would you use Generative AI responsibly? 
- Cite anything suggested by Gen AI in comments
- Code trace anything suggested by Gen AI to ensure I understand it

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: First-draft Writing Site*

![idea 1 drafting page](../final-project/images/first%20draft%20landing%20page%20sketch.png)

The hardest part of writing is spitting out the first draft. The writer Sean Platt puts it this way: “The first draft is your “vomit onto the keyboard” draft, wherein your task is to simply keep moving and outrun your doubts.”

This site makes it easier to produce that first draft by hiding your writing as you go, forcing you to just get words on the page without second guessing and over-editing. As indicated by Platt's quote, in the writing business this type of draft is known as a "vomit draft," and I haven't encountered another site or app that's focused on producing vomit drafts.

**How I plan to make this site interactive/engaging**

The site is interactive by definition because users must input text content to create their drafts. As they type, the text will scroll up and become obscured. Users will also have the option to set a timer.

**How I plan to make this site accessible**

- I'd like to have the option to dictate text rather than type it
- Site settings will give the user control over the text size, how many lines are visible/obscured, and light mode/dark mode

**What information I need to convey**

- Text content as the user enters it
- Where the timer is in its countdown
- Text from drafts the user has completed

### *Idea 2: Fantasy Musem*

![idea 2 gallery page](../final-project/images/fantasy%20museum.png)

For most of us, art is an emotional experience. For the ultra-wealthy, it’s just another investment.

This site will parody the commodification of art by transforming a digital art collection into a fantasy sports experience. Users will choose real-world artworks to include in their collections and the total value of their collection will be determined by how each artwork performs in Sotheby's auctions. The most expensive collection "wins."

I'll rely on the aesthetics of fantasy sports sites (black/italic fonts, dark interface with bright green/yellow/red accent colors, etc.) to ensure that the site comes across as a game/parody.

**How I plan to make this site interactive/engaging**

- Users will select artworks from a gallery to include in their collections
- Users will get to choose other players' art collections to explore

**How I plan to make this site accessible**

- All art visuals will get descriptive alt text

**What information I need to convey**

- Artwork title, artist, and year
- Final price of each artwork
- Total price of each collection
- How players' collections compare to one another in terms of total price

### *Idea 3: Ideation Gym*

![idea 3 landing page](../final-project/images/landing%20page.png)
![idea 3 chosen method](../final-project/images/after%20spinning.png)
![idea 3 info about method](../final-project/images/learn%20more%20about%20method.png)

This site gives randomized ideation prompts/methods to help creative people practice their brainstorming skills.

**How I plan to make this site interactive/engaging**

Users can "spin" a wheel which will land on a given ideation method (e.g. Crazy 8s). Users can also select a random ideation prompts (e.g. How might we make junk food healthy?)

**How I plan to make this site accessible**

- All visual content will also be available in text format
- I will probably have text on the wheel feature, so I'll test text color-vs-background color for contrast

**What information I need to convey**
- Ideation prompts (most likely a "how might we" statement)
- Ideation methods
- Educational information about each method, in case it's new to the user

## Feedback Summary

Overall, people were most excited by the First Draft site idea - people said it was the most original and technically feasible of my three ideas.

**Feedback about Idea 1**

- I heard that there are some assumptions embedded in my idea that need to be tested - namely, do most writers want/need to start their process with a vomit draft? Critiquers also wondered how the vomit draft fits in to the larger writing process (what comes immediately before and immediately after?) to ensure the site is useful to writers.
- A couple of people pointed out that my initial sketch didn't account for the process of completing a draft. As a result of this I'll design a button or some other method to mark a draft as complete.
- Other features that were raised:
-- Copy draft content
-- A "collection" view of all completed drafts
-- Search draft history for a given keyword
-- Share/collaborate mode

**Feedback about Idea 2**

- I heard positive feedback about this as a concept (e.g., "I feel like this is a fun game!") but many people thought the scope was overwhelming. 
- To reduce the scope, I could make it a one-time game with hard-coded final prices for each artwork - so that the site doesn't need to be continually updated with new artwork visuals and real-time Sotheby's auction data.
- People had a lot of questions about the flow of the game, so if I pursue this idea my next step will be to sketch out a site map and the primary flows.

**Feedback about Idea 3**

- Overall this was the least exciting idea to people - most felt that it's not addressing a significant problem with the creative process. One person pointed out that anyone who wants to randomize brainstorming methods would probably just use ChatGPT for this.
- One person pointed out a logic issue with this idea: not all prompts necessarily work with all ideation methods

## Feedback Digestion

Based on today's feedback, I'd like to pursue Idea 1 due to the emotional response it generated during lab and because it aligns well with the storytelling in my UX portfolio about my journey from journalism to design.

**Feedback to incorporate**

- I'll do desktop research about how creative writers approach their process to test the assumption that this site will be useful as a starting point. If that assumption isn't validated I'll need to either reconsider the site concept or pivot to Idea 2.
- As mentioned I'll explore solutions for users to mark a draft as completed 
- The "collection" view of all compmleted drafts will solve for the potential problem of the "History" feature in my mockup getting too long if there are a lot of drafts
- Search draft history could be useful because the nature of the site means the drafts won't have a lot of internal organization to make them easy to browse

**Feedback to dismiss**

- Share/collaborate mode likely doesn't align with the purpose of the site; if other people are viewing the site, that introduces potential anxiety/doubt about what the user wrote
- I'm not sure how necessary a copy-text feature would be - I'd need to hear that from users during testing before I implement it
