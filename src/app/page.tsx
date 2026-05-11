"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

/* ── SVG Icon Components ── */
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
const GithubIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
);
const LinkedinIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const EmailIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
);
const PhoneIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);
const ExternalIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

/* ── Fade-in wrapper ── */
const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6 }} className={className}>
    {children}
  </motion.div>
);

/* ── GitHub Graph ── */
function GithubGraph() {
  const [stats, setStats] = useState<{ totalContributions: number; publicRepos: number; totalStars: number; activeDays: number; followers: string | number } | null>(null);
  const [weeks, setWeeks] = useState<{ date: string; count: number; lvl: number }[][]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const username = "Satyansh-edith";
      try {
        // Fetch full-year contributions from public API
        const [contribRes, userRes, reposRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let userData: any = {};
        if (userRes.ok) userData = await userRes.json();

        let totalStars = 0, repoCount = 0;
        if (reposRes.ok) {
          const repos = await reposRes.json();
          repoCount = repos.length;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          repos.forEach((r: any) => { totalStars += r.stargazers_count || 0; });
        }

        if (contribRes.ok) {
          const contribData = await contribRes.json();
          const contributions: { date: string; count: number }[] = contribData.contributions || [];
          const totalContributions = contribData.total?.lastYear ?? contributions.reduce((a: number, c: { count: number }) => a + c.count, 0);

          const maxCount = Math.max(...contributions.map((d: { count: number }) => d.count), 1);
          const wks: { date: string; count: number; lvl: number }[][] = [];
          for (let i = 0; i < contributions.length; i += 7) {
            wks.push(contributions.slice(i, i + 7).map((day: { date: string; count: number }) => {
              let lvl = 0;
              if (day.count > 0) {
                if (day.count <= Math.ceil(maxCount * 0.25)) lvl = 1;
                else if (day.count <= Math.ceil(maxCount * 0.5)) lvl = 2;
                else if (day.count <= Math.ceil(maxCount * 0.75)) lvl = 3;
                else lvl = 4;
              }
              return { ...day, lvl };
            }));
          }
          setWeeks(wks);
          setStats({
            totalContributions,
            publicRepos: userData.public_repos ?? repoCount,
            totalStars,
            activeDays: contributions.filter((d: { count: number }) => d.count > 0).length,
            followers: userData.followers ?? "—",
          });
        } else {
          throw new Error("Contributions API failed");
        }
      } catch { setError("Could not load GitHub data — check network or rate limits."); }
    })();
  }, []);

  if (error) return <div className="gh-msg" style={{ color: "var(--fg3)" }}>{error}</div>;
  if (!stats) return <div className="gh-msg gh-loading">Fetching real contributions from GitHub...</div>;

  return (
    <div>
      <div className="gh-grid-wrap"><div className="gh-grid">
        {weeks.map((week, i) => (<div key={i} className="gh-week">{week.map((day, j) => (<div key={j} className="gh-cell" data-level={day.lvl > 0 ? day.lvl : undefined} data-tooltip={`${day.count} contribution${day.count !== 1 ? "s" : ""} · ${day.date}`} />))}</div>))}
      </div></div>
      <div className="gh-legend">Less<div className="gh-legend-cell" style={{ background: "var(--gh-empty)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l1)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l2)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l3)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l4)" }} />More</div>
      <div className="gh-stats-row">
        <div className="gh-stat"><strong>{stats.totalContributions}</strong>contributions (year)</div>
        <div className="gh-stat"><strong>{stats.publicRepos}</strong>public repos</div>
        <div className="gh-stat"><strong>{stats.totalStars}</strong>total stars</div>
        <div className="gh-stat"><strong>{stats.activeDays}</strong>active days</div>
        <div className="gh-stat"><strong>{stats.followers}</strong>followers</div>
      </div>
    </div>
  );
}

/* ── PROJECTS DATA ── */
const projects = [
  { name: "MAITRI", title: "MAITRI — AI Mental Health Companion", desc: "Fully offline AI mental health companion for astronauts & high-stress professionals. Voice input + real-time facial emotion recognition with personalised interventions.", tags: ["React", "Python", "Voice AI", "Facial Recognition"], bg: "linear-gradient(135deg,#1a0a2e,#3d1a5c,#1a1a3d)", github: "https://github.com/Satyansh-edith" },
  { name: "MedEzee", title: "MedEzee — AI Health Companion", desc: "Full-stack healthcare app with Apple Health-inspired dark UI. FastAPI backend with JWT auth, AI symptom analyzer, health chatbot, and RxNorm medicine conversion.", tags: ["React 19", "Vite", "FastAPI", "SQLite"], bg: "linear-gradient(135deg,#0a1e2e,#0d3d5c,#0a2e2e)", github: "https://github.com/Satyansh-edith" },
  { name: "ZK-UPI", title: "ZK-UPI — Privacy-Preserving Payments", desc: "Privacy-first payment prototype in Next.js 14. SHA-256 commitment hashing for anonymous wallets, merchant QR flow, and real-time transaction explorer.", tags: ["Next.js 14", "TypeScript", "MongoDB", "SHA-256"], bg: "linear-gradient(135deg,#001a0a,#003d1a,#001a2e)", github: "https://github.com/Satyansh-edith", live: "https://github.com/Satyansh-edith" },
  { name: "Rural Roots", title: "Rural Roots — AI Crop Disease Detection", desc: "AI-powered crop disease detection platform integrating geotagging and IoT sensor data for real-time field analysis.", tags: ["Python", "AI/ML", "FastAPI", "IoT"], bg: "linear-gradient(135deg,#0a1e0a,#1a3d1a,#2e3d0a)", live: "https://ruralroot.netlify.app" },
];

