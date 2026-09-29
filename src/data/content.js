export const content = {
  name: "Tejashwi Arya",
  role: "Software Engineer",
  tagline: "Full-stack and AI/ML developer building production systems with React, Next.js, Node.js, and LLM pipelines.",
  location: "India",
  email: "tejashwiarya202@gmail.com",
  profiles: [
    { label: "GitHub", url: "https://github.com/AryaTejashwi04" },
    { label: "LinkedIn", url: "https://linkedin.com/in/tejashwi-arya-23488b3a7" },
    { label: "LeetCode", url: "https://leetcode.com/your-leetcode-handle" },
    { label: "Codeforces", url: "https://codeforces.com/profile/scholar_3009" },
    { label: "CodeChef", url: "https://www.codechef.com/users/knm2005" }
  ],
  about: "B.Tech in Electrical and Electronics Engineering from NIT Karnataka (Class of 2026). I build production full-stack systems with React, Next.js, Node.js, and TypeScript, and LLM-powered applications using Gemini, LangChain, RAG pipelines, and vector retrieval. Currently building a background verification analytics platform at DataFlow. 800+ DSA problems solved, Codeforces Specialist, CodeChef 3-star. Looking for software engineering roles where I can own and ship impactful products.",
  experience: [
    { company: "DataFlow Group", role: "Software Development Engineer Intern", period: "Jul 2025 — Present", location: "India", bullets: [
      "Developed a full-stack analytics dashboard using React.js, Next.js, Node.js, and TypeScript; built REST APIs with OpenSearch queries delivering real-time KPI tracking for operations teams.",
      "Built a data ingestion pipeline with AWS SQS and DynamoDB; flattened nested documents and indexed data across 12 analytics categories.",
      "Designed and implemented 7 REST API endpoints using Node.js, Express, and TypeScript; integrated OpenSearch for real-time analytics with caching, reducing API response time by 20%.",
      "Delivered end-to-end features with dynamic filtering across 15+ filter dimensions; owned database queries, REST APIs, and React UI shipped to production.",
      "Set up CI/CD pipelines with GitHub Actions for automated builds, tests, and deployments; used Kiro AI IDE for spec-driven development."
    ]},
    { company: "Synkerr", role: "AI/ML Intern", period: "Jan 2025 — Jul 2025", location: "India", bullets: [
      "Built an interest-based recommendation system on diverse datasets using Pandas and NumPy.",
      "Developed a RAG-based AI chatbot integrating Gemini LLM with vector retrieval.",
      "Improved system performance by 6% through real-time user interaction optimization."
    ]}
  ],
  projects: [
    { title: "AI Interviewer — AI-Powered Interview Platform", description: "AI-powered interview platform with RAG-based context awareness, real-time voice interviews, resume analysis, AI job recommendations, email OTP and Google authentication, and an admin dashboard.", tech: ["MERN","Groq","Llama 3.3","RAG","Vector Search","Voice AI","Google OAuth"], github: "https://github.com/AryaTejashwi04", live: "https://ai-interviewer-eight-ashy.vercel.app/" },
    { title: "CineMatch — Hybrid Lexical + Semantic Movie Discovery Engine", description: "Search-first movie recommender over a 9,500-film corpus using hybrid retrieval: BM25+ lexical search fused with bge-small dense embeddings (FAISS cosine index) via Reciprocal Rank Fusion, then cross-encoder reranking for top-k precision.", tech: ["Python","FastAPI","BM25+","Sentence-Transformers","bge-small","FAISS","Cross-Encoder","RRF"], github: "https://github.com/AryaTejashwi04", live: "https://cine-match-rouge.vercel.app/" },
    { title: "AryaJobs — Full-stack Job Portal", description: "Full-stack job posting and application platform with resume uploads and role-based authentication.", tech: ["MERN","MongoDB","Express","React","Node.js","JWT","Cloudinary"], github: "https://github.com/AryaTejashwi04", live: "https://aryajobs-frontend.vercel.app/" },
    { title: "TejMatch — AI Resume Analyzer", description: "AI-powered resume scorer using TF-IDF, cosine similarity, and Gemini for skill gap insights.", tech: ["Python","ML","NLP","LLM","SVC","KNN","Random Forest","SMOTE","Streamlit"], github: "https://github.com/AryaTejashwi04", live: "https://aryatejashwi04-tejmatch-app-msrtyg.streamlit.app/" },
    { title: "TejCare — AI Mental Health Chatbot", description: "Empathetic chatbot with sentiment analysis and RAG pipeline using SBERT and FAISS for grounded responses.", tech: ["LLM","NLP","Gemini","LangChain","VADER","TextBlob","SBERT","FAISS","Flask","Streamlit"], github: "https://github.com/AryaTejashwi04", live: "https://tejcare.streamlit.app/" }
  ],
  skills: {
    Languages: ["Python","Java","C++","JavaScript","TypeScript","SQL"],
    Frontend: ["React","Next.js","Redux","HTML","CSS","Tailwind"],
    Backend: ["Node.js","Express","Flask","FastAPI","Streamlit","REST APIs"],
    "AI / ML": ["Pandas","NumPy","Scikit-learn","LangChain","LLM","RAG","SBERT","FAISS","BM25+","Cross-Encoder","Groq"],
    "Cloud / DevOps": ["AWS SQS","DynamoDB","OpenSearch","GitHub Actions","CI/CD","Docker","Kiro"],
    "Databases": ["MongoDB Atlas","DynamoDB","Firebase","PostgreSQL"],
    "CS Fundamentals": ["System Design","DBMS","Operating Systems","Computer Networks","OOP"]
  },
  achievements: [
    "800+ DSA problems solved on LeetCode",
    "Codeforces Specialist (Max 1416)",
    "CodeChef 3★ (Max 1697)"
  ]
}
