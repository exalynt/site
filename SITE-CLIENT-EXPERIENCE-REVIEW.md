# Exalynt site: prospective-client experience review

Reviewed September 16, 2026, against the current local revision at <http://localhost:5173/>.

## Overall assessment

**Exalynt's values are clear; its identity as a business someone can hire is less clear.** A prospective client can find useful answers, but must assemble them across pages. Contact is easy to find, yet the surrounding wording makes client work feel secondary.

The strongest material is already on **Work With Us**: concrete problem examples, transparent pricing, spending limits, source-code ownership, and the invitation to bring a problem without a specification. These are worth keeping and making easier to find.

The broader vision—solving problems through custom software, products, and open source—is compatible with a clear client journey. The site needs a consistent explanation of the business and clearer routes into each offering.

## Review scope and limitations

- Reviewed all six local pages in a browser: Home, Work With Us, Projects, About, Contact, and Philosophy.
- Inspected page content, navigation, routes, and styling in the source.
- Checked Home, Work With Us, Projects, and Contact at viewport widths of 320, 375, 390, 768, 901, 1024, and 1280 pixels, plus all six pages at 1440 pixels.
- Checked mobile-menu navigation, the header contact destination, a light/dark theme toggle, local supporting assets, and an unknown route.
- Calculated contrast ratios from the site's color values.
- This is an expert review from a prospective client's perspective, not measured visitor behavior or a formal usability study.
- No inquiry was sent. Email delivery and external destination experiences were not tested.
- No site implementation changes were made as part of the review.

## How quickly can a prospective client find answers?

| Client question                             | Current answer and friction                                                                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is Exalynt?                            | Partly answered. Home describes products, open source, and partnerships; About describes a personal engineering practice and a place to share ideas.                |
| Can you build software for my business?     | Clearly answered on Work With Us. Home could state the offering more directly.                                                                                      |
| Have you solved problems like mine?         | The problem examples help visitors recognize their needs, but there is little evidence of completed work or outcomes.                                               |
| Who would I work with?                      | About introduces John, but his role in delivering Exalynt engagements is not explicit.                                                                              |
| What does it cost?                          | The $200/hour rate and spending-cap example are useful, but sit well down a long page.                                                                              |
| How do I start, and what happens next?      | Email is available. The initial conversation, paid discovery, and next decision are not clearly distinguished.                                                      |
| Who owns the software, and who supports it? | Substantial answers exist, but the custom-software and Exalynt-product arrangements take effort to disentangle.                                                     |
| Can I contact someone quickly?              | Usually yes: a persistent header action leads to Contact. There is a tablet-width overflow problem, and sending an inquiry depends on email or an external service. |

## 1. Give visitors one consistent explanation of Exalynt

### Finding

“Technology should solve problems” communicates a belief. It does not immediately identify the business or explain what someone can hire it to do.

The pages also frame Exalynt differently:

- Home presents products, open source, and direct partnerships with businesses.
- Work With Us presents a definite client offering, including pricing and engagement terms.
- About describes Exalynt as a place to articulate engineering principles, experiment, share ideas, and connect with engineers.
- Contact introduces consulting with “I'm open to hearing about that too.”

Together, these can leave buyers wondering whether client delivery is an established offering or an occasional interest.

### Recommendation

Use a direct explanation of Exalynt on Home, then reinforce it on About and Contact. Suggested positioning:

> Exalynt builds custom software, software products, and open-source tools that solve practical problems.
>
> We help organizations automate workflows, connect systems, and build applications—from understanding the problem through development and operation.

This preserves the broader vision while making the commercial offering explicit.

Explain the relationship between John and Exalynt directly: who founded or runs the business, who does the work, and whether engagements involve John alone or additional collaborators. State the actual delivery model without implying a larger team.

## 2. Help homepage visitors choose their next step sooner

### Findings

- The primary action, “Explore Our Work,” leads to a page containing one project in development. A prospective client may expect examples of delivered client work.
- “Work With Exalynt” is less descriptive than “Custom Software & Consulting.”
- The excellence definition occupies a large part of the opening screen and adds substantial scrolling on mobile.
- Products and Open Source have separate homepage actions, but both lead to the same undifferentiated Projects page.
- “See all projects” leads to the same single project already featured on Home, providing little additional information.
- The closing contact invitation serves many audiences at once, and its primary action returns visitors to Work With Us rather than directly starting an inquiry.

