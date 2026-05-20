import { useEffect, useRef } from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import Particles from "../components/Particles";

/* ── Inline SVG Icons ── */
const Icons = {
    Cert: () => (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <path d="M12 2l2.4 4.8 5.3.8-3.85 3.75.91 5.3L12 14.15l-4.77 2.5.91-5.3L4.3 7.6l5.3-.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    ),
};

/* ── Data ── */
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

export default function ExperienceSection() {
    const headerRef = useRef(null);

    /* ── Scroll reveal for header ── */
    useEffect(() => {
        const revealEls = document.querySelectorAll(".exp-sr");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const delay = parseInt(el.dataset.delay) || 0;
                        setTimeout(() => el.classList.add("exp-in"), delay);
                        obs.unobserve(el);
                    }
                });
            },
            { threshold: 0.08 }
        );
        revealEls.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @keyframes exp-glowPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(245,245,240,0); }
                    50% { box-shadow: 0 0 20px 2px rgba(245,245,240,0.06); }
                }
                @keyframes exp-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }

                .exp-sr {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
                }
                .exp-sr.exp-in {
                    opacity: 1;
                    transform: none;
                }

                .exp-live-tag {
                    animation: exp-glowPulse 3s ease infinite;
                }
                .exp-pulse {
                    animation: exp-pulse 2s ease infinite;
                }

                /* ── Card styles ── */
                .exp-card {
                    background: var(--exp-card-bg, #242424);
                    border: 0.5px solid rgba(255,255,255,0.08);
                    border-radius: 24px;
                    padding: clamp(20px, 4vw, 64px);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    height: auto;
                    width: 100%;
                    box-sizing: border-box;
                }

                /* ── Card header row ── */
                .exp-card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 16px;
                }

                /* ── Period/duration stacks to left on mobile ── */
                .exp-meta {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 6px;
                    flex-shrink: 0;
                    padding-left: 12px;
                }

                /* ── Role title + badge row ── */
                .exp-role-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 8px;
                }

                /* ── Company row ── */
                .exp-company-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 14px;
                    flex-wrap: wrap;
                }

                /* ── Description text ── */
                .exp-desc {
                    font-family: var(--av-sans, 'DM Sans', sans-serif);
                    font-size: clamp(13px, 1.6vw, 15px);
                    font-weight: 300;
                    color: rgba(245,245,240,0.45);
                    line-height: 1.8;
                }

                /* ── Bullets ── */
                .exp-bullets {
                    list-style: none;
                    padding: 0;
                    margin: 12px 0 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .exp-bullet {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                    font-family: var(--av-sans, 'DM Sans', sans-serif);
                    font-size: clamp(12px, 1.4vw, 13px);
                    font-weight: 300;
                    color: rgba(245,245,240,0.38);
                    line-height: 1.7;
                }
                .exp-bullet-dot {
                    flex-shrink: 0;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.2);
                    margin-top: 8px;
                }

                /* ── Gallery ── */
                .exp-gallery-label {
                    font-family: var(--av-mono, 'DM Mono', monospace);
                    font-size: 9px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #888;
                    margin-bottom: 12px;
                    padding-top: 20px;
                    border-top: 0.5px solid rgba(255,255,255,0.06);
                }
                .exp-gallery-grid {
                    display: grid;
                    gap: 8px;
                }
                .exp-gallery-img-wrap {
                    border-radius: 10px;
                    overflow: hidden;
                    border: 0.5px solid rgba(255,255,255,0.06);
                    position: relative;
                    cursor: pointer;
                    transition: transform 0.25s ease, border-color 0.25s;
                }
                .exp-gallery-img-wrap:hover {
                    transform: scale(1.02);
                    border-color: rgba(255,255,255,0.2);
                }
                .exp-gallery-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .exp-gallery-num {
                    position: absolute;
                    bottom: 6px;
                    right: 8px;
                    font-family: var(--av-mono, 'DM Mono', monospace);
                    font-size: 9px;
                    color: rgba(255,255,255,0.4);
                    letter-spacing: 0.08em;
                }

                /* ── Section label ── */
                .exp-section-label {
                    font-family: var(--av-mono, 'DM Mono', monospace);
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #888;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .exp-section-label::after {
                    content: '';
                    flex: 1;
                    height: 0.5px;
                    background: rgba(255,255,255,0.08);
                }

                /* ── MOBILE OVERRIDES ── */
                @media (max-width: 600px) {
                    .exp-card {
                        border-radius: 16px;
                        padding: 20px 16px;
                        gap: 16px;
                    }

                    /* Stack period below content on very small screens */
                    .exp-card-top {
                        flex-direction: column-reverse;
                        gap: 8px;
                    }
                    .exp-meta {
                        align-items: flex-start;
                        flex-direction: row;
                        gap: 8px;
                        padding-left: 0;
                    }

                    .scroll-stack-card {
                        height: auto !important;
                        min-height: unset !important;
                        overflow: visible !important;
                    }
                }

                @media (min-width: 601px) and (max-width: 900px) {
                    .exp-card {
                        padding: clamp(20px, 3vw, 40px);
                    }
                }
            `}</style>

            <section style={{
                background: "#0a0a0a",
                borderTop: "0.5px solid rgba(255,255,255,0.05)",
                position: "relative",
            }}>
                {/* Particles background */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
                    <Particles
                        particleColors={["#ffffff"]}
                        particleCount={2500}
                        particleSpread={15}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />
                </div>

                {/* Sticky header */}
                <div
                    ref={headerRef}
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 10,
                        padding: "clamp(28px,5vw,72px) clamp(16px,5vw,80px) 24px",
                        borderBottom: "0.5px solid rgba(255,255,255,0.05)",
                        background: "#0a0a0a",
                    }}
                >
                    <div className="exp-sr exp-section-label" style={{ marginBottom: "20px" }} data-delay="0">
                        Experience
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}>
                        <h2
                            className="exp-sr"
                            data-delay="50"
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: "clamp(28px,5vw,60px)",
                                fontWeight: 400,
                                color: "#f5f5f0",
                                letterSpacing: "-0.02em",
                                lineHeight: 1,
                            }}
                        >
                            Work History
                        </h2>
                        <span style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            color: "#888",
                        }}>
                            {experience.length} Roles
                        </span>
                    </div>
                </div>

                {/* ScrollStack */}
                <ScrollStack itemStackDistance={14} baseScale={0.04} topOffset={110}>
                    {experience.map(({ index, company, role, period, duration, desc, current, award, images, bullets, logo }, i) => (
                        <ScrollStackItem key={role + i} itemClassName="av-exp-item">
                            {/* Outer wrapper — NO minHeight, just padding for spacing */}
                            <div style={{
                                padding: "0 clamp(8px, 2vw, 40px)",
                                paddingBottom: "clamp(16px, 3vw, 32px)",
                                boxSizing: "border-box",
                                width: "100%",
                            }}>
                                <div
                                    className="exp-card"
                                    style={{
                                        "--exp-card-bg": i % 2 === 0 ? "#242424" : "#2e2e2e",
                                        position: "sticky",
                                        top: `${110 + 14 * i}px`,
                                        zIndex: i + 1,
                                    }}
                                >
                                    {/* ── Top: index + content + meta ── */}
                                    <div className="exp-card-top">
                                        {/* Left: all content */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            {/* Index */}
                                            <div style={{
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "11px",
                                                color: "#888",
                                                marginBottom: "16px",
                                            }}>
                                                {index}
                                            </div>

                                            {/* Role + badges */}
                                            <div className="exp-role-row">
                                                <span style={{
                                                    fontFamily: "'DM Serif Display', serif",
                                                    fontSize: "clamp(20px, 3.5vw, 40px)",
                                                    color: "#f5f5f0",
                                                    fontWeight: 400,
                                                    lineHeight: 1.1,
                                                }}>
                                                    {role}
                                                </span>
                                                {current && (
                                                    <span
                                                        className="exp-live-tag"
                                                        style={{
                                                            fontFamily: "'DM Mono', monospace",
                                                            fontSize: "9px",
                                                            color: "#f5f5f0",
                                                            letterSpacing: "0.1em",
                                                            border: "0.5px solid rgba(255,255,255,0.3)",
                                                            padding: "2px 8px",
                                                            textTransform: "uppercase",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        Live
                                                    </span>
                                                )}
                                                {award && (
                                                    <span style={{
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: "9px",
                                                        color: "#888",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "5px",
                                                        flexShrink: 0,
                                                    }}>
                                                        <Icons.Cert /> {award}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Company row */}
                                            <div className="exp-company-row">
                                                {logo && (
                                                    <img
                                                        src={logo}
                                                        alt={company}
                                                        style={{
                                                            width: "26px",
                                                            height: "26px",
                                                            objectFit: "contain",
                                                            borderRadius: "6px",
                                                            background: "rgba(255,255,255,0.06)",
                                                            padding: "3px",
                                                            border: "0.5px solid rgba(255,255,255,0.1)",
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                )}
                                                <span style={{
                                                    fontFamily: "'DM Mono', monospace",
                                                    fontSize: "10px",
                                                    color: "#888",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.06em",
                                                }}>
                                                    {company}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="exp-desc">{desc}</p>

                                            {/* Bullets */}
                                            {bullets?.length > 0 && (
                                                <ul className="exp-bullets">
                                                    {bullets.map((b, j) => (
                                                        <li key={j} className="exp-bullet">
                                                            <span className="exp-bullet-dot" />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        {/* Right: period + duration */}
                                        <div className="exp-meta">
                                            <span style={{
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "11px",
                                                color: "#888",
                                                whiteSpace: "nowrap",
                                            }}>
                                                {period}
                                            </span>
                                            <span style={{
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                color: "rgba(255,255,255,0.2)",
                                                whiteSpace: "nowrap",
                                            }}>
                                                {duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ── Gallery ── */}
                                    {images?.length > 0 && (
                                        <div>
                                            <div className="exp-gallery-label">
                                                Gallery · {images.length} photo{images.length > 1 ? "s" : ""}
                                            </div>
                                            <div
                                                className="exp-gallery-grid"
                                                style={{
                                                    gridTemplateColumns:
                                                        images.length === 1
                                                            ? "1fr"
                                                            : images.length === 2
                                                                ? "1fr 1fr"
                                                                : "repeat(3, 1fr)",
                                                }}
                                            >
                                                {images.map((src, j) => (
                                                    <div
                                                        key={j}
                                                        className="exp-gallery-img-wrap"
                                                        style={{
                                                            height: images.length === 1
                                                                ? "clamp(140px, 28vw, 260px)"
                                                                : "clamp(100px, 18vw, 180px)",
                                                        }}
                                                    >
                                                        <img src={src} alt={`${company}`} />
                                                        <div className="exp-gallery-num">
                                                            {String(j + 1).padStart(2, "0")}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </section>
        </>
    );
}