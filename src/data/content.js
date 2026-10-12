export const content = {
  name: "Tejashwi Arya",

  role: "Software Developer | AI Engineer",

  tagline:
    "I’m passionate about building software that is both engineered to scale and intelligent by design. From robust systems and elegant architectures to AI/ML-powered experiences, I love turning complex problems into meaningful products. Always learning, experimenting, and building what’s next.",

  location: "India",

  email: "tejashwiarya202@gmail.com",

  profiles: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/tejashwi-arya-23488b3a7",
    },
    {
      label: "GitHub",
      url: "https://github.com/AryaTejashwi04",
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/your-leetcode-handle",
    },
    {
      label: "Codeforces",
      url: "https://codeforces.com/profile/scholar_3009",
    },
    {
      label: "CodeChef",
      url: "https://www.codechef.com/users/knm2005",
    },
  ],

  about:
    "B.Tech in Electrical and Electronics Engineering from the National Institute of Technology Karnataka (NITK), Class of 2026. I build scalable software systems and AI-powered applications, with experience across LLM infrastructure, full-stack development, analytics platforms, and AI/ML.",

  education: [
    {
      institution: "National Institute of Technology Karnataka (NITK)",
      degree: "B.Tech in Electrical and Electronics Engineering",
      period: "Oct 2022 — June 2026",
      grade: "CGPA: 7.34",
    },
  ],

  experience: [
    {
      company: "DataFlow Group",
      role: "Software Development Associate",
      period: "Sept 2026 — Present",
      location: "India",
      bullets: [
        "Architected a unified LLM abstraction layer across OpenAI, Gemini, and 8 AWS Bedrock models, eliminating provider-specific changes across 20+ AI agents.",
        "Engineered task-based model routing using capability, cost, and latency criteria, enabling zero-code model switching through centralized configuration and provider adapters.",
        "Implemented production-safe fallback and resilience with feature flags, typed errors, retries, timeouts, and <10% measured latency overhead.",
      ],
    },

    {
      company: "DataFlow Group",
      role: "Software Development Engineer Consultant",
      period: "July 2026 — Sept 2026",
      location: "India",
      bullets: [
        "Built a full-stack analytics dashboard using React.js, Next.js, Node.js, and TypeScript, serving real-time KPI tracking to operations teams via 7 REST API endpoints backed by OpenSearch.",
        "Designed a data ingestion pipeline with AWS SQS and DynamoDB; flattened nested documents and indexed data across 12 analytics categories.",
        "Reduced API response time by 20% by integrating OpenSearch caching into the analytics layer.",
        "Shipped end-to-end features with dynamic filtering across 15+ filter dimensions, owning database queries, REST APIs, and React UI in production.",
      ],
    },

    {
      company: "Synkerr",
      role: "AI/ML Intern",
      period: "Jan 2025 — Jul 2025",
      location: "India",
      bullets: [
        "Worked on diverse datasets to build an interest-based recommendation system using Pandas and NumPy.",
        "Contributed to building a RAG-based AI chatbot integrating Gemini LLM with vector retrieval.",
        "Improved system performance by 6% through real-time user interaction optimization.",
      ],
    },
  ],

  projects: [
    {
      title: "AI Interviewer — AI-Powered Interview Platform",
      description:
        "AI-powered interview platform with RAG-based context awareness, real-time voice interviews, resume analysis, AI job recommendations, email OTP and Google authentication, and an admin dashboard.",
      tech: [
        "MERN",
        "Groq",
        "Llama 3.3",
        "RAG",
        "Vector Search",
        "Voice AI",
        "Google OAuth",
      ],
      github: "https://github.com/AryaTejashwi04",
      live: "https://ai-interviewer-eight-ashy.vercel.app/",
    },

    {
      title:
        "CineMatch — Hybrid Lexical + Semantic Movie Discovery Engine",
      description:
        "Search-first movie recommender over a 9,500-film corpus using hybrid retrieval: BM25+ lexical search fused with bge-small dense embeddings (FAISS cosine index) via Reciprocal Rank Fusion, followed by cross-encoder reranking.",
      tech: [
        "Python",
        "FastAPI",
        "BM25+",
        "Sentence-Transformers",
        "bge-small",
        "FAISS",
        "Cross-Encoder",
        "RRF",
      ],
      github: "https://github.com/AryaTejashwi04",
      live: "https://cine-match-rouge.vercel.app/",
    },

    {
      title: "AryaJobs — Full-stack Job Portal",
      description:
        "Full-stack job posting and application platform with resume uploads and role-based authentication.",
      tech: [
        "MERN",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Cloudinary",
      ],
      github: "https://github.com/AryaTejashwi04",
      live: "https://aryajobs-frontend.vercel.app/",
    },

    {
      title: "TejMatch — AI Resume Analyzer",
      description:
        "AI-powered resume scorer using TF-IDF, cosine similarity, and Gemini for skill gap insights.",
      tech: [
        "Python",
        "ML",
        "NLP",
        "LLM",
        "SVC",
        "KNN",
        "Random Forest",
        "SMOTE",
        "Streamlit",
      ],
      github: "https://github.com/AryaTejashwi04",
      live:
        "https://aryatejashwi04-tejmatch-app-msrtyg.streamlit.app/",
    },

    {
      title: "TejCare — AI Mental Health Chatbot",
      description:
        "Empathetic chatbot with sentiment analysis and RAG pipeline using SBERT and FAISS for grounded responses.",
      tech: [
        "LLM",
        "NLP",
        "Gemini",
        "LangChain",
        "VADER",
        "TextBlob",
        "SBERT",
        "FAISS",
        "Flask",
        "Streamlit",
      ],
      github: "https://github.com/AryaTejashwi04",
      live: "https://tejcare.streamlit.app/",
    },
  ],

  skills: {
    Languages: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],

    Frontend: [
      "React",
      "Next.js",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind",
    ],

    Backend: [
      "Node.js",
      "Express",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],

    "AI / ML": [
      "LangChain",
      "LLM",
      "RAG",
      "SBERT",
      "FAISS",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],

    "Cloud / DevOps": [
      "AWS SQS",
      "DynamoDB",
      "OpenSearch",
      "GitHub Actions",
      "Docker",
    ],

    Databases: [
      "MongoDB",
      "Firebase",
      "PostgreSQL",
    ],

    Systems: [
      "Distributed Systems",
      "System Design (LLD + HLD)",
      "DBMS",
      "OS",
      "CN",
      "OOP",
    ],
  },

  achievements: [
    "Solved 800+ DSA problems on LeetCode",
    "Codeforces Specialist (Max 1416)",
    "CodeChef 3 Star (Max 1697)",
  ],
};
