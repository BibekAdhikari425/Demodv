import { ProjectItem, SkillItem, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: "Alex Mercer",
  title: "Senior Full-Stack & AI Systems Engineer",
  tagline: "Building resilient cloud architectures, real-time web applications, and intuitive AI-driven developer tools.",
  bio: "Passionate engineer with 6+ years of expertise in distributed systems, modern React ecosystem, and generative AI integration. Dedicated to crafting fluid user interfaces backed by scalable microservices.",
  location: "San Francisco, CA (Open to Remote)",
  email: "alex.mercer@dev.io",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availability: "Available for Senior / Lead Full-Stack & AI roles",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Production Projects", value: "35+" },
    { label: "Active Platform Users", value: "120K+" },
    { label: "GitHub Stars Earned", value: "8.5k+" },
  ],
  rolesList: [
    "Senior Full-Stack Engineer",
    "AI Systems Architect",
    "Cloud & Infrastructure Lead",
    "Open Source Contributor"
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    id: "react",
    name: "React 19 & Next.js",
    category: "frontend",
    proficiency: 96,
    experienceYears: 6,
    iconName: "Code2",
    description: "Server components, hooks, state management, streaming SSR, performance tuning.",
    featured: true,
    tags: ["React 19", "Next.js 15", "App Router", "SSR/SSG", "Zustand"]
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: 95,
    experienceYears: 6,
    iconName: "FileCode",
    description: "Strict typing, generic design patterns, AST manipulation, custom linters.",
    featured: true,
    tags: ["TypeScript", "Generics", "Type Guards", "Utility Types"]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS & Motion",
    category: "frontend",
    proficiency: 92,
    experienceYears: 5,
    iconName: "Palette",
    description: "Fluid design systems, high-frame-rate CSS/Framer Motion animations, dark mode.",
    featured: true,
    tags: ["Tailwind v4", "Motion", "CSS Grid", "Design Systems", "A11y"]
  },
  {
    id: "webgl",
    name: "Canvas & Three.js / WebGL",
    category: "frontend",
    proficiency: 82,
    experienceYears: 3,
    iconName: "Sparkles",
    description: "Interactive 3D graphics, particle engines, HTML5 canvas shaders, web charts.",
    featured: false,
    tags: ["Canvas API", "Three.js", "Recharts", "D3.js"]
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js & Express / NestJS",
    category: "backend",
    proficiency: 94,
    experienceYears: 6,
    iconName: "Server",
    description: "Event-driven microservices, REST & GraphQL APIs, WebSockets, stream processing.",
    featured: true,
    tags: ["Node.js", "Express", "NestJS", "WebSockets", "JWT / OAuth"]
  },
  {
    id: "python",
    name: "Python & FastAPI",
    category: "backend",
    proficiency: 88,
    experienceYears: 4,
    iconName: "Terminal",
    description: "Async web APIs, background task queues (Celery), data processing, PyTorch models.",
    featured: true,
    tags: ["Python 3.12", "FastAPI", "Pydantic", "Celery", "Pandas"]
  },
  {
    id: "postgres",
    name: "PostgreSQL & Redis",
    category: "backend",
    proficiency: 90,
    experienceYears: 5,
    iconName: "Database",
    description: "Complex SQL optimization, connection pooling, cache invalidation strategies, Drizzle / Prisma.",
    featured: true,
    tags: ["PostgreSQL", "Redis", "Drizzle ORM", "Prisma", "Database Indexing"]
  },
  {
    id: "go",
    name: "Go (Golang)",
    category: "backend",
    proficiency: 80,
    experienceYears: 3,
    iconName: "Cpu",
    description: "High-concurrency microservices, gRPC interfaces, lightweight CLI tools.",
    featured: false,
    tags: ["Golang", "Goroutines", "gRPC", "Protobuf"]
  },

  // Cloud & DevOps
  {
    id: "docker",
    name: "Docker & Kubernetes",
    category: "cloud",
    proficiency: 89,
    experienceYears: 4,
    iconName: "Container",
    description: "Containerization, Helm charts, multi-stage builds, ingress routing, auto-scaling.",
    featured: true,
    tags: ["Docker", "Kubernetes", "Helm", "Container Security"]
  },
  {
    id: "gcp-aws",
    name: "GCP & AWS Cloud",
    category: "cloud",
    proficiency: 86,
    experienceYears: 5,
    iconName: "Cloud",
    description: "Cloud Run, ECS, Lambda, Cloud SQL, IAM roles, Terraform IaC, S3 / Cloud Storage.",
    featured: true,
    tags: ["GCP Cloud Run", "AWS ECS", "Terraform", "Serverless", "S3"]
  },
  {
    id: "cicd",
    name: "GitHub Actions & CI/CD",
    category: "cloud",
    proficiency: 92,
    experienceYears: 5,
    iconName: "Workflow",
    description: "Automated test pipelines, release versioning, blue-green zero-downtime deployments.",
    featured: false,
    tags: ["GitHub Actions", "CI/CD", "Semantic Release", "Vite"]
  },

  // AI & Architecture
  {
    id: "llm-gemini",
    name: "Gemini API & LLM Orchestration",
    category: "ai",
    proficiency: 92,
    experienceYears: 3,
    iconName: "BrainCircuit",
    description: "Prompt engineering, function calling, structured schema outputs, streaming responses.",
    featured: true,
    tags: ["@google/genai", "Gemini 3.6 Flash", "Function Calling", "Structured Outputs"]
  },
  {
    id: "rag-vector",
    name: "RAG & Vector Databases",
    category: "ai",
    proficiency: 87,
    experienceYears: 2,
    iconName: "Layers",
    description: "Semantic search, vector embeddings, chunking strategies, Pinecone & Qdrant.",
    featured: true,
    tags: ["RAG Architecture", "Pinecone", "Embeddings", "LangChain"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI Workbench",
    tagline: "Real-time collaborative AI canvas & workspace for multi-modal agent workflows.",
    category: "AI / ML",
    description: "An intuitive collaborative workspace that enables engineering teams to visually assemble, test, and deploy Gemini-powered agents with real-time streaming feedback.",
    longDescription: "Nexus AI Workbench was created to bridge the gap between prompt engineering and production deployment. It allows developers to draw DAG-based workflows connecting Gemini LLMs, custom API tool calls, and vector storage engines with live sub-100ms latency.",
    architecturePoints: [
      "Server-Sent Events (SSE) stream Gemini 3.6 Flash responses seamlessly to canvas nodes.",
      "WebSocket orchestration layer built with Node.js & Redis pub/sub for instant team cursor co-editing.",
      "Optimized React Flow state manager handling 500+ active graph nodes at 60 FPS.",
      "Integrated vector retrieval search index backed by PostgreSQL pgvector."
    ],
    metrics: [
      "120,000+ active monthly developers",
      "Sub-80ms mean streaming response latency",
      "99.98% platform uptime across 4 AWS regions"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://nexus-ai-demo.dev",
    githubUrl: "https://github.com/alexmercer/nexus-ai-workbench",
    featured: true,
    technologies: ["React 19", "TypeScript", "Node.js", "Gemini API", "Tailwind CSS", "Redis", "PostgreSQL"],
    interactiveDemoType: "playground"
  },
  {
    id: "aether-cloud",
    title: "Aether Cloud Studio",
    tagline: "Serverless web application deployment engine with real-time metrics & log streams.",
    category: "Cloud & Infra",
    description: "A developer platform providing instant container staging, automatic SSL routing, and zero-config preview environments with interactive browser terminal logs.",
    longDescription: "Aether Cloud Studio simplifies microservice staging by providing git-push triggered ephemeral containers. Built on GCP Cloud Run and Express, it gives engineers instant URL previews and live CPU/Memory telemetry graph visualizations.",
    architecturePoints: [
      "Dynamic reverse proxy powered by Express + Nginx routing requests to container instances.",
      "Real-time log tailing interface streaming stdout/stderr over WebSockets using xterm.js.",
      "Automated SSL certificate provisioning via Let's Encrypt ACME API protocol.",
      "Role-based access control (RBAC) with Google OAuth 2.0 and JWT token rotation."
    ],
    metrics: [
      "3.2 second average cold-start container spin-up",
      "Over 450,000 automated deployments built",
      "99.9% uptime SLA"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://aether-cloud.dev",
    githubUrl: "https://github.com/alexmercer/aether-cloud-studio",
    featured: true,
    technologies: ["Next.js", "Express", "Docker", "GCP Cloud Run", "TypeScript", "Tailwind CSS", "WebSockets"],
    interactiveDemoType: "terminal"
  },
  {
    id: "chronos-analytics",
    title: "Chronos Analytics Engine",
    tagline: "High-throughput event streaming analytics dashboard processing 45M daily events.",
    category: "Full-Stack",
    description: "A real-time telemetry dashboard giving enterprise engineering managers instant visibility into API latencies, error spikes, and cloud infrastructure usage.",
    longDescription: "Chronos Analytics was engineered to handle ultra-high event ingestion rates without slowing down the interactive browser client. Utilizing web workers and D3/Recharts canvas rendering, users can filter millions of log points smoothly.",
    architecturePoints: [
      "Distributed event ingestion pipeline built with Go microservices & Apache Kafka.",
      "Time-series database storage using ClickHouse & PostgreSQL partitioned tables.",
      "Client-side offloaded web worker data aggregation for lag-free chart pan and zoom.",
      "Custom alert trigger engine sending instant Webhook, Slack, and PagerDuty notifications."
    ],
    metrics: [
      "45 Million+ daily telemetry events processed",
      "70% reduction in debug mean time to resolution (MTTR)",
      "Zero dropped packets during peak 15k req/sec spikes"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://chronos-analytics.dev",
    githubUrl: "https://github.com/alexmercer/chronos-analytics",
    featured: true,
    technologies: ["React 19", "Go", "PostgreSQL", "D3.js / Recharts", "Tailwind CSS", "Kafka", "Docker"],
    interactiveDemoType: "analytics"
  },
  {
    id: "pulse-ui",
    title: "Pulse Design System",
    tagline: "Accessible, high-performance UI primitives with built-in micro-animations.",
    category: "Open Source",
    description: "An open-source React component library crafted with Tailwind CSS and Framer Motion, focusing on accessibility compliance (WCAG 2.1 AAA) and fluid interactions.",
    longDescription: "Pulse UI was built out of a desire for UI components that look hyper-refined out of the box while remaining completely customizable with unstyled Radix UI primitives and utility classes.",
    architecturePoints: [
      "40+ fully accessible UI components including command palettes, data tables, and modals.",
      "Comprehensive Storybook documentation site with interactive prop controls.",
      "Automated visual regression testing pipeline powered by Playwright and Percy.",
      "Zero bundle size bloat through tree-shakeable ES modules."
    ],
    metrics: [
      "8,500+ GitHub Stars",
      "180,000+ monthly npm downloads",
      "100% WCAG 2.1 AAA accessibility audit pass"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://pulse-ui-system.dev",
    githubUrl: "https://github.com/alexmercer/pulse-ui",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Radix UI", "Storybook"],
    interactiveDemoType: "canvas"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    type: "work",
    role: "Lead Full-Stack & AI Systems Engineer",
    companyOrInstitution: "Vortex Labs Inc.",
    location: "San Francisco, CA",
    period: "2023 — Present",
    description: "Spearheading the core developer platform team, driving architectural decisions for generative AI agent tools and high-scale cloud backend microservices.",
    achievements: [
      "Architected the flagship Gemini-powered AI Workbench, growing user base from 10k to 120k active developers in 14 months.",
      "Reduced p99 API response latency by 42% through aggressive Redis caching and query refactoring.",
      "Mentored a cross-functional team of 8 engineers across frontend performance and backend cloud microservices."
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "Node.js", "Gemini API", "GCP", "PostgreSQL", "Tailwind CSS"],
    logoBg: "from-indigo-600 to-purple-600",
    current: true
  },
  {
    id: "exp-2",
    type: "work",
    role: "Senior Full-Stack Engineer",
    companyOrInstitution: "Aura Cloud Platforms",
    location: "San Francisco, CA",
    period: "2021 — 2023",
    description: "Designed and implemented real-time cloud monitoring tools, container orchestration dashboards, and collaborative developer interfaces.",
    achievements: [
      "Engineered Chronos Analytics dashboard handling over 45M daily log metrics with zero performance degradation.",
      "Migrated legacy REST APIs to Golang & GraphQL microservices, cutting server infrastructure costs by $180k/yr.",
      "Built the Pulse UI open-source library, achieving 8.5k GitHub stars and broad community adoption."
    ],
    technologies: ["React", "TypeScript", "Go", "Docker", "AWS ECS", "GraphQL", "Tailwind CSS"],
    logoBg: "from-blue-600 to-cyan-600"
  },
  {
    id: "exp-3",
    type: "work",
    role: "Full-Stack Developer",
    companyOrInstitution: "Kinetix Digital Studio",
    location: "Austin, TX",
    period: "2019 — 2021",
    description: "Developed interactive web applications, client portals, and custom e-commerce backend solutions for enterprise tech clients.",
    achievements: [
      "Delivered 18+ high-traffic client web applications with 100/100 Lighthouse performance scores.",
      "Implemented Stripe subscription billing integration processing $4.2M in annual recurring revenue.",
      "Introduced automated Cypress and Jest E2E test suites, reducing regression bugs by 65%."
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "CSS Modules", "Stripe API"],
    logoBg: "from-emerald-600 to-teal-600"
  },
  {
    id: "edu-1",
    type: "education",
    role: "B.S. in Computer Science",
    companyOrInstitution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2015 — 2019",
    description: "Focus on Distributed Systems, Computer Graphics, Software Architecture, and Artificial Intelligence.",
    achievements: [
      "Graduated with High Honors (GPA: 3.88 / 4.0)",
      "President of Cal Hackathon Association (organized 1,200+ hacker attendee national event)",
      "Undergraduate Teaching Assistant for CS61B Data Structures & Algorithms"
    ],
    logoBg: "from-amber-600 to-orange-600"
  },
  {
    id: "edu-2",
    type: "education",
    role: "AWS Certified Solutions Architect & GCP Cloud Engineer",
    companyOrInstitution: "AWS & Google Cloud Certifications",
    location: "Online / Verified",
    period: "2022 & 2024",
    description: "Professional level certifications validating expertise in cloud system design, security, serverless computing, and containerization.",
    achievements: [
      "AWS Certified Solutions Architect — Professional Level",
      "Google Cloud Professional Cloud Architect Certification"
    ],
    logoBg: "from-sky-600 to-indigo-600"
  }
];
