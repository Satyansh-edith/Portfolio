# 🚀 Portfolio Projects Overview

This repository showcases the core projects developed by **Satyansh Dubey** (Full-Stack Software Engineer & Hackathon Builder). Below is the comprehensive documentation of the four primary projects built, including technical architecture, core capabilities, features, and active deployment links.

---

## Index of Projects

1. [PLUTO — Autonomous Cyber Defense Agent](#1-pluto--autonomous-cyber-defense-agent)
2. [SmartLogistics — AI-Powered Supply Chain Operating System](#2-smartlogistics--ai-powered-supply-chain-operating-system)
3. [Rural Roots — AI Crop Disease Detection](#3-rural-roots--ai-crop-disease-detection)
4. [MAITRI — AI Mental Health Companion](#4-maitri--ai-mental-health-companion)

---

## 1. PLUTO — Autonomous Cyber Defense Agent

An **agent-first architecture** designed for real-time threat detection, sandboxed website interrogation, and automated attack response. Instead of utilizing traditional rigid rule-based filters, PLUTO integrates autonomous decision-making loops to identify and neutralize active vectors.

### 🛠️ Tech Stack
* **Frontend**: Next.js 16 (Turbopack), React 19, Recharts 3, Server-Sent Events (SSE)
* **Agent Core**: TypeScript 5, Playwright 1.59 (Headless Sandbox), Chrome MV3 Extension
* **CLI Interface**: Commander.js
* **Storage**: High-performance, stateless In-Memory SessionStore (zero database footprint)

### 💡 Key Features & Architecture
* **Autonomous Reasoning Loop**: Implements a continuous **Observe → Reason → Decide → Act** workflow. Every decision is logged with explanation trails and confidence scoring.
* **Playwright Sandbox Interrogator**: Automatically intercepts suspicious navigation requests and redirects them to an isolated, headless browser environment to safely scan DOM changes, malicious scripts, and security headers.
* **Chrome MV3 Extension**: Intercepts active browser navigation, injects warning pages for blocked domains, and displays a live telemetry panel via a custom floating floating widget.
* **Automated Mitigation Engine**: Triggers instantaneous IP blocking, connection throttling, and reversible rate-limits with complete audit trails.
* **PLUTO CLI**: A developer-friendly terminal interface supporting manual site scanning, telemetry queries, and active agent monitoring.
* **Multi-Vector Classification**: Classifies 11+ attack signatures including DDoS, brute-force patterns, port scanning, phishing structures, malicious redirection, and Content Security Policy (CSP) violations.

### 🔗 Project Links
* **GitHub Repository**: [Satyansh-edith/plutopuss](https://github.com/Satyansh-edith/plutopuss)
* **Live Deployment**: [plutopuss.vercel.app](https://plutopuss.vercel.app/)

---

## 2. SmartLogistics — AI-Powered Supply Chain Operating System

A next-generation enterprise logistics operating system integrating real-time shipment monitoring, intelligent routing engines, and granular security role configurations to streamline supply chain movements.

### 🛠️ Tech Stack
* **Frontend**: Next.js 14, TypeScript, Framer Motion (for fluid, responsive UI micro-animations)
* **Backend**: Express.js, Node.js
* **Database & Services**: Supabase (PostgreSQL, Auth, Real-time Channels)
* **Intelligence**: Custom AI Routing Engine

### 💡 Key Features & Architecture
* **Dynamic Route Recommendation**: Employs AI algorithms to process real-time weather alerts and localized transit risk metrics, suggesting optimized alternative shipping routes.
* **Intelligent API Key Rotation**: Built a custom secure middleware layer that rotates API keys dynamically to prevent quota exhaustion and ensure high-availability routing data.
* **Granular Role Dashboards**: Implements role-based access control (RBAC) producing distinct dashboard consoles for dispatchers, executives, and clients.
* **Real-time Synchronization**: Uses database webhooks and WebSocket streams to display instant shipment location movements, inventory changes, and risk calculations.

### 🔗 Project Links
* **GitHub Repository**: [Satyansh-edith/Logisticss](https://github.com/Satyansh-edith/Logisticss)
* **Live Deployment**: [logistics-1-mypj.onrender.com](https://logistics-1-mypj.onrender.com)

---

## 3. Rural Roots — AI Crop Disease Detection

A digital agriculture platform leveraging artificial intelligence and telemetry integration to identify crop pathogens, track outbreaks, and assist rural farmers with rapid diagnostics.

### 🛠️ Tech Stack
* **Language & Backend**: Python, FastAPI
* **Intelligence**: Computer Vision (PyTorch/TensorFlow models)
* **Integration**: Geotagging services, IoT Sensor Telemetry

### 💡 Key Features & Architecture
* **AI Pathogen Diagnostic Engine**: Analyzes field crop leaf photography to classify agricultural diseases instantly using customized image recognition models.
* **Sensory Telemetry Fusion**: Blends leaf image diagnostics with environmental data (soil moisture, relative humidity, air temperature) gathered via IoT nodes for higher prediction accuracy.
* **Local Outbreak Mapping**: Automatically logs geographic coordinates of positive disease markers, plotting localized maps to help track crop disease spreads.

### 🔗 Project Links
* **Live Deployment**: [ruralroot.netlify.app](https://ruralroot.netlify.app)

---

## 4. MAITRI — AI Mental Health Companion

A fully offline, voice-enabled mental health and therapeutic companion designed specifically for astronauts and high-stress professionals working in extreme, isolated environments.

### 🛠️ Tech Stack
* **Frontend**: React (Vite)
* **Backend**: Python
* **Voice & ML**: Local speech-to-text engines, computer vision emotion models

### 💡 Key Features & Architecture
* **100% Offline Operations**: Tailored for zero-network conditions. All diagnostic audio processing and expression recognition tasks execute completely locally, enforcing privacy-by-design.
* **Facial Expression Biometrics**: Continuously processes live facial landmarks to analyze user micro-expressions, logging real-time emotional fluctuations.
* **Asynchronous Voice Pipeline**: Supports natural dialogue with voice-based therapeutic conversations, mapping transcription sentiment trends.
* **Sentiment-Driven Interventions**: Triggers customized wellness paths, relaxation modules, or clinical dialogue prompts matching detected stress indicators.

### 🔗 Project Links
* **GitHub Profile**: [Satyansh-edith profile](https://github.com/Satyansh-edith)
