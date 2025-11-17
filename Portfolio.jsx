import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <header className="max-w-5xl mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold">Dhrupad Gupta</h1>
        <p className="text-lg mt-3 text-gray-600">
          Software Engineer • Backend Developer • Distributed Systems Enthusiast
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:dhrupadgupta4@gmail.com" className="underline">Email</a>
          <a href="https://github.com/dhrupad1304" className="underline">GitHub</a>
          <a href="https://linkedin.com/in/dhrupad-gupta-483046296" className="underline">LinkedIn</a>
          <a href="#resume" className="underline">Resume</a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p>
          I am an aspiring Software Engineer with strong foundations in Operating
          Systems, Backend Engineering, Python, and C++. I build scalable systems
          and solve engineering problems. Ranked Top 50 Worldwide at IBM TechXchange
          Hackathon 2025. I aim to work in high-performance systems, distributed
          architectures, and cloud-based environments.
        </p>
      </section>

      {/* Why Me */}
      <section className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-3">Why Me?</h2>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>Proven backend + systems engineering skills</li>
          <li>Strong DSA foundation (100+ problems solved)</li>
          <li>Fast learner, quick to adapt to new technologies</li>
          <li>Global hackathon achievement (Top 50 Worldwide)</li>
          <li>Clean coding style & strong documentation skills</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div><strong>Languages:</strong> Python, C++, JavaScript</div>
          <div><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT</div>
          <div><strong>Systems:</strong> Linux, OS Concepts, Networking Basics</div>
          <div><strong>Databases:</strong> MongoDB, MySQL</div>
          <div><strong>Cloud:</strong> IBM Cloud, AWS (basic)</div>
          <div><strong>Tools:</strong> Git, GitHub, CI/CD</div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">

          {/* Expense Tracker */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">Expense Tracker 2.0 (MERN)</h3>
            <img src="/project1.png" alt="Expense Tracker" className="rounded-xl mt-3" />
            <p className="mt-2 text-gray-700">
              Secure backend with JWT authentication, optimized MongoDB queries,
              and modular API architecture.
            </p>
            <p className="mt-2"><strong>Tech:</strong> Node.js, Express.js, MongoDB</p>
            <a className="underline text-blue-600" href="https://github.com/dhrupad1304">GitHub →</a>
          </motion.div>

          {/* Novexa */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">Novexa AI Agent — IBM Hackathon</h3>
            <img src="/project2.png" alt="Novexa" className="rounded-xl mt-3" />
            <p className="mt-2 text-gray-700">
              Built backend automation workflows and reliability features.
              Achieved Top 50 Worldwide ranking.
            </p>
            <p className="mt-2"><strong>Tech:</strong> Node.js, IBM Cloud, REST APIs</p>
            <a className="underline text-blue-600" href="https://github.com/dhrupad1304">GitHub →</a>
          </motion.div>

          {/* Spam Classifier */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">Spam Email Classifier</h3>
            <img src="/project3.png" alt="Spam Classifier" className="rounded-xl mt-3" />
            <p className="mt-2 text-gray-700">
              Achieved 92.5% accuracy using Naive Bayes with custom preprocessing.
            </p>
            <p className="mt-2"><strong>Tech:</strong> Python, Scikit-learn</p>
            <a className="underline text-blue-600" href="https://github.com/dhrupad1304">GitHub →</a>
          </motion.div>
        </div>
      </section>

      {/* Resume / Download */}
      <section id="resume" className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-3">Resume</h2>
        <p>You can download my latest ATS-friendly resume below:</p>
        <a href="/resume.pdf" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
          Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 py-6 text-gray-600">
        © {new Date().getFullYear()} Dhrupad Gupta — Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}