### Recommendations

- Make **Discuss your project** the primary homepage action and **Explore our products and open source** the secondary action.
- Label the service offering **Custom Software & Consulting** so visitors know what they will find.
- Move the excellence definition lower on the page or reserve it for Philosophy.
- Keep the philosophy visible, but let practical information establish its meaning.
- Label a shared Products & Open Source destination honestly, or link to distinct sections on that page.
- Give visitors a substantive next step from the featured project: a project detail, availability information, or a walkthrough. Avoid implying a larger catalog than currently exists.

Recommended homepage order:

1. A direct explanation of Exalynt and its offerings.
2. Three clearly labeled paths: custom software, products, and open source.
3. Recognizable business problems Exalynt can help solve.
4. Evidence of capability: a project walkthrough, relevant experience, or a client outcome.
5. A short explanation of working together, with pricing and process links.
6. A concise statement of philosophy and a contact invitation.

## 3. Simplify navigation and clarify page responsibilities

### Findings

The header has seven text links, social links, a theme toggle, and a contact button. Contact and Get in touch duplicate each other, while Philosophy receives prominent placement ahead of the client offering.

This adds choices without making the main visitor journeys clearer. It also contributes to the observed header layout problems.

### Recommended primary navigation

**Custom Software · Products & Open Source · About · [Get in touch]**

The logo returns home. Blog, Philosophy, and social profiles remain accessible in the footer and relevant page sections.

### Recommended information structure

| Page                   | Main purpose and recommended content                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                   | Explain Exalynt and route visitors according to their interests.                                                                                |
| Custom Software        | Problems Exalynt solves, engagement summary, pricing, process, ownership, support, FAQs, and how to start. Reuse the current Work With Us page. |
| Products & Open Source | Explain what exists, whom it helps, its availability, and how to try or contribute to it.                                                       |
| About                  | Explain Exalynt's identity, introduce the people delivering the work, and establish relevant experience.                                        |
| Contact                | Offer a clear inquiry route and explain what happens afterward.                                                                                 |
| Philosophy and Blog    | Provide depth for visitors who want to understand the thinking behind the work.                                                                 |

With only one listed project, keep products and open source together for now. Separate pages become more useful when there is enough distinct content to justify them.

## 4. Organize Work With Us around buying questions

### Findings

This page contains the strongest client information, but is approximately **8,000 pixels tall on desktop and 11,000 pixels on a 375-pixel-wide phone**. It has no jump navigation.

The dedicated pricing section begins around 4,400 pixels down on desktop. The rate appears earlier in the spending-cap example, so it is not entirely absent before that point. Ownership and getting-started information appear later still.

The page spends substantial space explaining the objections to whole-project estimates before presenting the complete pricing section and initial engagement details.

A buyer reading “We replace estimates with control” may still ask:

> How do I know whether my available budget can produce something useful? What happens if I have a deadline?

Spending limits are valuable, but buyers also need help understanding what those limits might accomplish.

### Recommendations

Put a compact engagement summary near the top. For example:

> $200/hour · Agree on a spending limit before work starts · Start with a small investigation · Receive source code for your custom deliverables under the agreement

Add on-page navigation immediately below it:

**What we build · Pricing · Process · Ownership & support · Getting started**

Then:

- Move “Start with the problem” much earlier.
- Group the ten help examples into recognizable categories, such as workflow automation, applications and integrations, and existing-system improvements.
- Shorten the extended argument against whole-project estimates.
- Explain how a useful first outcome is identified, how uncertainty is communicated, how progress is reviewed, and how both parties decide whether to continue.
- Explain how timing constraints and available budget influence the first piece of work without promising unsupported scope or delivery dates.
- Clarify what happens after launch and how ongoing operation or maintenance is arranged.
- Use concise answers to buying questions as the main structure; retain deeper explanation where it helps visitors evaluate the approach.

### Clarify ownership and hosting

Keep client-owned software as the main explanation for custom-software visitors. Present Exalynt-owned products as a separate, selective arrangement.

In particular, “Let Exalynt operate it” should not imply that having Exalynt host software necessarily requires surrendering ownership. The page already says Exalynt can continue operating client-owned software; make that distinction easier to understand.

