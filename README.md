# Shamroz Khan: AI Engineer & Python Application Developer Portfolio

**Live site: [https://YOUR-DOMAIN.com](https://YOUR-DOMAIN.com)**

[![Next.js](https://img.shields.io/badge/Next.js-App_Router-1C1917?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-C2562F?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO](https://img.shields.io/badge/SEO-JSON--LD_%2B_sitemap-C2562F)](#seo-and-geo-implementation)

This is the open-source portfolio website of **Shamroz Khan**, an **AI engineer**, **full stack Python developer** and **AI SaaS developer**. Shamroz builds AI-powered web applications and MVPs for businesses. He starts by analyzing the business problem, then researches the current technology stack, and only then builds an effective, efficient AI solution.

The site is built with Next.js (App Router), TypeScript and Motion. All content lives in a single data file, so projects and skills can be added or removed without touching page code.

## Hire Shamroz Khan

Looking for an AI engineer or Python application developer? Get in touch:

| Channel | Link |
| --- | --- |
| Email | [shamrozkhan0319@gmail.com](mailto:shamrozkhan0319@gmail.com) |
| WhatsApp | [+92 3190447886](https://wa.me/923190447886) |
| Upwork | [Hire Shamroz on Upwork](https://www.upwork.com/freelancers/~016524f246b338f543?mp_source=share) |
| LinkedIn | [linkedin.com/in/shamrozkhan0](https://linkedin.com/in/shamrozkhan0) |
| GitHub | [github.com/shamrozkhan0](https://github.com/shamrozkhan0) |

## What Shamroz Khan builds

- AI-powered web applications and AI SaaS products
- MVPs that can be tested with real users quickly
- AI chat tools over business data
- Frontend websites and portfolio sites

## Featured projects

### GigBro: AI Fiverr gig analyzer
Many Fiverr sellers cannot tell why their gig gets few impressions and clicks. GigBro's browser extension scrapes the gig and analyzes it in one click, returning an SEO audit, SEO score, AI recommendations, pros and cons, and a trust score.

### Sales Analyzer Chat
A complete program for business sales teams, not just a chatbot. It imports CSV data, formats and cleans it, and then lets the team ask an AI questions about their sales. Built with the Groq Compound AI model, React, Python, FastAPI, MySQL and pandas.

### Software agency website and interior designer website
Two portfolio-style frontend websites, designed and built for a software agency and an interior designer.

## Skills and technologies

| Area | Technologies |
| --- | --- |
| Frontend | Next.js, React, TypeScript, JavaScript, HTML, CSS |
| Backend | Python, FastAPI |
| Databases | PostgreSQL, MySQL, MongoDB |
| AI | OpenAI, Claude, Hugging Face, Groq |
| Tools | Docker, Git, GitHub |

## How Shamroz works

1. **Understand the problem.** Study how the business works and where the real bottleneck is.
2. **Research the stack.** Technology shifts fast, so compare current tools and models first.
3. **Build the AI solution.** Deliver the full product: data handling, backend, AI layer and interface.
4. **Ship and refine.** Release a working MVP, then improve it from real feedback.

## Getting started

```bash
git clone https://github.com/shamrozkhan0/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your domain
npm run dev                  # http://localhost:3000
```

Build for production with `npm run build` and `npm start`.

## Edit the content

Everything is in `data/portfolio.ts`.

- **Add a project:** add an object to the `projects` array. It automatically gets its own route (`/projects/<slug>`), title, description, keywords, JSON-LD, social image and sitemap entry.
- **Remove a project:** delete its object.
- **Skills, FAQs, workflow, headline and contact links:** edit `skillGroups`, `faqs`, `workflow`, `person` and `contact`.

## Project structure

```
app/                  Routes, metadata, sitemap, robots, llms.txt, social images
components/           Server Components, plus two client leaf components
data/portfolio.ts     All site content
lib/og.tsx            Social image template
```

## SEO and GEO implementation

SEO means ranking in search engines. GEO (generative engine optimization) means being understood and cited by AI assistants. This site uses:

- **Server Components by default.** `"use client"` is used only in the leaf components `HeroHeadline` and `Reveal`, so content is in the server-rendered HTML.
- **Unique metadata per page.** Each project route has its own title, description, keywords, canonical URL, Open Graph and Twitter tags.
- **Structured data (JSON-LD).** Person, WebSite, FAQPage, ItemList, CreativeWork and BreadcrumbList.
- **Crawl files.** `sitemap.xml`, `robots.txt` and `/llms.txt`, a plain-text summary for AI assistants.
- **Answer-style content.** Question-and-answer sections that AI assistants can quote.
- **Entity signals.** Consistent name, role and profile links (`sameAs`) across the site, GitHub, LinkedIn and Upwork.
- **Accessibility and speed.** Semantic HTML, keyboard focus styles, reduced-motion support, and animations kept to a lightweight library.

## Frequently asked questions

### Who is Shamroz Khan?
Shamroz Khan is a professional full stack Python developer and AI engineer who builds AI-powered web applications and MVPs.

### What does an AI SaaS developer like Shamroz build?
AI-powered web applications, MVPs and AI SaaS products such as GigBro and a sales analyzer chat.

### Which technologies does Shamroz use?
Python and FastAPI, Next.js, React and TypeScript, PostgreSQL, MySQL and MongoDB, and OpenAI, Claude, Hugging Face and Groq models.

### How can I hire Shamroz Khan?
Email shamrozkhan0319@gmail.com, message +92 3190447886 on WhatsApp, or use his Upwork profile.

---

Built by [Shamroz Khan](https://github.com/shamrozkhan0), AI engineer and Python application developer.