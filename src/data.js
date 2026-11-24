export const profile = {
  name: "Dhrupad Gupta",
  role: "Software Engineer",
  tagline: "Backend · Distributed Systems · Operating Systems",
  location: "Indore, India",
  email: "dhrupadgupta4@gmail.com",
  github: "https://github.com/dhrupad1304",
  linkedin: "https://linkedin.com/in/dhrupad-gupta-483046296",
  resume: "/resume.pdf",
  summary:
    "I'm a B.Tech student at SGSITS, Indore with foundations in operating systems, Python, C++ and backend development. I've built secure REST APIs, optimized databases and deployed cloud-based services, and I'm interested in distributed systems, debugging and backend architecture.",
};

export const stats = [
  { value: "Top 50", label: "Worldwide, IBM TechXchange Hackathon 2025" },
  { value: "100+", label: "DSA problems solved" },
  { value: "2", label: "Engineering internships" },
];

export const experience = [
  {
    role: "Software / Frontend Intern",
    company: "1stop.ai",
    period: "May 2025 – Jun 2025",
    points: [
      "Developed responsive UI components and improved performance through debugging and refactoring.",
      "Worked in Agile sprints and took part in code reviews.",
    ],
    tech: ["JavaScript", "Tailwind CSS", "GitHub", "Agile"],
  },
  {
    role: "Software Engineering Intern",
    company: "Placify Technologies",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Built and optimized Python data pipelines, improving processing speed and reliability.",
      "Wrote scripts and managed workflows in Linux environments.",
      "Improved model evaluation accuracy through structured validation.",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Linux", "Git"],
  },
];

export const projects = [
  {
    title: "FactoryMind",
    badge: "RAG · hit@5 0.974",
    image: "/factorymind.jpg",
    description:
      "Troubleshooting assistant for factory maintenance. It combines vector, full-text and exact fault-code search in Postgres, drafts cited diagnoses with an LLM, then checks each claim against its sources. Hybrid search reached hit@5 of 0.974 on a 38-question test set, against 0.763 for vector and 0.947 for keyword search alone. Uses synthetic demo data.",
    tech: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "LLMs"],
    links: [{ label: "Code", href: "https://github.com/dhrupad1304/factorymind" }],
  },
  {
    title: "LogicForge AI",
    badge: "Verified Verilog",
    image: "/logicforge.webp",
    description:
      "Describe a circuit in plain English and get Verilog that is compiled, simulated and tested against a separately generated reference model, with pass or fail for each test case, waveforms and schematics. The live demo is password-protected.",
    tech: ["FastAPI", "Next.js", "TypeScript", "Docker", "Icarus Verilog"],
    links: [
      { label: "Live demo", href: "https://logic-forge-ai.vercel.app" },
      { label: "Code", href: "https://github.com/dhrupad1304/LogicForge-AI" },
    ],
  },
  {
    title: "Novexa — AI Meeting Platform",
    badge: "Top 50 Worldwide · IBM TechXchange",
    image: "/novexa.jpg",
    description:
      "Team collaboration platform with video meetings, chat, task tracking and an AI assistant built on IBM watsonx, made by a team of five. I worked on backend automation workflows and cloud integrations.",
    tech: ["Next.js", "Node.js", "MongoDB", "IBM watsonx", "WebSockets"],
    links: [
      { label: "Live app", href: "https://novexa-cyan.vercel.app/" },
      { label: "Video", href: "https://youtu.be/zdVjuxpx4rE" },
      { label: "Code", href: "https://github.com/dhrupad1304/novexa-ai-meeting-platform" },
    ],
  },
  {
    title: "Egg Segmentation & Tracking",
    badge: "Computer vision",
    image: "/vision-seg.jpg",
    fit: "contain",
    description:
      "Classical OpenCV segmentation compared with Segment Anything (SAM) masks across a series of experiments, plus a baseline video tracker. Mean Dice of 0.645 on 22 held-out images, measured against SAM pseudo-labels.",
    tech: ["Python", "OpenCV", "SAM", "NumPy"],
    links: [{ label: "Code", href: "https://github.com/dhrupad1304/Vision_seg" }],
  },
  {
    title: "Expense Tracker 2.0",
    badge: "MERN",
    image: "/expense-tracker.jpg",
    description:
      "Secure backend with JWT authentication and a modular REST API. Reduced API latency through schema improvements and MongoDB query optimization.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    links: [],
  },
  {
    title: "Spam Email Classifier",
    badge: "92.5% accuracy",
    image: "/spam-classifier.jpg",
    description:
      "Naive Bayes classifier trained on 3,000+ emails with a custom preprocessing and evaluation pipeline, served through a Streamlit app.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    links: [],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C++", "C", "JavaScript", "TypeScript"] },
  { group: "Backend & web", items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT", "React", "Next.js"] },
  { group: "Systems", items: ["Linux", "Processes & threads", "TCP/IP", "HTTP"] },
  { group: "Databases", items: ["PostgreSQL", "pgvector", "MongoDB", "MySQL", "Indexing", "Query optimization"] },
  { group: "Cloud & tools", items: ["IBM Cloud Functions", "AWS", "Docker", "CI/CD", "Git"] },
  { group: "AI & ML", items: ["LLM APIs", "RAG", "OpenCV", "Scikit-learn", "Pandas", "NumPy"] },
];

export const education = {
  degree: "B.Tech, Electronics & Instrumentation Engineering",
  school: "SGSITS, Indore",
  period: "2023 – 2027",
  coursework: ["Operating Systems", "DSA", "DBMS", "Computer Networks", "OOP"],
};
