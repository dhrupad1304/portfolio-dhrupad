import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { profile, stats, experience, projects, skills, education } from "./data";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const NAV_IDS = NAV.map((n) => n.id);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease: "easeOut" },
};

/* ---------- small icons (inline, no extra deps) ---------- */
const Icon = {
  github: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  download: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sun: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  ),
  moon: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" strokeLinejoin="round" />
    </svg>
  ),
  menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  ),
};

/* ---------- hooks ---------- */
function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);
  return [dark, setDark];
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ---------- building blocks ---------- */
function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <motion.div {...fadeUp}>
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </motion.div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

/* ---------- page ---------- */
export default function Portfolio() {
  const [dark, setDark] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
          <a href="#top" className="font-mono text-sm font-semibold">
            dhrupad<span className="text-accent">_</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === n.id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="rounded-lg p-2 text-muted hover:bg-surface hover:text-fg"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {dark ? <Icon.sun className="h-5 w-5" /> : <Icon.moon className="h-5 w-5" />}
            </button>
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 rounded-lg bg-fg px-3.5 py-2 text-sm font-medium text-bg hover:opacity-90 sm:inline-flex"
            >
              <Icon.download className="h-4 w-4" /> Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-muted hover:bg-surface hover:text-fg md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <Icon.close className="h-5 w-5" /> : <Icon.menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <ul className="border-t border-line bg-bg px-4 py-3 md:hidden">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-muted hover:bg-surface hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download className="block rounded-lg px-3 py-2.5 font-medium text-accent">
                Download resume
              </a>
            </li>
          </ul>
        )}
      </header>

      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section id="top" className="flex min-h-[88vh] flex-col justify-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              B.Tech student · SGSITS Indore · Class of 2027
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl text-muted sm:text-2xl">
              {profile.role} — <span className="text-fg">{profile.tagline}</span>
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              I design secure APIs, optimize databases and ship cloud services. Ranked
              <span className="font-medium text-fg"> Top 50 worldwide</span> at the IBM TechXchange Hackathon 2025.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-white shadow-lg shadow-accent/20 hover:bg-accent/90">
                View my work
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-medium hover:border-fg/30">
                <Icon.mail className="h-4 w-4" /> Get in touch
              </a>
              <div className="flex items-center gap-1 pl-1">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2.5 text-muted hover:bg-surface hover:text-fg">
                  <Icon.github className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2.5 text-muted hover:bg-surface hover:text-fg">
                  <Icon.linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01 — About" title="Engineer who likes the layers underneath">
          <div className="grid gap-10 md:grid-cols-5">
            <motion.p {...fadeUp} className="text-lg leading-relaxed text-muted md:col-span-3">
              {profile.summary}
            </motion.p>
            <motion.dl {...fadeUp} className="grid gap-4 md:col-span-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-surface p-5">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
          <ol className="relative space-y-10 border-l border-line pl-8">
            {experience.map((job) => (
              <motion.li key={job.company} {...fadeUp} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-2 text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-line bg-bg">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                      p.fit === "contain" ? "bg-black object-contain" : "object-cover object-left-top"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    {p.badge && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">{p.badge}</span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {p.links.length > 0 && (
                    <div className="mt-5 flex gap-4">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                          {l.label} <Icon.arrow className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            More on{" "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-accent">
              GitHub
            </a>
          </p>
        </Section>

        {/* Skills + Education */}
        <Section id="skills" eyebrow="04 — Skills" title="Toolbox">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <motion.div key={s.group} {...fadeUp} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="font-mono text-sm text-accent">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-md bg-bg px-2.5 py-1 text-sm">{i}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-mono text-sm text-accent">Education</p>
                <h3 className="mt-1 text-xl font-semibold">{education.degree}</h3>
                <p className="text-muted">{education.school}</p>
              </div>
              <span className="font-mono text-sm text-muted">{education.period}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => <Tag key={c}>{c}</Tag>)}
            </div>
          </motion.div>
        </Section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-24 text-center">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm text-accent">05 — Contact</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              The quickest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/20 hover:bg-accent/90">
                <Icon.mail className="h-4 w-4" /> {profile.email}
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 font-medium hover:border-fg/30">
                <Icon.download className="h-4 w-4" /> Download resume
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
          <div className="flex gap-1">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 hover:text-fg"><Icon.github className="h-5 w-5" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 hover:text-fg"><Icon.linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg p-2 hover:text-fg"><Icon.mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
