# Exalynt Website Restructure Specification

## Purpose

Restructure the Exalynt website so that it is **not primarily a consulting landing page**.

Exalynt is my professional home for exploring, defining, and practicing **excellence in software engineering**.

The website should communicate four things:

1. **What excellent software engineering means to me**
2. **Who I am and why I care about the craft**
3. **What I am building, learning, and writing about**
4. **How people can get in touch with me**, whether they simply want to talk about engineering or are interested in consulting/contract work

Consulting is part of Exalynt, but it should **not define the brand or dominate the website**.

The site should still be useful and meaningful even if no visitor is looking to hire me.

---

# Core Brand Idea

## Exalynt Engineering

**The pursuit of excellence in software engineering.**

Excellence is not perfection.

Excellent engineers make mistakes. They choose the wrong abstraction. They misunderstand requirements. They build things that need to change. They try ideas that fail.

What distinguishes excellent engineers is how they respond.

They:

- Own their mistakes.
- Learn from failure.
- Continually improve.
- Care about their craft.
- Seek to understand the real problem before reaching for a solution.
- Treat code as a tool rather than the goal.
- Care about users and the people affected by their work.
- Exercise judgment rather than blindly following rules or trends.
- Experiment even when success is not guaranteed.
- Share what they learn.
- Help the engineers around them grow.
- Take pride and find joy in doing engineering well.

Excellence is therefore not a destination or a claim of flawlessness.

**It is a practice.**

The Exalynt visual identity should reinforce this idea. The Exalynt X contains an upward trajectory that can dip before continuing higher. This represents an important part of the philosophy:

> Progress is not always a straight line. Failure and setbacks can become part of an upward trajectory when we learn from them.

---

# Site Architecture

Use the following primary site structure:

```text
/
├── engineering
├── writing
│   └── [article]
├── projects
│   └── [project]        # optional initially
├── about
└── contact
```

Primary navigation:

```text
Engineering   Writing   Projects   About   Contact
```

The Exalynt logo/wordmark should link back to `/`.

Do **not** add Consulting as a primary navigation item initially.

Consulting should be discoverable through the About and Contact pages and through small contextual calls to action.

A dedicated `/consulting` page can be added later if consulting becomes significant enough to justify it.

---

# Home Page

## Goal

The homepage should answer:

> What is Exalynt, what does it stand for, and what can I find here?

It should introduce the philosophy without trying to contain the entire manifesto.

The homepage should **not** feel like a SaaS landing page or consulting sales funnel.

---

## Section 1 — Hero

### Eyebrow

`EXALYNT ENGINEERING`

### Heading

# The pursuit of excellence in software engineering.

### Supporting copy

Software engineering is more than writing code.

Exalynt is my exploration of what it means to practice engineering exceptionally well — not perfectly. It is about better judgment, continual learning, pride in the craft, solving problems that matter, and leaving our software and the people around us better than we found them.

### Actions

Primary:

`Explore Engineering →`

Links to `/engineering`.

Secondary:

`About Me →`

Links to `/about`.

### Visual direction

Use the Exalynt X prominently.

The trajectory/dip in the X can subtly reinforce the idea that progress is not linear.

Do not use generic stock photography of developers, laptops, code screens, handshakes, or office meetings.

---

# Section 2 — Excellence, Not Perfection

### Eyebrow

`THE IDEA`

### Heading

# Excellence is not perfection.

### Copy

Excellent engineers aren't perfect engineers.

They make mistakes. They choose the wrong abstraction. They miss an edge case. They ship things that need to change. They try ideas that fail.

Excellence is found in what happens next: owning the mistake, learning from it, improving the work, and carrying that knowledge forward.

### Highlight

> Excellence does not mean never failing. It means caring enough to learn, improve, and try again.

### CTA

`What excellence means →`

Links to `/engineering`.

### Visual direction

This section should have strong typography and generous whitespace.

Optionally use a simple trajectory graphic that briefly moves downward before continuing upward.

---

# Section 3 — Principles Preview

### Eyebrow

