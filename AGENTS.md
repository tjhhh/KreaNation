# AGENTS.md

# Project: KreaNation

## Product Vision

KreaNation is a modern landing page designed to encourage Indonesian youth to create meaningful digital works through creativity, collaboration, and technology.

KreaNation is not a formal educational institution, government campaign, or corporate training platform.

It should feel like a welcoming community and movement where young people can learn, collaborate, build projects, and create positive impact through digital products.

The experience should inspire action, curiosity, and a sense of belonging.

---

# Mission

Help young Indonesians transform ideas into meaningful digital works.

The platform encourages users to:

* Learn new skills
* Build real projects
* Collaborate with others
* Create positive impact

---

# Target Audience

Primary Audience:

* High school students
* University students
* Fresh graduates
* Beginner developers
* Beginner designers
* AI enthusiasts
* Content creators
* Young innovators

Age Range:

* 16–30 years old

Characteristics:

* Interested in technology and creativity
* Want to build something meaningful
* Often unsure where to start
* Need motivation and community support
* Prefer modern and visually appealing experiences
* Value collaboration and learning by doing

---

# Core Message

Big Idea:

"Great impact starts from small ideas."

KreaNation helps young people transform ideas into digital works that create real-world impact.

Examples of digital works:

* Portfolio websites
* Educational applications
* AI-powered tools
* Community platforms
* Digital campaigns
* UI/UX design projects
* Creative content
* Social impact projects

---

# UX Psychology Principles

All content, design, and interaction decisions should follow these principles.

## 1. Sense of Belonging

Users should feel:

* Welcome
* Supported
* Understood
* Part of a community

Use language such as:

* We
* Together
* Community
* Collaborate
* Build together

Avoid language that sounds commanding, judgmental, or superior.

---

## 2. Clear Personal Benefits

Users should immediately understand:

* What they can learn
* What they can create
* Why it matters

Every major section should answer:

"What's in it for me?"

---

## 3. Low Friction

Starting should feel easy.

Avoid:

* Complex requirements
* Technical jargon
* Large commitments
* Intimidating language

Emphasize:

* Small first steps
* Beginner-friendly environment
* Learning by doing

---

## 4. Social Proof

Show that other people are already participating.

Examples:

* Members joined
* Projects created
* Mentors involved
* Community achievements

Users should feel:

"People like me are doing this too."

---

## 5. Positive Motivation

Inspire users without pressure.

Avoid:

* Fear-based messaging
* Guilt-based messaging
* Competitive superiority

Prefer:

* Growth
* Learning
* Contribution
* Collaboration

---

# Design Direction

## Visual Style

The design should feel:

* Modern
* Clean
* Friendly
* Creative
* Professional
* Youth-focused

Design inspirations:

* Linear
* Notion
* Stripe
* Framer
* Vercel

---

## Design Principles

Prioritize:

* Strong visual hierarchy
* Large whitespace
* Clean typography
* Consistent spacing
* Clear calls-to-action
* Readability

Avoid:

* Cluttered layouts
* Excessive gradients
* Overly decorative elements
* Unnecessary animations
* Visual noise

---

## Color Palette

Primary:

* Red

Secondary:

* White

Neutral:

* Light Gray

Accent:

* Soft gradients
* Subtle shadows

Colors should communicate:

* Energy
* Creativity
* Optimism
* Action

---

## Typography

Typography should feel:

* Modern
* Clean
* Readable

Prefer:

* Large headlines
* Comfortable reading sizes
* Consistent font scale

---

# Landing Page Structure

## 1. Hero Section

Purpose:

Immediately communicate value.

Must answer:

* What is KreaNation?
* Who is it for?
* Why should I care?

Hero should include:

* Strong headline
* Supporting description
* Primary CTA
* Supporting visual

CTA examples:

* Start Creating
* Join the Community
* Explore Projects

---

## 2. Journey Section

Purpose:

Explain how users grow inside KreaNation.

Suggested journey:

Learn → Build → Impact

Each step should feel simple and achievable.

---

## 3. Digital Works Showcase

Purpose:

Show what users can actually create.

Examples:

* Website for local businesses
* Educational platform
* AI productivity tools
* Creative campaigns
* Community applications
* Personal portfolio websites

Focus on outcomes rather than technical complexity.

---

## 4. Community Impact Section

Purpose:

Provide social proof.

Examples:

* Community members
* Projects created
* Collaborations
* Mentors

Statistics should feel realistic.

---

## 5. Final CTA Section

Purpose:

Encourage visitors to take action.

Messaging should emphasize:

* Starting small
* Learning together
* Creating impact

---

## 6. Footer

Contains:

* Brand identity
* Navigation links
* Copyright
* Contact information

---

# Architecture Guidelines

Project uses Next.js App Router.

Preferred structure:

src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── constants/
├── data/
├── lib/
├── styles/
└── types/

---

# Component Structure

## Layout Components

components/layout/

Examples:

* Navbar
* Footer

---

## Section Components

components/sections/

Examples:

* HeroSection
* JourneySection
* ShowcaseSection
* ImpactSection
* CTASection

Each section should be self-contained.

---

## UI Components

components/ui/

Examples:

* Button
* Card
* Badge
* SectionTitle

Reusable components should be placed here.

---

# Data Management

Store static content separately.

Examples:

data/navigation.ts
data/statistics.ts
data/showcase.ts

Avoid hardcoded data inside page.tsx.

---

# Development Rules

## Code Quality

Prefer:

* Clean code
* Readable code
* Reusable components
* Maintainable architecture

Avoid:

* Large monolithic files
* Duplicated code
* Hardcoded values

---

## TypeScript

Use proper types for:

* Cards
* Statistics
* Navigation items
* Showcase items

Prefer explicit typing.

---

## Accessibility

Always:

* Use semantic HTML
* Add descriptive alt text
* Maintain proper heading hierarchy

---

## Responsive Design

Mobile-first approach.

Support:

* Mobile
* Tablet
* Desktop

Layouts should adapt naturally without breaking content.

---

# Page Composition Rule

page.tsx should only compose sections.

Avoid placing large UI implementations directly inside page.tsx.

Good:

HeroSection
JourneySection
ShowcaseSection
ImpactSection
CTASection

Bad:

500+ lines of JSX inside page.tsx

---

# Success Criteria

A successful landing page should make visitors think:

* I can do this.
* I belong here.
* I want to learn.
* I want to build something meaningful.
* I want to join this community.

The website should inspire action, not just provide information.