Keep the source-code, data-ownership, third-party-license, and agreement qualifications, but avoid making visitors compare two business models before they understand the standard custom-software engagement.

## 5. Connect engineering ability to client outcomes

### Findings

Harvor demonstrates an area of technical interest and activity. It does not yet answer whether Exalynt can deliver a business application for someone else.

About has a useful photo and personal introduction, but emphasizes qualifications, interests, hobbies, and a résumé more than relevant delivery experience.

Harvor's “Production-ready” description beside its “In Development” status also creates uncertainty about what is usable today.

### Recommendations

Add one or two substantive examples covering:

- The problem and who experienced it.
- John's or Exalynt's specific role.
- What was built and why.
- The result, with evidence where available.

If client work cannot be shared, use an anonymized example, a clearly labeled demonstration, or prior professional experience with the contribution accurately attributed. Do not invent client outcomes or present earlier employment work as an Exalynt engagement.

On About, put relevant delivery experience before hobbies and the résumé link. Explain why that experience applies to the problems prospective clients bring.

For Harvor, clarify what is usable today, what remains under development, and who should evaluate it. A short plain-language explanation of the benefit would also help nontechnical visitors understand its relevance.

## 6. Make contacting Exalynt a clear next step

### Strengths

- The persistent contact button makes Contact easy to find at most tested widths, including mobile.
- The email address is visible on Contact, providing a useful fallback.
- The tone is approachable, and visitors are not expected to arrive with a specification.

### Findings

- “Start a Conversation” opens an email application immediately, while other contact actions navigate to a page.
- Contact leads with general engineering conversations and presents consulting as an additional possibility.
- The page does not explain who replies, the expected response timeframe, or what happens after an inquiry.
- The distinction between an introductory conversation and paid investigative work is unclear.
- There is no form alternative for visitors without an email application configured.
- GitHub appears alongside email and LinkedIn as a contact method, although it is more useful as a profile or evidence link for most prospective clients.

### Recommendations

Make email actions explicit with **Email John about your project**, or consistently direct project inquiries to Contact.

Suggested opening copy:

> Tell us what you're trying to improve.
>
> A few sentences about the problem, your current process, and any timing constraints are enough. You do not need a software specification.

Explain who replies, the response timeframe Exalynt can actually maintain, and whether the introductory conversation is free or paid. Distinguish that from the paid investigative work described on Work With Us.

Consider a short inquiry form while keeping direct email available. Only request information needed to begin the conversation.

Keep general engineering conversations welcome in a short secondary paragraph. Treat GitHub as a profile link rather than an equivalent inquiry method.

## 7. Concrete usability and accessibility issues

| Issue                              | Observed evidence                                                                                                                                               | Recommendation                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Header overflow                    | At a 901-pixel viewport, navigation extends to roughly 990 pixels, pushing the contact button off-screen. At 1024 pixels, labels wrap and the logo crowds Home. | Simplify the header and switch to the mobile menu earlier. Ensure the primary contact action remains fully visible. |
| Small-screen project-card overflow | At 320 pixels, the Harvor card makes Home and Projects horizontally scroll; document width is approximately 338 pixels.                                         | Allow the card heading and status to stack or wrap without forcing the card wider than the viewport.                |
| Long client page without shortcuts | Work With Us is approximately 8,000 pixels tall on desktop and 11,000 pixels on a 375-pixel-wide phone.                                                         | Add a quick-answer summary and on-page navigation; reduce repetition and reorder content around buying questions.   |
| Ownership comparison on mobile     | The comparison table has a 640-pixel minimum width inside a horizontally scrollable container. This is contained scrolling, not document overflow.              | Consider stacked comparisons or a clearer cue that the table scrolls, so visitors do not miss the other model.      |
| Text contrast                      | White text on blue buttons measures approximately 3.68:1; gray body text on the alternate light background measures approximately 4.04:1.                       | Adjust these combinations to meet the normal-text contrast threshold.                                               |
| Navigation accessibility           | Pages lack a main-content landmark, a skip link, and a current-page indicator.                                                                                  | Add a main landmark, skip navigation, and visible/programmatic current-page identification.                         |
| Missing-page handling              | An unknown URL displays the default “Unexpected Application Error!” developer screen.                                                                           | Provide a helpful 404 page with routes back to useful site content.                                                 |
| Page identity and metadata         | All pages share the same title, and the description frames Exalynt as a “philosophy and practice.”                                                              | Give pages descriptive titles and align metadata with the business positioning and page content.                    |
| Philosophy numbering               | The visible practice list starts at 04 and continues through 08.                                                                                                | Renumber the standalone list or make the broader numbering context explicit.                                        |