`THE PRACTICE`

### Heading

# What excellence looks like.

Use six compact cards or visual items.

These are previews rather than full explanations.

---

### Own the outcome

Take responsibility for the work, especially when it goes wrong.

Suggested icon: compass, flag, or check/ownership symbol.

---

### Stay a student

Seek feedback, question assumptions, experiment, and continually refine your judgment.

Suggested icon: open book or upward path.

---

### Practice the craft

Care about clarity, simplicity, maintainability, reliability, and the details that make good systems good.

Suggested icon: tools or code brackets.

---

### Solve the right problem

Code is a tool, not the goal. Understand the problem before deciding what should be built.

Suggested icon: target.

---

### Be willing to fail

Try thoughtful ideas whose outcomes are not guaranteed. Failed experiments can still produce valuable knowledge.

Suggested icon: branching path or experiment/flask.

---

### Lift others

Share what you know, help others grow, listen to the people you serve, and make the people around you better.

Suggested icon: people with upward arrow.

---

CTA:

`Explore the principles →`

Links to `/engineering`.

---

# Section 4 — Projects Preview

### Eyebrow

`BUILDING`

### Heading

# Building in public.

### Intro

Excellence is something to practice, not just write about. These are some of the things I am currently building, experimenting with, or contributing to.

Display approximately 2–4 project cards.

Each project should support:

- Name
- Logo/icon if available
- Short description
- Status
- Technologies/tags
- Project website
- GitHub link
- Optional internal detail page

Example status values:

- Active
- Experiment
- Open Source
- Coming Soon
- Maintained
- Archived

Example card:

```text
PROJECT NAME                         ACTIVE

Short explanation of what the project is and why
it exists.

Go · React · Open Source

GitHub ↗    Visit Project ↗
```

CTA:

`See all projects →`

Links to `/projects`.

It is acceptable and encouraged to show interesting **Coming Soon** projects.

---

# Section 5 — Writing Preview

Only display this section once writing exists.

### Eyebrow

`WRITING`

### Heading

# Thinking out loud.

### Intro

Notes and essays about software engineering, architecture, building systems, learning from failure, and practicing the craft well.

Display the latest 3 articles.

Each should show:

- Title
- Date
- Optional category
- Short description
- Reading time if available

CTA:

`See all writing →`

Links to `/writing`.

Until articles exist, either hide this section entirely or use a restrained "Writing coming soon" treatment. Do not fill the page with placeholder article cards.

---

# Section 6 — About Preview

### Eyebrow

`ABOUT`

### Heading

# Hi, I'm John.

Use a real photo here if one is available.

### Copy

Keep this short — approximately 2–3 paragraphs at most.

Introduce me as a software architect and engineer who enjoys building systems, solving difficult problems, learning, teaching, and thinking deeply about what makes engineering genuinely good.

Explain briefly that Exalynt grew from my desire to explore and share those ideas while building things of my own.

Do not reproduce a résumé on the homepage.

### CTA

`More about me →`

Links to `/about`.

---

# Section 7 — Contact

### Eyebrow

`GET IN TOUCH`

### Heading

# Let's talk.

### Copy

Want to talk software architecture? Disagree with something I wrote? Have an interesting engineering problem? Want to show me something you're building? Or interested in working together?

I'd be glad to hear from you.

You do not need to have a project or consulting engagement in mind to reach out.

### Primary CTA

`Email john.peterson@exalynt.com`

### Secondary note

I am also available for select consulting and contract software engineering work.

Optional secondary CTA:

`More ways to get in touch →`

Links to `/contact`.

---

# Engineering Page

Route:

`/engineering`

## Purpose

This is the philosophical center of Exalynt.

The homepage introduces engineering excellence.

This page should answer:

# What does excellent software engineering look like?

This page can be longer and more editorial than the homepage.

It should feel like a living engineering manifesto rather than a corporate "Our Values" page.

---

## Suggested Structure

### 1. What is excellence?

Define excellence as a continual pursuit or practice rather than a final state.

Possible core statement:

> Excellence is the ongoing pursuit of doing worthwhile things exceptionally well.

Explain that excellence requires standards while recognizing that improvement never truly ends.

---

### 2. Excellence is not perfection

Explore this distinction in greater depth.

Possible side-by-side comparison:

#### Perfection

- Avoids mistakes
- Treats failure as something to hide
- Waits for certainty
- Focuses on appearing finished
- Creates an impossible destination

#### Excellence

- Owns mistakes
- Learns from failure
- Acts thoughtfully despite uncertainty
- Continually improves the work
- Pursues high standards without pretending to be flawless

---

### 3. Care about the problem

Excellent engineering begins before code.

Questions worth asking:

- Who are we helping?
- What are they actually trying to accomplish?
- What problem are we solving?
- What constraints actually matter?
- Should software solve this problem at all?
- What is the simplest responsible solution?

Core idea:

> Code is a tool. Software is a means. Helping people is the outcome.

---

### 4. Care about the craft

Engineering is a profession and a craft worth doing well.

Discuss:

- clarity
- simplicity
- maintainability
- reliability
- thoughtful architecture
- communication
- professionalism
- pride in quality

Avoid turning this into dogmatic rules about "clean code."

Judgment and context matter.

---

### 5. Own the outcome

Excellent engineers take responsibility.

Mistakes should not be hidden or treated primarily as opportunities to assign blame.

Own the mistake, understand it, fix what needs fixing, and improve the system or your own judgment so the lesson compounds.

---

### 6. Be willing to fail

Engineering contains uncertainty.

Trying only things that are guaranteed to work limits learning and innovation.

Thoughtful experimentation is valuable even when the result is failure.

A failed idea that teaches us something important is not necessarily wasted work.

Connect this section visually to the Exalynt X trajectory.

---

### 7. Exercise judgment

There is rarely one universally correct architecture, technology, pattern, or practice.

Excellent engineers understand tradeoffs.

They choose solutions based on the problem and its context rather than trends, ideology, résumé value, or technical novelty.

---

### 8. Lift others

Engineering excellence should improve more than software.

Excellent engineers:

- share knowledge
- mentor
- listen
- give useful feedback
- help teammates succeed
- care about users
- make difficult concepts easier for others
- leave teams stronger than they found them

---

### 9. Keep improving

Bring the philosophy together.

Suggested closing:

> Learn. Build. Reflect. Improve. Help others. Repeat.

Each cycle should leave us a little better than where we started.

Use the Exalynt X as a visual anchor here.

---

# Writing Page

Route:

`/writing`

## Purpose

This is where longer-form thinking lives.

Prefer the term **Writing** rather than **Blog** throughout the UI.

### Heading

# Writing

### Intro

Thoughts on software engineering, architecture, building systems, technical leadership, learning, failure, and the craft of creating useful software.

---

## Article List

Articles should support:

- Title
- Date
- Description/excerpt
- Category
- Tags if useful
- Reading time
- URL slug

Do not over-engineer categories initially.

Possible categories that can emerge over time:

- Engineering
- Architecture
- Leadership
- Building
- Notes

---

## Article Footer

Consider ending articles with a conversational CTA:

### What do you think?

I write these to develop and share ideas, not to declare the final word. If you see something differently or have experience with the topic, I'd like to hear from you.

`Email me →`

This reinforces that Exalynt should encourage engineering conversation rather than simply broadcast opinions.

---

# Projects Page

Route:

`/projects`

## Purpose

Show what I am actually building.

Avoid framing this as a traditional agency portfolio or collection of client case studies.

### Heading

# Things I'm building.

### Intro

Projects, open-source software, experiments, and other things I'm currently exploring.

---

## Suggested Groups

Only show groups that actually contain projects.

### Active

Things currently under active development.

### Open Source

Libraries, tools, applications, or contributions available publicly.

### Experiments

Ideas being tested or explored.

### Coming Soon

Projects worth mentioning but not yet available.

### Past

Interesting projects that are no longer actively developed.

---

## Project Data Model

