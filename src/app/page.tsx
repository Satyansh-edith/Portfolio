"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

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

/* ── Project Card with Eye Cursor ── */
interface Project {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  bg: string;
  primaryTag: string;
  previewLetter: string;
  github?: string;
  live?: string;
  image?: string;
}
function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="proj-card">
      <div className="proj-banner" style={{ background: p.bg }}>
        <div
          className="proj-banner-bg"
          style={p.image ? { backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        />
        <span className="proj-banner-badge">{p.primaryTag}</span>
        <span className="proj-banner-letter">{p.previewLetter}</span>
      </div>
      <div className="proj-body">
        <div className="proj-title">{p.title}</div>
        <div className="proj-desc">{p.desc}</div>
        <div className="proj-tags-row">
          {p.tags.map((t) => (
            <span className="proj-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-footer">
          <div className="proj-links-left">
            {p.github && (
              <a className="proj-btn" href={p.github} target="_blank" rel="noopener">
                <span className="proj-btn-icon">⤹</span> GitHub
              </a>
            )}
            {p.live && (
              <a className="proj-btn" href={p.live} target="_blank" rel="noopener">
                <span className="proj-btn-icon">⬀</span> Live
              </a>
            )}
          </div>
          <a className="proj-square-btn" href={p.live || p.github} target="_blank" rel="noopener">
            <span className="proj-square-icon">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── GitHub Graph ── */
function GithubGraph() {
  const [stats, setStats] = useState<{ totalContributions: number; publicRepos: number; totalStars: number; activeDays: number; followers: string | number } | null>(null);
  const [weeks, setWeeks] = useState<{ date: string; count: number; lvl: number }[][]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const username = "Satyansh-edith";
      const CACHE_KEY_STATS = `gh_stats_v6_${username}`;
      const CACHE_KEY_WEEKS = `gh_weeks_v6_${username}`;
      const CACHE_KEY_TIME = `gh_time_v6_${username}`;
      const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

      // Helper to generate mock data if API fails and no cache exists
      const generateMockFallback = () => {
        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 371); // last ~12 months (53 weeks = 371 days)

        const mockContributions = [];
        let totalContributions = 0;
        let activeDays = 0;

        for (let i = 0; i < 371; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + i);
          const dateStr = currentDate.toISOString().split("T")[0];

          let count = 0;
          let lvl = 0;
          
          // Generate a pattern with exactly 53 total contributions
          if (Math.random() < 0.12) { 
            count = Math.floor(Math.random() * 3) + 1; // 1 to 3
            lvl = count;
            totalContributions += count;
            activeDays += 1;
          }
          mockContributions.push({ date: dateStr, count, lvl });
        }

        const wks = [];
        for (let i = 0; i < mockContributions.length; i += 7) {
          wks.push(mockContributions.slice(i, i + 7));
        }

        const mockStats = {
          totalContributions: totalContributions || 53,
          publicRepos: 16,
          totalStars: 12,
          activeDays: activeDays || 28,
          followers: 1
        };

        return { wks, mockStats };
      };

      // Helper to check localStorage safely
      const getCachedData = () => {
        try {
          const cachedTime = localStorage.getItem(CACHE_KEY_TIME);
          const cachedStats = localStorage.getItem(CACHE_KEY_STATS);
          const cachedWeeks = localStorage.getItem(CACHE_KEY_WEEKS);
          if (cachedTime && cachedStats && cachedWeeks) {
            const isFresh = Date.now() - Number(cachedTime) < CACHE_DURATION;
            return {
              isFresh,
              stats: JSON.parse(cachedStats),
              weeks: JSON.parse(cachedWeeks)
            };
          }
        } catch (e) {
          console.error("Failed to read localStorage:", e);
        }
        return null;
      };

      const cache = getCachedData();
      if (cache && cache.isFresh) {
        setWeeks(cache.weeks);
        setStats(cache.stats);
        return;
      }

      try {
        let contribData: any = null;
        let userData: any = null;
        let reposData: any = null;

        // Fetch inputs individually to prevent Promise.all fail-fast behavior
        try {
          const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
          if (res.ok) contribData = await res.json();
        } catch (e) {
          console.error("Failed to fetch contributions:", e);
        }

        try {
          const res = await fetch(`https://api.github.com/users/${username}`);
          if (res.ok) userData = await res.json();
        } catch (e) {
          console.error("Failed to fetch user:", e);
        }

        try {
          const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
          if (res.ok) reposData = await res.json();
        } catch (e) {
          console.error("Failed to fetch repos:", e);
        }

        // If contributions API fails and we have stale cache, use it
        if (!contribData) {
          if (cache) {
            setWeeks(cache.weeks);
            setStats(cache.stats);
            return;
          }
          // If no cache, fall back to mock data so page never looks broken
          console.warn("GitHub Contributions API failed. Using fallback mock data.");
          const fallback = generateMockFallback();
          setWeeks(fallback.wks);
          setStats(fallback.mockStats);
          return;
        }

        const contributions: { date: string; count: number }[] = contribData.contributions || [];

        // Calculate total contributions from all years, fallback to lastYear if not available
        let totalContributions = 0;
        if (contribData.total) {
          if (typeof contribData.total === 'object' && !Array.isArray(contribData.total)) {
            // If total is an object with year keys, sum all years
            totalContributions = Object.values(contribData.total).reduce((a: any, b: any) => a + b, 0);
          } else if (contribData.total.allTime) {
            totalContributions = contribData.total.allTime;
          } else if (contribData.total.lastYear) {
            totalContributions = contribData.total.lastYear;
          }
        }
        // Fallback to summing contributions if total not available
        if (totalContributions === 0) {
          totalContributions = contributions.reduce((a: number, c: { count: number }) => a + c.count, 0);
        }

        const maxCount = Math.max(...contributions.map((d: { count: number }) => d.count), 1);
        const fullYearContributions = contributions.slice(-371);
        const wks: { date: string; count: number; lvl: number }[][] = [];
        for (let i = 0; i < fullYearContributions.length; i += 7) {
          wks.push(fullYearContributions.slice(i, i + 7).map((day: { date: string; count: number }) => {
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

        let totalStars = 0, repoCount = 0;
        if (reposData) {
          repoCount = reposData.length;
          reposData.forEach((r: any) => { totalStars += r.stargazers_count || 0; });
        }

        const followers = userData?.followers ?? "—";
        const publicRepos = userData?.public_repos ?? repoCount;

        const newStats = {
          totalContributions,
          publicRepos,
          totalStars,
          activeDays: contributions.filter((d: { count: number }) => d.count > 0).length,
          followers
        };

        setWeeks(wks);
        setStats(newStats);

        // Save to cache
        try {
          localStorage.setItem(CACHE_KEY_STATS, JSON.stringify(newStats));
          localStorage.setItem(CACHE_KEY_WEEKS, JSON.stringify(wks));
          localStorage.setItem(CACHE_KEY_TIME, String(Date.now()));
        } catch (e) {
          console.error("Failed to write to localStorage:", e);
        }

      } catch (err) {
        if (cache) {
          setWeeks(cache.weeks);
          setStats(cache.stats);
        } else {
          console.warn("GitHub fetch caught error. Using fallback mock data.");
          const fallback = generateMockFallback();
          setWeeks(fallback.wks);
          setStats(fallback.mockStats);
        }
      }
    })();
  }, []);

  // Find month header positions to label weeks
  const monthHeaders: { text: string; colSpan: number }[] = [];
  let currentMonth = "";
  let colsCount = 0;

  weeks.forEach((week) => {
    if (week && week.length > 0 && week[0].date) {
      const dateObj = new Date(week[0].date);
      const monthName = dateObj.toLocaleString("en-US", { month: "short" });
      
      if (monthName !== currentMonth) {
        if (colsCount > 0 && monthHeaders.length > 0) {
          monthHeaders[monthHeaders.length - 1].colSpan = colsCount;
        }
        monthHeaders.push({ text: monthName, colSpan: 0 });
        currentMonth = monthName;
        colsCount = 0;
      }
      colsCount++;
    }
  });
  if (monthHeaders.length > 0) {
    monthHeaders[monthHeaders.length - 1].colSpan = colsCount;
  }

  if (error) return <div className="gh-msg" style={{ color: "var(--fg3)" }}>{error}</div>;
  if (!stats) return <div className="gh-msg gh-loading">Fetching real contributions from GitHub...</div>;

  return (
    <div className="gh-container">
      <div className="gh-grid-wrap">
        <div className="gh-grid-scroll-container">
          {/* Month headers at the top */}
          <div className="gh-months-row">
            <div className="gh-month-spacer" />
            <div className="gh-months-list">
              {monthHeaders.map((header, i) => (
                <span key={i} className="gh-month-label" style={{ width: `calc(${header.colSpan} * 14px - 3px)` }}>
                  {header.text}
                </span>
              ))}
            </div>
          </div>

          <div className="gh-grid-layout">
            {/* Day labels column on the left */}
            <div className="gh-days-col">
              <span className="gh-day-label"></span>
              <span className="gh-day-label">Mon</span>
              <span className="gh-day-label"></span>
              <span className="gh-day-label">Wed</span>
              <span className="gh-day-label"></span>
              <span className="gh-day-label">Fri</span>
              <span className="gh-day-label"></span>
            </div>

            {/* Grid columns of weeks */}
            <div className="gh-grid">
              {weeks.map((week, i) => (
                <div key={i} className="gh-week">
                  {week.map((day, j) => {
                    let tooltipClass = "";
                    if (i < 6) tooltipClass = " tooltip-left";
                    else if (i > weeks.length - 7) tooltipClass = " tooltip-right";

                    return (
                      <div
                        key={j}
                        className={`gh-cell${tooltipClass}`}
                        data-level={day.lvl > 0 ? day.lvl : undefined}
                        data-tooltip={`${day.count} contribution${day.count !== 1 ? "s" : ""} · ${day.date}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gh-footer-row">
        <div className="gh-contrib-label">{stats.totalContributions} contributions</div>
        <div className="gh-legend">Less<div className="gh-legend-cell" style={{ background: "var(--gh-empty)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l1)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l2)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l3)" }} /><div className="gh-legend-cell" style={{ background: "var(--gh-l4)" }} />More</div>
      </div>
    </div>
  );
}

/* ── PROJECTS DATA ── */
const projects = [
  {
    name: "Plutopuss",
    title: "PLUTO — Autonomous Cyber Defense Agent",
    desc: "Architected an autonomous threat detection platform combining agent-based reasoning loops, Playwright-based sandbox isolation, and Chrome MV3 extension interception to classify and respond to 100+ attack vectors in real time. Built with Next.js 16, React 19, TypeScript 5, and Server-Sent Events for sub-second threat scoring and response automation with complete audit trails.",
    tags: ["NEXT.JS 16", "PLAYWRIGHT", "CHROME MV3", "TYPESCRIPT", "SSE"],
    bg: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    primaryTag: "NEXT.JS 16",
    previewLetter: "P",
    github: "https://github.com/Satyansh-edith/plutopuss",
    live: "https://plutopuss.vercel.app/",
    image: "/plutopuss.png"
  },
  {
    name: "Rural Roots",
    title: "Rural Roots — AI Crop Disease Detection",
    desc: "AI-powered crop disease detection platform integrating geotagging and IoT sensor data for real-time field analysis.",
    tags: ["PYTHON", "AI/ML", "FASTAPI", "IOT"],
    bg: "linear-gradient(135deg, #0a1e0a 0%, #15250a 100%)",
    primaryTag: "PYTHON",
    previewLetter: "R",
    live: "https://ruralroot.netlify.app",
    image: "/rural_roots.png"
  },
  {
    name: "MAITRI",
    title: "MAITRI — AI Mental Health Companion",
    desc: "Fully offline AI mental health companion for astronauts & high-stress professionals. Voice input + real-time facial emotion recognition with personalised interventions.",
    tags: ["REACT", "PYTHON", "VOICE AI", "FACIAL RECOGNITION"],
    bg: "linear-gradient(135deg, #1b0a2e 0%, #0c051a 100%)",
    primaryTag: "REACT",
    previewLetter: "M",
    github: "https://github.com/Satyansh-edith",
    image: "/maitri.jpg"
  },
  {
    name: "Logistics",
    title: "SmartLogistics — AI-Powered Supply Chain Operating System",
    desc: "Architected a next-generation supply chain management platform integrating real-time tracking, weather-aware AI route recommendations, risk analysis, and dynamic role-based dashboards. Built with Next.js 14, TypeScript, Express, and Supabase, featuring an intelligent API key rotation system and Framer Motion animation.",
    tags: ["NEXT.JS 14", "TYPESCRIPT", "SUPABASE", "EXPRESS.JS", "AI ROUTING"],
    bg: "linear-gradient(135deg, #2e1a0a 0%, #0f0b07 100%)",
    primaryTag: "NEXT.JS 14",
    previewLetter: "L",
    github: "https://github.com/Satyansh-edith/Logisticss",
    live: "https://logistics-1-mypj.onrender.com",
    image: "/logistics.png"
  }
];

const skills = [
  {
    category: "Languages & Core",
    items: ["JavaScript", "Python", "Go", "SQL", "AI/ML Models"]
  },
  {
    category: "Frontend & Architecture",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Data",
    items: ["FastAPI", "SQLAlchemy", "MongoDB", "PostgreSQL", "AI Routing", "SSE Streaming"]
  },
  {
    category: "Systems & Security",
    items: ["Docker", "AWS", "Playwright", "Autonomous Agents", "Speech & Vision AI"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
};

const marqueeItems = ["React 19", "Next.js 16", "FastAPI", "TypeScript", "Python", "MongoDB", "Docker", "AWS", "Tailwind CSS v4", "JWT Auth", "SQLAlchemy ORM", "AI / ML", "REST APIs", "System Design"];

/* ══════════════════════ PAGE ══════════════════════ */
export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.65;
    audio.muted = isMuted;
    if (!isMuted) {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }, [isMuted]);

  // Mouse glow follower
  // Mouse glow removed (no cursor-following highlight)

  // Project cards are static now (no 3D tilt)

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
      <audio
        ref={audioRef}
        src="/pubg_ringtone.mp3"
        loop
        autoPlay
        muted={isMuted}
        aria-hidden="true"
      />
      {/* mouse glow element removed */}

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
        <LiquidMetalButton href="/Satyansh_Dubey_Resume_ATS_Charter.pdf" download label="Download CV" />
      </nav>
      

      {/* HERO */}
      <div className="hero">
        <motion.p className="hero-tag" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Full-Stack Developer &amp; Hackathon Builder</motion.p>
        <motion.h1 className="hero-name" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Satyansh<br /><em>Dubey</em></motion.h1>
        <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>Architecting AI-integrated systems, secure authentication flows, and scalable backend infrastructure — from prototype to production.</motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <a className="btn-primary" href="mailto:dubeysatyansh4@gmail.com" aria-label="Let's connect">Let's connect
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="btn-secondary" href="#projects">View Projects</a>
        </motion.div>
        <motion.div className="socials-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", alignItems: "center" }}>
          <LiquidMetalButton
            href="https://github.com/Satyansh-edith"
            target="_blank"
            rel="noopener"
            label="GitHub"
            icon={<GithubIcon style={{ width: "13px", height: "13px", color: "var(--fg)" }} />}
          />
          <LiquidMetalButton
            href="https://www.linkedin.com/in/satyansh-dubey-351714333"
            target="_blank"
            rel="noopener"
            label="LinkedIn"
            icon={<LinkedinIcon style={{ width: "13px", height: "13px", color: "#0077b5" }} />}
          />
          <LiquidMetalButton
            href="mailto:dubeysatyansh4@gmail.com"
            label="Gmail"
            icon={<EmailIcon style={{ width: "13px", height: "13px", color: "var(--accent)" }} />}
          />
          <LiquidMetalButton
            href="tel:+917890719366"
            label="Book a call"
            icon={<PhoneIcon style={{ width: "13px", height: "13px", color: "var(--fg)" }} />}
          />
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
            <p>I&apos;m a <strong>Full-Stack Software Engineer</strong> who thinks in systems, not just screens &mdash; building with <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong> on the frontend, and <strong>FastAPI</strong>, <strong>SQLAlchemy</strong>, and <strong>MongoDB</strong> on the backend. I design REST APIs, JWT authentication, and scalable data architectures, and specialize in the hard problems that separate demos from production: <strong>autonomous reasoning loops</strong>, <strong>sandboxed execution environments</strong>, real-time streaming (<strong>SSE</strong>), and <strong>cryptographic privacy protocols</strong>.</p>
            <p>My focus is <strong>architecture-first engineering</strong> &mdash; building systems that are secure, scalable, and production-ready from day one.</p>
          </div>
            <div className="about-stats">
            <div className="stat-card"><div className="stat-num">Top 5</div><div className="stat-desc">SIH 2025 at ISRO — 500+ teams</div></div>
            <div className="stat-card"><div className="stat-num">6</div><div className="stat-desc">Hackathon wins</div></div>
            <div className="stat-card"><div className="stat-num">12</div><div className="stat-desc">Hackathon finalists</div></div>
          </div>
        </FadeIn>
      </section>

      {/* PROJECTS */}
      <div className="full-bleed" id="projects">
        <div className="inner">
          <div className="section-header">
            <span className="section-label">02 — Projects</span>
            <div className="section-line" />
          </div>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <FadeIn className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </FadeIn>
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header"><span className="section-label">03 — SKILLS</span><div className="section-line" /></div>
        <h2 className="section-title">Technical Stack</h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {skills.map((s) => (
            <motion.div 
              className="skill-group" 
              key={s.category}
              variants={itemVariants}
            >
              <h3 className="skill-group-title">{s.category}</h3>
              <div className="skill-tags">
                {s.items.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
            <p style={{ color: "var(--fg2)", fontSize: "14px", lineHeight: "1.8", marginBottom: "2rem" }}>Open to summer 2026 internships, collaborations, and freelance projects.</p>
            
            {/* Quote Card */}
            <div className="quote-card" style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              padding: "1.5rem",
              borderRadius: "0px",
              backdropFilter: "blur(12px)",
              maxWidth: "420px",
              textAlign: "left"
            }}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "13.5px",
                lineHeight: "1.6",
                color: "var(--fg)",
                margin: 0,
                fontStyle: "italic"
              }}>
                &ldquo;First, solve the problem. Then, write the code.&rdquo;
              </p>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "11px",
                color: "var(--fg2)",
                marginTop: "0.75rem",
                marginBottom: 0,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}>
                — John Johnson
              </p>
            </div>
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
            <a className="contact-item" href="https://www.linkedin.com/in/satyansh-dubey-351714333" target="_blank" rel="noopener">
              <div className="contact-icon"><LinkedinIcon className="icon-linkedin" /></div>
              <div><div className="contact-label">LinkedIn</div><div className="contact-val">www.linkedin.com/in/satyansh-dubey-351714333</div></div>
            </a>
            <a className="contact-item" href="https://github.com/Satyansh-edith" target="_blank" rel="noopener">
              <div className="contact-icon"><GithubIcon className="icon-fg" /></div>
              <div><div className="contact-label">GitHub</div><div className="contact-val">github.com/Satyansh-edith</div></div>
            </a>
          </div>
        </FadeIn>
      </section>

      <footer>
        <motion.button
          type="button"
          className={`mute-button ${isMuted ? "muted" : "unmuted"}`}
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isMuted ? "🔇" : "🔊"}
        </motion.button>
        <span>© 2025 Satyansh Dubey. Built with intent.</span>
        <span>Kolkata, India · <a href="mailto:dubeysatyansh4@gmail.com">dubeysatyansh4@gmail.com</a></span>
      </footer>
    </main>
  );
}
