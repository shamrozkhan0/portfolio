// ============================================================
// ALL SITE CONTENT LIVES HERE. Edit this file to add, remove or
// change projects, skills, FAQs and contact links. Pages, routes,
// sitemap, SEO metadata and llms.txt are generated from it.
// ============================================================

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shamrozkhan.dev";

export const person = {
  name: "Shamroz Khan",
  title: "AI Engineer & Full Stack Python Developer",
  headlineLines: ["I turn business", "problems into AI", "products that work."],
  lede:
    "Shamroz Khan is an AI engineer and full stack Python developer. I build AI-powered web applications, AI SaaS products and MVPs, and I start by analyzing your business problem, not by writing code.",
  description:
    "Shamroz Khan is an AI engineer and Python application developer who builds AI SaaS products, MVPs and AI-powered web applications for businesses.",
  keywords: [
    "Shamroz Khan", "AI engineer", "Python application developer", "AI SaaS developer",
    "full stack Python developer", "AI web application developer", "MVP developer",
    "FastAPI developer", "Next.js developer", "AI chatbot developer", "hire AI developer",
  ],
};

export const contact = {
  email: "shamrozkhan0319@gmail.com",
  whatsapp: "+92 3190447886",
  whatsappUrl: "https://wa.me/923190447886?text=Hi%20Shamroz%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
  upwork: "https://www.upwork.com/freelancers/~016524f246b338f543?mp_source=share",
  linkedin: "https://linkedin.com/in/shamrozkhan0",
  github: "https://github.com/shamrozkhan0",
};

export const skillGroups = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", items: ["Python", "FastAPI"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "AI", items: ["OpenAI", "Claude", "Hugging Face", "Groq"] },
  { title: "Tools and delivery", items: ["Docker", "Git", "GitHub"] },
];

export const workflow = [
  { title: "Understand the problem", text: "I study how your business works and where the real bottleneck is before choosing any technology." },
  { title: "Research the stack", text: "Technology shifts fast. I compare current tools and models so the solution is effective and efficient, not just familiar." },
  { title: "Build the AI solution", text: "I build the full product: data handling, backend, AI layer and interface, not only a chatbot wrapper." },
  { title: "Ship and refine", text: "You get a working MVP you can test with real users, then we improve it from what we learn." },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  thesis: string;      // the problem / idea behind it
  solution: string;
  madeFor: string;
  madeBy: string;
  features: string[];
  skills: string[];
};

export const projects: Project[] = [
  {
    slug: "gigbro-ai-fiverr-gig-analyzer",
    name: "GigBro",
    tagline: "Find out why a Fiverr gig gets no clicks, in one click.",
    seoTitle: "GigBro: AI Fiverr Gig Analyzer and SEO Audit Tool",
    seoDescription:
      "GigBro is an AI Fiverr gig analyzer by Shamroz Khan. A browser extension scrapes your gig and returns an SEO audit, SEO score, AI recommendations and trust score in one click.",
    keywords: ["Fiverr gig analyzer", "Fiverr gig SEO", "AI SaaS", "Fiverr SEO audit", "gig optimization tool"],
    thesis:
      "Many Fiverr sellers, whether their gig has strong reviews or none at all, cannot tell what is wrong with it or why it gets so few impressions and clicks.",
    solution:
      "GigBro's browser extension scrapes the gig data and analyzes the whole gig in a single click, then turns it into a clear report the seller can act on.",
    madeFor: "Fiverr sellers",
    madeBy: "Shamroz Khan",
    features: [
      "One-click flow from scraping to full analysis",
      "SEO audit and SEO score",
      "AI recommendations for improving the gig",
      "Pros and cons of the gig",
      "Trust score",
    ],
    skills: ["Browser extension", "Web scraping", "AI analysis", "SEO analysis"],
  },
  {
    slug: "ai-sales-data-analyzer-chat",
    name: "Sales Analyzer Chat",
    tagline: "Upload a messy sales CSV, then ask questions about it.",
    seoTitle: "AI Sales Data Analyzer Chat: CSV to Answers",
    seoDescription:
      "An AI sales analysis program by Shamroz Khan. It imports CSV data, cleans and formats it with pandas, and lets a business team ask an AI questions about their sales.",
    keywords: ["AI sales analyzer", "chat with CSV data", "sales data analysis AI", "FastAPI pandas AI", "business AI chatbot"],
    thesis:
      "Business teams want answers from their sales data, but raw exports are messy and a plain chatbot cannot be trusted with them.",
    solution:
      "This is a complete program, not just an AI prompt. It reads the CSV, formats and cleans the data, and only then lets the team ask the AI questions about their sales.",
    madeFor: "A business sales team",
    madeBy: "Shamroz Khan",
    features: [
      "CSV import",
      "Automatic data formatting and cleaning",
      "Natural-language questions about the sales data",
    ],
    skills: ["Groq Compound AI model", "React", "Python", "FastAPI", "MySQL", "pandas"],
  },
  {
    slug: "software-agency-website",
    name: "Software Agency Website",
    tagline: "A clean portfolio-style website for a software agency.",
    seoTitle: "Software Agency Website: Frontend Design and Development",
    seoDescription:
      "A portfolio-style frontend website for a software agency, designed and built by Shamroz Khan.",
    keywords: ["software agency website", "agency portfolio website", "frontend developer"],
    thesis: "A software agency needed a professional website to present its work to potential clients.",
    solution: "A clear, responsive portfolio-style frontend that presents the agency and its services.",
    madeFor: "A software agency",
    madeBy: "Shamroz Khan",
    features: ["Portfolio-style layout", "Responsive design"],
    skills: ["Frontend development", "Responsive design", "UI design"],
  },
  {
    slug: "interior-designer-website",
    name: "Interior Designer Website",
    tagline: "A visual portfolio website for an interior designer.",
    seoTitle: "Interior Designer Website: Frontend Design and Development",
    seoDescription:
      "A portfolio-style frontend website for an interior designer, designed and built by Shamroz Khan.",
    keywords: ["interior designer website", "designer portfolio website", "frontend developer"],
    thesis: "An interior designer needed a website that shows their work and style to potential clients.",
    solution: "A clear, responsive portfolio-style frontend built around the designer's work.",
    madeFor: "An interior designer",
    madeBy: "Shamroz Khan",
    features: ["Portfolio-style layout", "Responsive design"],
    skills: ["Frontend development", "Responsive design", "UI design"],
  },
];

export const faqs = [
  {
    q: "Who is Shamroz Khan?",
    a: "Shamroz Khan is a professional full stack Python developer and AI engineer. He builds AI-powered web applications and MVPs, and focuses on analyzing a business's problem before building an effective, efficient AI solution for it.",
  },
  {
    q: "What does an AI SaaS developer like Shamroz build?",
    a: "AI-powered web applications, MVPs and AI SaaS products. Examples are GigBro, an AI Fiverr gig analyzer, and a sales analyzer chat that cleans CSV sales data and answers questions about it.",
  },
  {
    q: "Which technologies does Shamroz use?",
    a: "Python and FastAPI on the backend, Next.js, React and TypeScript on the frontend, PostgreSQL, MySQL and MongoDB for data, and OpenAI, Claude, Hugging Face and Groq models for AI. He researches the current stack before each project.",
  },
  {
    q: "Why does Shamroz research before building?",
    a: "Technology changes quickly, and modern tools are what make a solution effective and efficient. Researching first means the stack is chosen for your problem.",
  },
  {
    q: "How can I hire Shamroz Khan?",
    a: "Email shamrozkhan0319@gmail.com, message him on WhatsApp at +92 3190447886, or hire him through his Upwork profile.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