### Contrast measurements

| Foreground / background           | Ratio  | Relevant use                                |
| --------------------------------- | ------ | ------------------------------------------- |
| White `#ffffff` / blue `#3b82f6`  | 3.68:1 | Primary button labels                       |
| Blue `#3b82f6` / cloud `#f7f9fc`  | 3.49:1 | Accent text on the default light background |
| Blue `#3b82f6` / mist `#e8edf3`   | 3.12:1 | Accent text on alternate light sections     |
| Slate `#64748b` / mist `#e8edf3`  | 4.04:1 | Body text on alternate light sections       |
| Slate `#64748b` / cloud `#f7f9fc` | 4.51:1 | Body text on the default light background   |

WCAG's minimum contrast threshold is 4.5:1 for normal-sized text and 3:1 for qualifying large text. Small accent labels and button labels should be evaluated against the normal-text requirement. See [W3C's explanation of Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

These measurements are targeted checks, not a complete accessibility audit.

## Browser-check results

- All six intended pages loaded during the review; no page JavaScript errors were captured in the initial browser sweep.
- The tested mobile menu successfully navigated to Work With Us and closed after navigation.
- The header Get in touch action navigated to Contact.
- Work With Us conversation actions point to `mailto:john.peterson@exalynt.com`.
- The Contact email action points to the same address.
- The résumé PDF, portrait, and Harvor logo returned HTTP 200 with appropriate content types.
- The tested theme control switched Contact to dark mode.
- The unknown-route check produced the default router error page.

### Measured page positions

Positions below are approximate document coordinates from the tested layout. They illustrate the amount of scrolling, not the time a visitor will take to find an answer.

| Work With Us section                          | Desktop, 1440 pixels wide | Mobile, 375 pixels wide |
| --------------------------------------------- | ------------------------: | ----------------------: |
| Opening heading                               |                    207 px |                  205 px |
| Help examples                                 |                    821 px |                  793 px |
| Development process                           |                  1,494 px |                1,844 px |
| Whole-project estimate explanation            |                  2,639 px |                3,204 px |
| Budget controls; rate appears in this section |                  3,415 px |                4,194 px |
| Dedicated pricing section                     |                  4,426 px |                5,663 px |
| Ownership                                     |                  5,227 px |                6,710 px |
| Getting started                               |                  7,018 px |                9,699 px |
| Closing inquiry invitation                    |                  7,569 px |               10,358 px |
| Total page height                             |                  8,034 px |               11,063 px |

## Recommended implementation priorities

### First revision: clarity and access

1. Align Home, About, and Contact around one explanation of Exalynt and its client offering.
2. Simplify primary navigation and make the custom-software route explicit.
3. Add a quick-answer summary and jump navigation to Work With Us.
4. Make Contact explain the next step and distinguish introductory conversation from paid investigation.
5. Fix header and small-screen overflow, contrast, navigation accessibility, and missing-page handling.

### Second revision: confidence and evidence

1. Add substantive examples of delivery experience or project outcomes.
2. Reorder and shorten Work With Us around client questions, especially budget, timing, ownership, and ongoing support.
3. Clarify Harvor's availability and give its project destination more useful detail.
4. Update page titles and descriptions to match the revised information structure.

### As the site grows

Split products, open source, or case studies into separate pages when there is enough distinct material to make those destinations useful. Preserve Philosophy and Blog as ways to explore Exalynt's thinking without requiring visitors to read them to understand the business or begin an engagement.

## Information to confirm before publishing revised copy

The review does not establish these business facts. Confirm them before turning recommendations into public promises:

- Who delivers engagements and how additional collaborators, if any, are involved.
- Whether the initial conversation is free or paid and when billable investigation begins.
- A response timeframe that can consistently be maintained.
- How deadlines, budget feasibility, and the first useful outcome are discussed.
- What post-launch hosting, maintenance, and support arrangements are actually offered.
- Which prior work and outcomes can be shared, and how contributions should be attributed.
- Harvor's current availability and the meaning of “production-ready” alongside “in development.”