Structure project content so new projects can easily be added without changing page layout.

Suggested fields:

```ts
type Project = {
  name: string;
  slug?: string;
  description: string;
  longDescription?: string;
  status: "active" | "open-source" | "experiment" | "coming-soon" | "maintained" | "archived";
  technologies?: string[];
  website?: string;
  github?: string;
  logo?: string;
  featured?: boolean;
};
```

Featured projects should appear on the homepage.

---

# About Page

Route:

`/about`

## Purpose

Introduce the person behind Exalynt.

This should be personal and professional without becoming a résumé dump.

### Heading

# Hi, I'm John.

---

## Suggested Content Flow

### Who I am

Explain that I am a software architect and engineer.

Discuss the kinds of engineering work and problems I enjoy.

Keep the tone conversational.

---

### Why Exalynt exists

Explain that Exalynt comes from an interest in understanding and encouraging excellence in software engineering.

It is a place to:

- articulate engineering principles
- write about lessons and ideas
- build software
- experiment
- share what I learn
- connect with other engineers

---

### Experience

Provide a concise overview of relevant experience and credibility.

Focus on themes and outcomes rather than duplicating a full chronological résumé.

A résumé and LinkedIn profile can be linked separately.

---

### What I'm interested in

This can include topics such as:

- software architecture
- distributed systems
- backend engineering
- platform engineering
- observability
- developer experience
- engineering leadership
- experimentation
- building useful products

Keep this easy to update.

---

## Working With Me

Near the bottom, include a smaller section:

### Working with me

I am open to select consulting and contract work where thoughtful engineering, sound architecture, and experienced technical judgment can make a meaningful difference.

Areas where I may be useful include:

- Software architecture
- System design
- Backend/platform engineering
- Architecture reviews
- Difficult technical decisions
- Technical strategy
- Engineering mentorship and guidance

CTA:

`Get in touch →`

Links to `/contact`.

Consulting should be present but should **not dominate the About page**.

---

# Contact Page

Route:

`/contact`

## Purpose

Make contacting me feel welcoming and low-friction.

This page should explicitly communicate that contacting me is **not limited to business inquiries**.

### Heading

# Say hello.

### Copy

You don't need a project or consulting engagement to reach out.

If you want to talk about something I've written, software architecture, an interesting problem you're working through, something you're building, or engineering in general, send me a note.

And if you're looking for consulting or contract engineering help, I'm open to hearing about that too.

---

## Contact Methods

Primary:

`john.peterson@exalynt.com`

Also include links where appropriate:

- GitHub
- LinkedIn

If social profiles are added later, keep the list restrained.

Do not add a complex lead-generation form unless there is a real need for one.

Email is sufficient initially.

---

# Consulting Positioning

Consulting is an **outcome of the Exalynt brand**, not the brand itself.

The desired visitor journey is something like:

```text
Discovers Exalynt
       ↓
Reads an engineering idea
       ↓
Reads an article / sees a project
       ↓
Understands how I think and work
       ↓
Gets to know me
       ↓
Starts a conversation
       ↓
Potential consulting relationship
```

This is preferable to:

```text
Landing page
       ↓
Services
       ↓
Hire me
```

Do not use aggressive sales language.

Avoid repeated CTAs such as:

- Start a project
- Book a call
- Hire me
- Let's work together

Instead favor conversational language:

- Explore Engineering
- Read More
- See What I'm Building
- About Me
- Get in Touch
- Say Hello

---

# Design Direction

## Overall

The site should feel:

- thoughtful
- professional
- calm
- technical without looking like a developer-tool SaaS
- personal without looking like a résumé site
- opinionated without feeling self-important
- minimal without feeling empty

Use generous whitespace and strong typography.

Avoid filling every section with cards.

Mix:

- editorial text
- diagrams
- icon grids
- project cards
- strong pull quotes
- large visual statements

This should give the page rhythm.

---

# Exalynt X Motif

The X should become part of the visual language, not merely a logo in the header.

The important visual concept is the trajectory:

```text
progress
   ╲
    ╲
     ╲  setback
      ╲╱
       ╲
        ╲────↗
```

This is conceptual only; use the actual Exalynt mark rather than recreating this ASCII shape.

The visual represents:

**Progress → setback → learning → improvement → higher than before**

Potential uses:

- Hero watermark
- Engineering page illustrations
- Section dividers
- Failure/learning section
- Footer treatment
- Subtle background graphics

Do not overuse it.

---

# Icons and Imagery

Prefer simple line icons and custom geometric visuals.

Useful concepts include:

- target — solving the right problem
- compass — judgment/ownership
- book — learning
- tools — craft
- branching path — experimentation
- people/upward arrow — lifting others
- trajectory — continual improvement

Avoid generic stock imagery such as:

- code displayed on monitors
- hands typing
- developers staring at laptops
- business handshakes
- fake team meetings
- generic server racks

A real photo of me is appropriate on the Home/About pages because Exalynt is intentionally personal.

---

# Footer

Keep the footer simple.

Suggested content:

```text
Exalynt Engineering

Pursue excellence.
Learn continuously.
Build things that matter.

Engineering
Writing
Projects
About
Contact

GitHub
LinkedIn

© [year] Exalynt
```

Do not overload the footer.

---

# Responsive Behavior

The site must work well on mobile.

Important behaviors:

- Primary navigation should collapse cleanly.
- Principle grids should stack.
- Project cards should remain readable without horizontal scrolling.
- Large decorative Exalynt graphics should never obscure text.
- Typography should remain comfortable rather than simply shrinking desktop layouts.
- CTAs should remain easy to tap.
- Long-form Engineering/Writing content should have a comfortable maximum reading width.

---

# Implementation Guidance

## Reuse Existing Design System

Preserve good existing foundational elements where practical:

- typography
- spacing scale
- buttons
- container widths
- colors
- Exalynt logo/mark
- existing responsive conventions

Do not rewrite the entire visual system merely to implement the new information architecture.

Refactor components where needed so the site can grow.

---

## Suggested Components

Consider reusable components such as:

```text
SiteHeader
SiteFooter
SectionIntro
Eyebrow
Button
PrincipleCard
ProjectCard
ArticlePreview
StatusBadge
ContactCTA
ExalyntMark
```

Do not abstract tiny pieces purely for the sake of abstraction.

---

## Content Architecture

Avoid hardcoding large content collections directly inside page components where practical.

Projects and writing should be data/content driven.

Possible structure:

```text
src/
├── components/
├── content/
│   ├── projects.ts
│   └── writing/
├── pages/
│   ├── Home.tsx
│   ├── Engineering.tsx
│   ├── Writing.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   └── Contact.tsx
```

Adapt this to the project's existing framework and conventions rather than forcing this exact directory structure.

---

# Initial Implementation Priority

Implement in this order:

## Phase 1

1. Global navigation/footer
2. Home
3. Engineering
4. About
5. Contact
6. Projects

The site should be fully useful at this point.

## Phase 2

Add Writing once the first real article exists.

Avoid creating fake placeholder content simply to make the Writing page appear populated.

## Phase 3

As content grows:

- individual project pages
- article categories/tags
- related writing from Engineering principles
- richer project histories
- optional dedicated Consulting page

Do not build these prematurely.

---

# Most Important Constraint

When restructuring the site, keep this hierarchy in mind:

```text
                 EXALYNT
                    │
       Excellence in Engineering
                    │
    ┌───────────────┼───────────────┐
    │               │               │
 THINKING         BUILDING         PERSON
    │               │               │
Engineering       Projects          About
 Writing         Open Source        Contact
    │               │               │
    └───────────────┼───────────────┘
                    │
                 CONSULTING
              when appropriate
```

**Consulting sits underneath the Exalynt philosophy rather than above it.**

The website should first make someone think:

> "I understand what Exalynt stands for, and I want to explore more."

Then:

> "I understand how John thinks about engineering."

And eventually, when relevant:

> "This is someone I would like to talk to or work with."

That is the intended experience.