const skills = [
  { group: "Languages", tags: ["C", "C++", "Python", "JavaScript", "TypeScript"] },
  { group: "Frontend", tags: ["React 19", "Next.js 14", "HTML", "CSS", "Tailwind CSS", "React Router DOM"] },
  { group: "Backend", tags: ["FastAPI", "REST APIs", "Next.js API Routes", "JWT Auth", "SQLAlchemy ORM"] },
  { group: "Databases", tags: ["SQLite", "MongoDB", "Firebase"] },
  { group: "Tools & Infra", tags: ["Git", "GitHub", "Docker", "AWS", "Linux", "Vite"] },
  { group: "Core CS", tags: ["DSA", "OOP", "System Design", "Competitive Programming"] },
];

const marqueeItems = ["React 19", "Next.js 14", "FastAPI", "TypeScript", "Python", "MongoDB", "Docker", "AWS", "Tailwind CSS", "JWT Auth", "SQLAlchemy ORM", "AI / ML", "REST APIs", "System Design"];

/* ══════════════════════ PAGE ══════════════════════ */
export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Mouse glow follower
  useEffect(() => {
    const glow = document.getElementById("mouse-glow");
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX - 150 + "px";
      glow.style.top = e.clientY - 150 + "px";
      glow.style.opacity = "1";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Project card 3D tilt
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".proj-card");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2, cy = rect.height / 2;
        const rx = (y - cy) / 10;
        const ry = (cx - x) / 10;
        card.style.setProperty("--mx", (x / rect.width) * 100 + "%");
        card.style.setProperty("--my", (y / rect.height) * 100 + "%");
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });
    return () => handlers.forEach(({ el, move, leave }) => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
  }, []);

  // Stat card 3D tilt
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".stat-card");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2, cy = rect.height / 2;
        const rx = (y - cy) / 15;
        const ry = (cx - x) / 15;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-12px)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });
    return () => handlers.forEach(({ el, move, leave }) => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
  }, []);

  return (
    <main>
      <AnimatedShaderBackground />
      <div id="mouse-glow" />

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">SD<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? "🌙" : "☀️"}</button>
      </nav>

      {/* HERO */}
      <div className="hero">
        <motion.p className="hero-tag" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Full-Stack Developer &amp; Hackathon Builder</motion.p>
        <motion.h1 className="hero-name" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Satyansh<br /><em>Dubey</em></motion.h1>
        <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>Building AI-powered web applications, privacy-preserving systems, and scalable REST APIs. Kolkata, India.</motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <a className="btn-primary" href="mailto:dubeysatyansh4@gmail.com">Hire me →</a>
          <a className="btn-secondary" href="#projects">View Projects</a>
        </motion.div>
        <motion.div className="socials-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <a className="soc-btn" href="https://github.com/Satyansh-edith" target="_blank" rel="noopener"><GithubIcon /> GitHub</a>
          <a className="soc-btn" href="https://linkedin.com/in/satyansh-dubey" target="_blank" rel="noopener"><LinkedinIcon /> LinkedIn</a>
          <a className="soc-btn" href="mailto:dubeysatyansh4@gmail.com"><EmailIcon /> Gmail</a>
          <a className="soc-btn" href="tel:+917890719366"><PhoneIcon /> +91-7890719366</a>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}><span>{item}</span><span className="dot">✦</span></React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-header"><span className="section-label">01 — About</span><div className="section-line" /></div>
        <FadeIn className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Who I Am</h2>
            <p>I&apos;m a <strong>full-stack developer</strong> with strong expertise in React and Next.js, focused on building AI-powered web applications, privacy-preserving systems, and scalable REST APIs.</p>
            <p>Currently pursuing my <strong>B.Tech in Information Technology</strong> at Heritage Institute of Technology, Kolkata (2024–2028). Passionate about seamless user experiences and robust backend architectures.</p>
            <p>Proven in national-level hackathons — including a <strong>Top 5 finish at ISRO for SIH 2025</strong> out of 500+ teams. Seeking a summer 2026 internship to deliver impactful, production-grade solutions.</p>
            <div className="socials-row" style={{ marginTop: "1.6rem" }}>
              <a className="soc-btn" href="https://github.com/Satyansh-edith" target="_blank" rel="noopener"><GithubIcon />GitHub</a>
              <a className="soc-btn" href="https://linkedin.com/in/satyansh-dubey" target="_blank" rel="noopener"><LinkedinIcon />LinkedIn</a>
              <a className="soc-btn" href="mailto:dubeysatyansh4@gmail.com"><EmailIcon />Email</a>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card"><div className="stat-num">Top 5</div><div className="stat-desc">SIH 2025 at ISRO — 500+ teams</div></div>
            <div className="stat-card"><div className="stat-num">4</div><div className="stat-desc">Hackathon podium finishes</div></div>
            <div className="stat-card"><div className="stat-num">4</div><div className="stat-desc">Full-stack projects shipped</div></div>
            <div className="stat-card"><div className="stat-num">2026</div><div className="stat-desc">Seeking summer internship</div></div>
          </div>
        </FadeIn>
      </section>

      {/* PROJECTS */}
      <div className="full-bleed" id="projects">
        <div className="inner">
          <div className="section-header"><span className="section-label">02 — Projects</span><div className="section-line" /></div>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <FadeIn className="projects-grid">
            {projects.map((p) => (
              <div className="proj-card" key={p.name}>
                <div className="proj-preview" style={{ background: p.bg }}>{p.name}</div>
                <div className="proj-body">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tags-row">{p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}</div>
                  <div className="proj-links">
                    {p.github && <a className="proj-link-btn" href={p.github} target="_blank" rel="noopener"><GithubIcon />GitHub</a>}
                    {p.live && <a className="proj-link-btn" href={p.live} target="_blank" rel="noopener"><ExternalIcon />{p.live.replace(/https?:\/\//, "")}</a>}
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header"><span className="section-label">03 — Skills</span><div className="section-line" /></div>
        <h2 className="section-title">Technical Stack</h2>
        <FadeIn className="skills-grid">
          {skills.map((s) => (
            <div className="skill-group" key={s.group}>
              <div className="skill-group-title">{s.group}</div>
              <div className="skill-tags">{s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* GITHUB */}
      <div className="full-bleed" id="github">
        <div className="inner">
          <div className="section-header"><span className="section-label">04 — GitHub</span><div className="section-line" /></div>
          <h2 className="section-title">Contribution Activity</h2>
          <FadeIn><p className="gh-label">Satyansh-edith · github.com</p><GithubGraph /></FadeIn>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-header"><span className="section-label">05 — Contact</span><div className="section-line" /></div>
        <FadeIn className="contact-wrap">
          <div className="contact-left">
            <p className="big-text">Let&apos;s build something <em>remarkable</em> together.</p>
            <p style={{ color: "var(--fg2)", fontSize: "13px", lineHeight: "1.8" }}>Open to summer 2026 internships, collaborations, and freelance projects.</p>
          </div>
          <div className="contact-right">
            <a className="contact-item" href="mailto:dubeysatyansh4@gmail.com">
              <div className="contact-icon"><EmailIcon className="icon-accent" /></div>
              <div><div className="contact-label">Gmail</div><div className="contact-val">dubeysatyansh4@gmail.com</div></div>
            </a>
            <a className="contact-item" href="tel:+917890719366">
              <div className="contact-icon"><PhoneIcon className="icon-accent2" /></div>
              <div><div className="contact-label">Phone</div><div className="contact-val">+91-7890719366</div></div>
            </a>
            <a className="contact-item" href="https://linkedin.com/in/satyansh-dubey" target="_blank" rel="noopener">
              <div className="contact-icon"><LinkedinIcon className="icon-linkedin" /></div>
              <div><div className="contact-label">LinkedIn</div><div className="contact-val">linkedin.com/in/satyansh-dubey</div></div>
            </a>
            <a className="contact-item" href="https://github.com/Satyansh-edith" target="_blank" rel="noopener">
              <div className="contact-icon"><GithubIcon className="icon-fg" /></div>
              <div><div className="contact-label">GitHub</div><div className="contact-val">github.com/Satyansh-edith</div></div>
            </a>
          </div>
        </FadeIn>
      </section>

      <footer>
        <span>© 2025 Satyansh Dubey. Built with intent.</span>
        <span>Kolkata, India · <a href="mailto:dubeysatyansh4@gmail.com">dubeysatyansh4@gmail.com</a></span>
      </footer>
    </main>
  );
}
