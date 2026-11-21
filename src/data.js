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
    "I build backend systems that stay fast and reliable under load — secure REST APIs, tuned databases and cloud-deployed services. I'm drawn to the layers underneath: processes, threads, networking and how distributed systems fail. Currently a B.Tech student at SGSITS, Indore, looking for software engineering internships and new-grad roles.",
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
    title: "Novexa — AI Meeting Platform",
    badge: "Top 50 Worldwide · IBM TechXchange",
    image: "/novexa.jpg",
    description:
      "Team collaboration platform with video meetings, chats, task tracking and AI meeting summaries. I built the backend automation workflows and cloud integrations, and hardened reliability under hackathon deadlines.",
    tech: ["Node.js", "IBM Cloud", "REST APIs", "WebRTC"],
    links: [{ label: "Code", href: "https://github.com/dhrupad1304/novexa-ai-meeting-platform" }],
  },
  {
    title: "LogicForge AI",
    image: null,
    description:
      "AI-powered hardware design assistant: generates Verilog from natural language, creates testbenches, runs simulations and helps debug the results.",
    tech: ["Python", "LLMs", "Verilog", "Simulation"],
    links: [{ label: "Code", href: "https://github.com/dhrupad1304/LogicForge-AI" }],
  },
  {
    title: "Expense Tracker 2.0",
    badge: "MERN",
    image: "/expense-tracker.jpg",
    description:
      "Secure backend with JWT authentication and a modular REST API. Reduced API latency through schema redesign and MongoDB query optimization.",
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
  { group: "Languages", items: ["Python", "C++", "C", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { group: "Systems", items: ["Linux", "Processes & threads", "TCP/IP", "HTTP"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "Indexing", "Query optimization"] },
  { group: "Cloud & tools", items: ["IBM Cloud Functions", "AWS", "CI/CD", "Git"] },
  { group: "ML", items: ["Scikit-learn", "Pandas", "NumPy"] },
];

export const education = {
  degree: "B.Tech, Electronics & Instrumentation Engineering",
  school: "SGSITS, Indore",
  period: "2023 – 2027",
  coursework: ["Operating Systems", "DSA", "DBMS", "Computer Networks", "OOP"],
};
