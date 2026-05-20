import { useEffect, useRef } from "react";
import Particles from "../components/Particles";
import ColorBends from "../components/ColorBends";
import ExperienceSection from "../components/Experiencesection";

/* ── Inline SVG Icons ── */
const Icons = {
    React: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <circle cx="12" cy="12" r="2.05" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
        </svg>
    ),
    Node: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path d="M12 2L2 7v10l10 5 10-5V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
    ),
    SQL: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
    ),
    Firebase: () => (
        <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M5.8 18.6L8 4.2l4.4 8.3-6.6 6.1z" fill="currentColor" opacity="0.7" />
            <path d="M15.5 9.4L12.8 4l-4.8 9 7.5 5.6-2.5 0.1z" fill="currentColor" />
            <path d="M5.8 18.6l2.2-4.8 9 4.8-11.2 0z" fill="currentColor" opacity="0.5" />
        </svg>
    ),
    Cert: () => (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <path d="M12 2l2.4 4.8 5.3.8-3.85 3.75.91 5.3L12 14.15l-4.77 2.5.91-5.3L4.3 7.6l5.3-.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    ),
    Arrow: () => (
        <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    ArrowUpRight: () => (
        <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
            <path d="M4 12L12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

/* ── Data ── */
const skillGroups = [
    {
        title: "Frontend & Backend",
        skills: [
            { name: "React.js", pct: 88, logo: "React" },
            { name: "HTML / CSS / JS", pct: 80 },
            { name: "Node.js", pct: 80, logo: "Node" },
            { name: "SQL Server", pct: 75, logo: "SQL" },
            { name: "React Native", pct: 80 },
        ],
    },
    {
        title: "IT & Infrastructure",
        skills: [
            { name: "Technical Support", pct: 92 },
            { name: "Active Directory", pct: 80 },
            { name: "Network / Cabling", pct: 90 },
            { name: "Photo & Video Editing", pct: 85 },
            { name: "CCTV Systems", pct: 85 },
        ],
    },
];

const tools = [
    "Firebase", "Expo", "Supabase", "Snow Ticketing",
    "Fiber Optics", "NVR / DVR", "ELD Systems",
    "Remote Support", "Virtual Assist.",
];

const experience = [
    {
        company: "Lepanto Consolidated Mining Co.",
        role: "Junior System Programmer",
        period: "May 2025 – Present",
        duration: "Current",
        desc: "In my current role, I design and develop web-based systems that streamline and automate daily business processes. I primarily work with React.js, Node.js, and SQL Server to build efficient, scalable, and user-friendly applications tailored to organizational needs. I am also responsible for maintaining and improving existing systems to ensure they remain reliable, sustainable, and high-performing for end users. Beyond development, I provide technical support across hardware and infrastructure, including computers, printers, and network related concerns helping ensure smooth day-to-day operations.",
        current: true,
        index: "01",
        images: ["/lp.jpg", "/lp1.jpg"],
        bullets: [],
        logo: "/Lepanto.png",
    },
    {
        company: "ThoughtFocus",
        role: "Software Support",
        period: "Jan – May 2025",
        duration: "5 mos",
        desc: "Provided end-to-end technical support for Branch Automation Systems, ensuring secure, smooth, and efficient banking operations. Managed system configurations, maintained accurate customer signature and data records, and ensured reliable data storage and system performance to support daily banking processes with minimal downtime.",
        index: "02",
        images: [],
        bullets: [],
        logo: "/tf.jpg",
    },
    {
        company: "ThoughtFocus",
        role: "IT Helpdesk – Tier 1",
        period: "Aug 2024 – Jan 2025",
        duration: "6 mos",
        desc: "Remote support for desktops, printers, peripherals. Managed Duo MFA, Active Directory, Snow ticketing.",
        bullets: [
            "Provided remote technical support for desktops, laptops, printers, fax machines, and other peripherals.",
            "Managed Duo Multi-Factor Authentication (MFA), including user onboarding, activation, device enrollment, and troubleshooting.",
            "Created, edited, and deactivated Duo user accounts and access policies in line with company security standards.",
            "Administered Active Directory (AD) to manage user accounts, password resets, and group permissions.",
            "Utilized the Snow Ticketing System to log, prioritize, and resolve technical incidents efficiently.",
            "Supported end-users via remote tools, phone, and email to ensure minimal downtime and optimal productivity.",
            "Documented resolutions and maintained accurate records of user requests and system changes.",
        ],
        index: "03",
        images: [],
        logo: "/tf.jpg",
    },
    {
        company: "ThoughtFocus",
        role: "Technical Support Associate",
        period: "Mar – Aug 2024",
        duration: "6 mos",
        desc: "Inbound/outbound support via calls, email, chat. Configured J.J. Keller ELD systems for compliance.",
        index: "04",
        images: [],
        bullets: [
            "Provided troubleshooting support via inbound / outbound calls, emails, and live chat.",
            "Remotely configured and assisted users with the Encompass Electronic Logging Device (ELD) application to ensure proper functionality and compliance.",
            "Worked Remotely using Soti Remote for the drivers/truckers devices",
        ],
        logo: "/tf.jpg",
    },
    {
        company: "Bitshares Labs Inc.",
        role: "Junior Mobile Developer",
        period: "May – Aug 2023",
        duration: "4 mos",
        desc: "Proposed and developed an on-boarding mobile application to monitor all of their new hires and intern students based on their performance and attendance.",
        award: "Technical Excellence Award",
        index: "05",
        images: ["/bit.jpg", "/bit1.jpg"],
        bullets: ["Received an award \"Technical Excellence Award\""],
        logo: "/bitshares.jpg",
    },
    {
        company: "JSTech Electronics & Services",
        role: "Electronic Security Technician",
        period: "Oct 2020 – Apr 2022",
        duration: "1 yr 7 mos",
        desc: "Installed, troubleshot, and maintained CCTV systems (IP and analog), including switches, NVRs, DVRs, fiber optics, and UTP cabling. Configured remote access systems for surveillance and handled satellite TV hardware installations. Served as an official Cignal TV Technician.",
        index: "06",
        images: ["/cctv.jpg", "/cctv1.jpg", "/cctv2.jpg"],
        bullets: [],
        logo: "/js.png",
    },
];

const disciplines = [
    "Web Development",
    "Mobile Development",
    "IT Helpdesk & Support",
    "Electronic Security",
];

const certs = [
    { title: "Branding Yourself as a Future IT Professional", year: "'23", issuer: "iPhiTech IT and Digital Solutions" },
    { title: "Front-End Development", year: "'23", issuer: "Accenture" },
];

const stackItems = [
    { lbl: "React", logo: "React" },
    { lbl: "Node", logo: "Node" },
    { lbl: "SQL Server", logo: "SQL" },
    { lbl: "Firebase", logo: "Firebase" },
];

const tickerItems = [
    "React.js", "Node.js", "SQL Server", "Active Directory", "Fiber Optics",
    "React Native", "IT Helpdesk", "CCTV Systems", "Photo & Video", "TypeScript",
    "Supabase", "Firebase", "Expo", "Snow Ticketing", "ELD Systems",
];

const stats = [
    { n: 3, suffix: "+", label: "Years Experience" },
    { n: 6, suffix: "", label: "Roles Held" },
    { n: 3, suffix: "", label: "Companies" },
    { n: 2, suffix: "", label: "Certifications" },
];

export default function About() {
    const heroNameRef = useRef(null);
    const statsRef = useRef(null);
    const skillAreaRef = useRef(null);
    const statsStarted = useRef(false);
    const skillsStarted = useRef(false);

    /* ─ Intersection Observer for scroll reveals ─ */
    useEffect(() => {
        const revealEls = document.querySelectorAll(".av-sr");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const delay = parseInt(el.dataset.delay) || 0;
                        setTimeout(() => el.classList.add("av-in"), delay);
                        obs.unobserve(el);
                    }
                });
            },
            { threshold: 0.08 }
        );
        revealEls.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    /* ─ Stats counter trigger ─ */
    useEffect(() => {
        const grid = statsRef.current;
        if (!grid) return;
        const trigger = () => {
            grid.querySelectorAll(".av-stat-num").forEach((el) => {
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || "";
                const dur = 900;
                let t0 = null;
                const step = (ts) => {
                    if (!t0) t0 = ts;
                    const prog = Math.min((ts - t0) / dur, 1);
                    const ease = 1 - Math.pow(1 - prog, 3);
                    el.textContent = Math.round(ease * target) + suffix;
                    if (prog < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
        };
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !statsStarted.current) {
                        statsStarted.current = true;
                        trigger();
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        obs.observe(grid);
        return () => obs.disconnect();
    }, []);

    /* ─ Skill bars ─ */
    useEffect(() => {
        if (!skillAreaRef.current) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !skillsStarted.current) {
                        skillsStarted.current = true;
                        e.target.querySelectorAll(".av-bar-fill").forEach((b) => {
                            b.style.width = b.dataset.w;
                        });
                        e.target.querySelectorAll(".av-bar-dot").forEach((b) => {
                            b.style.left = b.dataset.l + "%";
                        });
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        obs.observe(skillAreaRef.current);
        return () => obs.disconnect();
    }, []);

    /* ─ Parallax on hero name ─ */
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (heroNameRef.current) {
                        heroNameRef.current.style.transform = `translateY(${window.scrollY * 0.06}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

            <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --av-serif: 'DM Serif Display', serif;
          --av-sans:  'DM Sans', sans-serif;
          --av-mono:  'DM Mono', monospace;
          --av-black: #0a0a0a;
          --av-white: #f5f5f0;
          --av-rule:  rgba(255,255,255,0.08);
          --av-g4:    #888;
          --av-g5:    #bbb;
        }

        @keyframes av-fadeUp   { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
        @keyframes av-blurIn   { from { opacity:0; filter:blur(8px); transform:translateY(10px); } to { opacity:1; filter:blur(0); transform:none; } }
        @keyframes av-slideL   { from { opacity:0; transform:translateX(-32px); } to { opacity:1; transform:none; } }
        @keyframes av-slideR   { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:none; } }
        @keyframes av-ticker   { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes av-pulse    { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        @keyframes av-glowPulse { 0%,100% { box-shadow:0 0 0 0 rgba(245,245,240,0); } 50% { box-shadow:0 0 20px 2px rgba(245,245,240,0.06); } }

        .av-sr {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1), filter 0.8s ease;
        }
        .av-sr.blur   { filter: blur(6px); }
        .av-sr.from-l { transform: translateX(-32px); }
        .av-sr.from-r { transform: translateX(32px); }
        .av-sr.av-in  { opacity:1 !important; transform:none !important; filter:none !important; }

        .av-hero-1  { animation: av-fadeUp .8s ease .05s both; }
        .av-hero-2  { animation: av-blurIn .9s ease .1s  both; }
        .av-hero-3  { animation: av-slideR .8s ease .3s  both; }
        .av-hero-4  { animation: av-blurIn .9s ease .4s  both; }
        .av-hero-5l { animation: av-slideL .8s ease .5s  both; }
        .av-hero-5r { animation: av-slideR .8s ease .6s  both; }
        .av-hero-6  { animation: av-fadeUp .8s ease .45s both; }
        .av-hero-7  { animation: av-fadeUp .8s ease .55s both; }

        .av-ticker { display:flex; width:max-content; animation: av-ticker 32s linear infinite; }
        .av-pulse  { animation: av-pulse 2s ease infinite; }
        .av-live-tag { animation: av-glowPulse 3s ease infinite; }

        /* ── Skills bar (white section) ── */
        .av-bar-fill {
          height: 100%;
          background: #111;
          border-radius: 2px;
          width: 0%;
          transition: width 1.6s cubic-bezier(.16,1,.3,1);
        }
        .av-bar-dot {
          width: 5px; height: 5px;
          background: #111;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 0%;
          transition: left 1.6s cubic-bezier(.16,1,.3,1);
        }

        .av-section-label {
          font-family: var(--av-mono); font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--av-g4);
          display: flex; align-items: center; gap: 12px;
        }
        .av-section-label::after { content:''; flex:1; height:0.5px; background:var(--av-rule); }

        .av-tag {
          display: inline-block; padding: 3px 10px;
          border: 0.5px solid #2a2a2a;
          font-family: var(--av-mono); font-size: 10px;
          color: var(--av-g4); letter-spacing: 0.06em; text-transform: uppercase;
          transition: border-color .2s, color .2s, transform .2s;
        }
        .av-tag:hover { border-color:rgba(255,255,255,.3); color:#f5f5f0; transform:translateY(-2px); }

        .av-exp-row {
          display: grid; grid-template-columns: 3rem 1fr auto;
          gap: 0 2rem; align-items: start;
          padding: 2rem 0; cursor: default;
          position: relative; transition: background .2s, transform .2s;
        }
        .av-exp-row::before {
          content: ''; position: absolute; left:0; bottom:0;
          height: 0.5px; width: 0;
          background: rgba(255,255,255,.2);
          transition: width .4s ease;
        }
        .av-exp-row:hover::before { width: 100%; }
        .av-exp-row:hover { background: rgba(255,255,255,.02); transform: translateX(4px); }

        .av-disc-row {
          display:flex; justify-content:space-between; align-items:center;
          padding:12px 0; border-bottom:0.5px solid var(--av-rule);
          font-family:var(--av-sans); font-size:14px; font-weight:300;
          color:rgba(245,245,240,.6);
          transition: color .2s, padding-left .2s;
        }
        .av-disc-row:hover { color:rgba(245,245,240,.9); padding-left:6px; }

        .av-cert-row { display:flex; gap:16px; align-items:flex-start; padding:20px 0; border-bottom:0.5px solid var(--av-rule); transition:background .2s; }
        .av-cert-row:hover { background:rgba(255,255,255,.02); }

        .av-stack-cell {
          padding:20px 0; border-top:0.5px solid var(--av-rule);
          display:flex; flex-direction:column; align-items:center; gap:10px;
          transition: background .25s, transform .2s;
        }
        .av-stack-cell:hover { background:rgba(255,255,255,.03); transform:translateY(-3px); }

        .av-live-badge {
          display:flex; align-items:center; gap:7px; padding:6px 14px;
          border:.5px solid rgba(255,255,255,.12);
          font-family:var(--av-mono); font-size:10px; color:#f5f5f0;
          letter-spacing:.08em; text-transform:uppercase;
          transition: border-color .3s, background .3s;
        }
        .av-live-badge:hover { border-color:rgba(255,255,255,.35); background:rgba(255,255,255,.04); }

        /* ── White skills section overrides ── */
        .sk-section-label {
          font-family: var(--av-mono); font-size: 9px;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #181818; margin-bottom: 36px;
          display: flex; align-items: center; gap: 10px;
        }
        .sk-accent-line { width: 28px; height: 1.5px; background: #111; display: inline-block; flex-shrink: 0; }
        .sk-title {
          font-family: var(--av-serif);
          font-size: clamp(30px, 4.5vw, 56px);
          font-weight: 400; color: #111;
          letter-spacing: -0.025em; line-height: 1;
          margin-bottom: clamp(32px, 5vw, 52px);
        }
        .sk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 60px); }
        @media (max-width: 600px) { .sk-grid { grid-template-columns: 1fr; } }
        .sk-group-title {
          font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #1b1b1b; margin-bottom: 20px; padding-bottom: 12px;
          border-bottom: 0.5px solid rgb(99, 99, 99); font-family: var(--av-mono);
        }
        .sk-row { margin-bottom: 18px; }
        .sk-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px; }
        .sk-name { font-size: 13px; color: #161616; font-weight: 400; display: flex; align-items: center; gap: 8px; }
        .sk-pct  { font-size: 11px; color: #181818; font-family: var(--av-mono); }
        .sk-track { height: 1.5px; background: rgba(0,0,0,0.07); border-radius: 2px; overflow: visible; position: relative; }
        .sk-tools-section { margin-top: clamp(40px,5vw,60px); padding-top: clamp(28px,4vw,44px); border-top: 0.5px solid rgba(0, 0, 0, 0.74); }
        .sk-tools-label { font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #1d1d1d; margin-bottom: 16px; font-family: var(--av-mono); }
        .sk-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .sk-tag {
          font-size: 11.5px; padding: 5px 12px;
          border: 0.5px solid rgba(0,0,0,0.12); border-radius: 40px;
          color: #555; letter-spacing: 0.02em; background: #fafafa;
          cursor: default; transition: background 0.2s, color 0.2s;
        }
        .sk-tag:hover { background: #cccccc; color: #111; }

        @media (max-width:760px) {
          .av-two-col   { grid-template-columns:1fr !important; }
          .av-stats-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

            {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
            <section style={{
                background: "#0a0a0a",
                padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px) clamp(56px,7vw,80px)",
                position: "relative", overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                }} />
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    background: "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 70%)",
                }} />

                <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="av-hero-1 av-section-label" style={{ marginBottom: "48px" }}>About</div>

                    <div style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-start", flexWrap: "wrap", gap: "24px",
                        marginBottom: "clamp(16px,3vw,28px)",
                    }}>
                        <h1 ref={heroNameRef} className="av-hero-2" style={{
                            fontFamily: "var(--av-serif)",
                            fontSize: "clamp(56px,10vw,80px)",
                            fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.02em",
                            color: "#f5f5f0",
                        }}>
                            Adrian
                            <em style={{ fontStyle: "italic", color: "#888" }}> Ventura</em>
                        </h1>
                        <div style={{ paddingTop: "8px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
                            <div className="av-live-badge av-hero-3">
                                <span className="av-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f5f5f0", display: "inline-block" }} />
                                Open to work
                            </div>
                            <span style={{ fontFamily: "var(--av-mono)", fontSize: "10px", color: "var(--av-g4)", letterSpacing: "0.08em", animation: "av-fadeUp .8s ease .5s both" }}>
                                Baguio City, PH
                            </span>
                        </div>
                    </div>

                    <div className="av-hero-4" style={{
                        fontFamily: "var(--av-mono)", fontSize: "clamp(11px,1.4vw,13px)",
                        color: "var(--av-g4)", letterSpacing: "0.08em",
                        marginBottom: "clamp(32px,4vw,48px)",
                        borderTop: "0.5px solid var(--av-rule)", paddingTop: "16px",
                    }}>
                        sys_programmer&nbsp;·&nbsp;full_stack_dev&nbsp;·&nbsp;it_professional
                    </div>

                    <div className="av-two-col" style={{
                        display: "grid", gridTemplateColumns: "1fr 1fr",
                        gap: "clamp(32px,5vw,80px)", marginBottom: "clamp(40px,6vw,72px)",
                    }}>
                        <p className="av-hero-5l" style={{
                            fontFamily: "var(--av-sans)", fontSize: "clamp(14px,1.7vw,17px)",
                            fontWeight: 300, color: "rgba(245,245,240,0.55)", lineHeight: 1.8,
                        }}>
                            IT professional with a B.S. in Information Technology (Web Technology major)
                            from the University of the Cordilleras. Currently building web-based automation
                            systems at Lepanto Consolidated Mining Co. using React.js, Node.js, and SQL Server.
                        </p>
                        <p className="av-hero-5r" style={{
                            fontFamily: "var(--av-sans)", fontSize: "clamp(14px,1.7vw,17px)",
                            fontWeight: 300, color: "rgba(245,245,240,0.35)", lineHeight: 1.8,
                        }}>
                            Roots in mobile development, electronic security, and IT helpdesk support.
                            Open to freelance projects and happy to bring ideas to life.
                        </p>
                    </div>

                    <div ref={statsRef} className="av-stats-grid av-hero-6" style={{
                        display: "grid", gridTemplateColumns: "repeat(4,1fr)",
                        borderTop: "0.5px solid var(--av-rule)",
                    }}>
                        {stats.map(({ n, suffix, label }, i) => (
                            <div key={label} style={{
                                padding: "24px clamp(12px,2vw,28px)",
                                borderRight: i < 3 ? "0.5px solid var(--av-rule)" : "none",
                                transition: "background 0.25s", cursor: "default",
                            }}
                                onMouseMove={(e) => {
                                    const r = e.currentTarget.getBoundingClientRect();
                                    const dx = (e.clientX - r.left - r.width / 2) * 0.08;
                                    const dy = (e.clientY - r.top - r.height / 2) * 0.08;
                                    e.currentTarget.style.transform = `translate(${dx}px,${dy}px)`;
                                }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = ""; }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                            >
                                <div className="av-stat-num" data-count={n} data-suffix={suffix} style={{
                                    fontFamily: "var(--av-serif)",
                                    fontSize: "clamp(32px,5vw,52px)",
                                    color: "#f5f5f0", lineHeight: 1,
                                }}>
                                    0{suffix}
                                </div>
                                <div style={{
                                    fontFamily: "var(--av-mono)", fontSize: "10px",
                                    color: "var(--av-g4)", marginTop: "8px",
                                    letterSpacing: "0.08em", textTransform: "uppercase",
                                }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="av-hero-7" style={{
                        display: "flex", flexWrap: "wrap", gap: "8px",
                        marginTop: "clamp(24px,3vw,36px)",
                        paddingTop: "clamp(24px,3vw,36px)",
                        borderTop: "0.5px solid var(--av-rule)",
                    }}>
                        {["Web Development", "Mobile Dev", "IT Support", "System Programmer"].map((t) => (
                            <span key={t} className="av-tag">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          TICKER
      ══════════════════════════════ */}
            <div style={{
                overflow: "hidden",
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
                borderBottom: "0.5px solid rgba(255,255,255,0.06)",
                padding: "11px 0", background: "#0d0d0d",
            }}>
                <div className="av-ticker">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={item + i} style={{
                            fontFamily: "var(--av-mono)", fontSize: "10px",
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "rgba(255,255,255,0.2)", padding: "0 28px", whiteSpace: "nowrap",
                        }}>
                            {item}
                            <span style={{ color: "rgba(255,255,255,0.1)", marginLeft: "16px" }}>—</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════
          2. EXPERIENCE
      ══════════════════════════════ */}
            <ExperienceSection />


            {/* ══════════════════════════════
          3. SKILLS (white section)
      ══════════════════════════════ */}
            <section style={{ position: "relative", borderTop: "0.5px solid rgb(255, 255, 255)", background: '#dadada', overflow: "hidden" }}>
                {/* Background layer */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.5 }}>
                    <ColorBends
                        colors={["#313131", "#020202", "#1f1f1f"]}
                        rotation={90}
                        speed={0.2}
                        scale={1}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={1}
                        noise={0.15}
                        parallax={0.5}
                        iterations={1}
                        intensity={1.5}
                        bandWidth={6}
                        transparent
                        autoRotate={0}
                        color="#ffffff"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>

                {/* Content layer */}
                <div style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "1100px",
                    margin: "0 auto",

                    padding: "clamp(48px,7vw,88px) clamp(24px,5vw,72px)",
                }}>
                    <div className="sk-section-label">
                        <span className="sk-accent-line" />
                        Skills
                    </div>

                    <h2 className="sk-title">Technical Expertise</h2>

                    <div className="sk-grid" ref={skillAreaRef}>
                        {skillGroups.map(({ title, skills }) => (
                            <div key={title}>
                                <div className="sk-group-title">{title}</div>
                                {skills.map(({ name, pct, logo }) => {
                                    const L = logo ? Icons[logo] : null;
                                    const num = typeof pct === "string" ? parseInt(pct) : pct;
                                    const pctStr = typeof pct === "number" ? pct + "%" : pct;
                                    return (
                                        <div key={name} className="sk-row">
                                            <div className="sk-meta">
                                                <span className="sk-name">
                                                    {L && <span style={{ color: "rgba(0,0,0,0.3)", display: "flex" }}><L /></span>}
                                                    {name}
                                                </span>
                                                <span className="sk-pct">{pctStr}</span>
                                            </div>
                                            <div className="sk-track">
                                                <div className="av-bar-fill" data-w={pctStr} style={{ width: "0%" }} />
                                                <div className="av-bar-dot" data-l={num} style={{ left: "0%" }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    <div className="sk-tools-section">
                        <div className="sk-tools-label">Tools & Platforms</div>
                        <div className="sk-tags">
                            {tools.map((t) => <span key={t} className="sk-tag">{t}</span>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          4. EDUCATION + CERTS
      ══════════════════════════════ */}
            <section style={{
                background: "#0a0a0a",
                padding: "clamp(56px,8vw,96px) clamp(24px,6vw,80px)",
                borderTop: "0.5px solid rgba(255,255,255,0.05)",
            }}>
                <div className="av-two-col" style={{
                    maxWidth: "1100px", margin: "0 auto",
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(40px,6vw,80px)",
                }}>
                    {/* ── Education ── */}
                    <div>
                        <div className="av-sr av-section-label" style={{ marginBottom: "40px" }} data-delay="0">Education</div>
                        <div className="av-sr" data-delay="80" style={{ borderTop: "0.5px solid rgba(255,255,255,0.15)", paddingTop: "24px" }}>
                            <div style={{ fontFamily: "var(--av-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--av-g4)", marginBottom: "14px" }}>
                                Aug 2020 – Sep 2023
                            </div>
                            <div style={{ fontFamily: "var(--av-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#f5f5f0", lineHeight: 1.2, marginBottom: "8px" }}>
                                University of the Cordilleras
                            </div>
                            <div style={{ fontFamily: "var(--av-sans)", fontSize: "13px", fontWeight: 300, color: "rgba(245,245,240,0.45)", lineHeight: 1.7 }}>
                                B.S. Information Technology<br />Major in Web Technology
                            </div>
                        </div>

                        <div className="av-sr" data-delay="150" style={{ marginTop: "40px" }}>
                            <div style={{
                                fontFamily: "var(--av-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase",
                                color: "var(--av-g4)", marginBottom: "16px", paddingBottom: "12px", borderBottom: "0.5px solid var(--av-rule)",
                            }}>
                                Core Disciplines
                            </div>
                            {disciplines.map((d, i) => (
                                <div key={d} className="av-disc-row av-sr" data-delay={i * 50}>
                                    {d}
                                    <span style={{ fontFamily: "var(--av-mono)", fontSize: "10px", color: "var(--av-g4)" }}>0{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Certifications ── */}
                    <div>
                        <div className="av-sr av-section-label" style={{ marginBottom: "40px" }} data-delay="0">Certifications</div>
                        <div className="av-sr" data-delay="80" style={{ borderTop: "0.5px solid rgba(255,255,255,0.15)" }}>
                            {certs.map(({ title, year, issuer }, i) => (
                                <div key={title} className="av-cert-row">
                                    <span style={{ fontFamily: "var(--av-mono)", fontSize: "11px", color: "var(--av-g4)", paddingTop: "4px", minWidth: "28px" }}>0{i + 1}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontFamily: "var(--av-serif)", fontSize: "clamp(15px,2vw,19px)", color: "#f5f5f0", lineHeight: 1.3, marginBottom: "6px" }}>{title}</div>
                                        <span style={{ fontFamily: "var(--av-mono)", fontSize: "10px", color: "var(--av-g4)", letterSpacing: "0.06em" }}>CERTIFIED {year}</span>
                                        <span style={{ fontFamily: "var(--av-mono)", fontSize: "10px", color: "var(--av-g4)", letterSpacing: "0.06em" }}> {issuer}</span>
                                    </div>
                                    <span style={{ color: "rgba(255,255,255,0.2)", paddingTop: "4px" }}><Icons.Cert /></span>
                                </div>
                            ))}
                        </div>

                        <div className="av-sr" data-delay="160" style={{ marginTop: "40px" }}>
                            <div style={{
                                fontFamily: "var(--av-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase",
                                color: "var(--av-g4)", marginBottom: "16px", paddingBottom: "12px", borderBottom: "0.5px solid var(--av-rule)",
                            }}>
                                Primary Stack
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
                                {stackItems.map(({ lbl, logo }, i) => {
                                    const L = Icons[logo];
                                    return (
                                        <div key={lbl} className="av-stack-cell" style={{ borderRight: i < 3 ? "0.5px solid var(--av-rule)" : "none" }}>
                                            <span style={{ color: "rgba(255,255,255,0.5)", display: "flex" }}>{L && <L />}</span>
                                            <span style={{ fontFamily: "var(--av-mono)", fontSize: "9px", color: "var(--av-g4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{lbl}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}