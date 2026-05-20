import { useState } from "react";
import LightRays from "../components/LightRays";

const filterCategories = ["All", "Web Development", "Video / Photo", "Mobile App Development"];

const projects = [
    {
        id: "01",
        title: "IT Help Desk System",
        category: "Web Development",
        tags: ["React", "Node.js", "SQL Server", "Supabase"],
        year: "2024",
        desc: "IT Helpdesk is an all-in-one internal platform designed to streamline IT support operations while also serving as a Property Management System (PMS) for the company.",
        featured: true,
        image: "/bg-back.png",
        color: { bg: "#FFF176", text: "#3D3000" },
        rot: -2,
        liveLink: "https://ithd-supabase.vercel.app/",
        githubLink: "https://github.com/whereisdurkong/LMD-HelpdeskSystem.git", // ← replace with actual
    },
    {
        id: "02",
        title: "Asset Reliability Monitoring System",
        category: "Web Development",
        tags: ["React", "Node.js", "SQL Server", "Supabase"],
        year: "2024",
        desc: "ARMS continuously monitors your critical assets, detects early warning signs, visualizes performance trends, and delivers actionable reliability insights — all from a beautiful, intuitive dashboard.",
        image: "/bg-back.png",
        color: { bg: "#B2DFDB", text: "#00352E" },
        rot: 1.5,

        githubLink: "https://github.com/whereisdurkong/assetReliabilityMonitoringSystem.git",
        liveLink: "https://assetreliabilitymonitoringsystem.vercel.app/",
    },
    {
        id: "03",
        title: "Community Relations Information System",
        category: "Web Development",
        tags: ["React", "Node.js", "SQL Server"],
        year: "2023",
        desc: "Multi-format brand film and social-cut series for product launch — 60s hero, 15s reels, thumbnail suite.",
        image: "/bg-back.png",
        color: { bg: "#F8BBD0", text: "#3D001A" },
        rot: -1,

        githubLink: "https://github.com/whereisdurkong/CommunityRelationsInformationSystem.git",
    },
    {
        id: "04",
        title: "Recyclearn",
        category: "Mobile App Development",
        tags: ["Java", "Firebase"],
        year: "2023",
        desc: "Recyclearn lets users return used plastics to local shops, earn points, and redeem rewards. Built with Java and Firebase.",
        image: "/bg-back.png",
        color: { bg: "#FFCC80", text: "#3D1C00" },
        rot: 2.2,
        liveLink: null,
        githubLink: "https://github.com/whereisdurkong/Recyclearn.git",
    },
];

// Icon components using inline SVG
function IconExternalLink({ size = 13, color }) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M3 13L13 3M13 3H5M13 3v8" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconGithub({ size = 13, color }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const handleFilter = (cat) => {
        setActiveFilter(cat);
    };

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <>
            {/* Injected styles */}
            <style>{`
                .filter-btn {
                    padding: 7px 16px;
                    border-radius: 100px;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: transparent;
                    color: rgba(255,255,255,0.45);
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    transition: all 0.18s ease;
                    font-family: sans-serif;
                }
                .filter-btn:hover {
                    border-color: rgba(255,255,255,0.28);
                    color: rgba(255,255,255,0.75);
                }
                .filter-btn.active {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.3);
                    color: #ffffff;
                }
                .note {
                    border-radius: 3px;
                    padding: clamp(14px, 1.8vw, 22px);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    position: relative;
                    box-shadow: 3px 5px 18px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.2);
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                    cursor: default;
                }
                .note:hover {
                    box-shadow: 6px 10px 30px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.25);
                    transform: translateY(-3px) rotate(0deg) !important;
                }
                .note-tape {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 44px;
                    height: 20px;
                    background: rgba(255,255,255,0.45);
                    border-radius: 2px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.15);
                }
                .note-img {
                    border-radius: 3px;
                    overflow: hidden;
                    width: 100%;
                    background: rgba(0,0,0,0.08);
                }
                .note-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .note-tag {
                    padding: 3px 9px;
                    border-radius: 100px;
                    background: rgba(0,0,0,0.1);
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    opacity: 0.7;
                }
                .proj-cta-link:hover {
                    color: rgba(255,255,255,0.75) !important;
                }
                /* Note link buttons */
                .note-link-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 11px;
                    border-radius: 100px;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    transition: opacity 0.15s ease, transform 0.15s ease;
                    font-family: sans-serif;
                    line-height: 1;
                }
                .note-link-btn:hover {
                    opacity: 0.8;
                    transform: translateY(-1px);
                }
                .note-link-btn:active {
                    transform: translateY(0);
                }
                .note-link-btn.live {
                    background: rgba(0,0,0,0.15);
                }
                .note-link-btn.github {
                    background: rgba(0,0,0,0.08);
                }
            `}</style>

            <section id="portfolio" style={{
                background: "#0a0a0a",
                padding: "clamp(48px, 7vw, 100px) clamp(24px, 5vw, 60px)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid rgba(255,255,255,0.05)"
            }}>

                {/* Light rays background */}
                <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "100%", height: "100%",
                    pointerEvents: "none", zIndex: 0,
                }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={0.5}
                        rayLength={5}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0}
                        distortion={0}
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>

                <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", zIndex: 1 }}>

                    {/* Section header */}
                    <div style={{
                        display: "flex", alignItems: "flex-end",
                        justifyContent: "space-between", flexWrap: "wrap",
                        gap: "16px", marginBottom: "clamp(28px, 4vw, 52px)"
                    }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                                <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                                <span style={{
                                    fontFamily: "sans-serif", fontSize: "11px", fontWeight: 600,
                                    letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)"
                                }}>Selected Work</span>
                            </div>
                            <h2 style={{
                                margin: 0, fontFamily: "sans-serif",
                                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800,
                                color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.05
                            }}>Projects</h2>
                        </div>

                        {/* Filter chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {filterCategories.map((c) => (
                                <button
                                    key={c}
                                    className={"filter-btn" + (activeFilter === c ? " active" : "")}
                                    onClick={() => handleFilter(c)}
                                >{c}</button>
                            ))}
                        </div>
                    </div>

                    {/* Sticky notes grid */}
                    <div className="notes-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "clamp(14px, 2vw, 24px)",
                        alignItems: "start",
                    }}>
                        {filteredProjects.map((p) => (
                            <div
                                key={p.id}
                                className={"note note-card" + (p.featured ? " note-featured" : "")}
                                data-category={p.category}
                                style={{
                                    background: p.color.bg,
                                    color: p.color.text,
                                    transform: `rotate(${p.rot}deg)`,
                                    gridColumn: p.featured ? "span 2" : undefined,
                                }}
                            >
                                {/* Tape */}
                                <div className="note-tape" />

                                {/* Top row */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span style={{ fontFamily: "sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", opacity: 0.4 }}>{p.id}</span>
                                    {p.featured && (
                                        <span style={{
                                            display: "inline-flex", alignItems: "center", gap: "4px",
                                            padding: "3px 10px", borderRadius: "100px",
                                            background: "rgba(0,0,0,0.1)",
                                            fontFamily: "sans-serif", fontSize: "10px", fontWeight: 600,
                                            letterSpacing: "0.06em", color: p.color.text, opacity: 0.75
                                        }}>★ Featured</span>
                                    )}
                                </div>

                                {/* Project image */}
                                {p.image && (
                                    <div className="note-img" style={{ height: p.featured ? "160px" : "110px" }}>
                                        <img src={p.image} alt={p.title} />
                                    </div>
                                )}

                                {/* Title */}
                                <div style={{
                                    fontFamily: "sans-serif",
                                    fontSize: p.featured ? "clamp(18px, 2.2vw, 26px)" : "clamp(14px, 1.5vw, 17px)",
                                    fontWeight: 700, lineHeight: 1.25,
                                    letterSpacing: "-0.015em", flex: 1
                                }}>{p.title}</div>

                                {/* Description */}
                                <div style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "12px", lineHeight: 1.65,
                                    opacity: 0.65, fontWeight: 400
                                }}>{p.desc}</div>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "4px" }}>
                                    {p.tags.map(t => (
                                        <span key={t} className="note-tag" style={{ color: p.color.text, fontFamily: "sans-serif" }}>{t}</span>
                                    ))}
                                </div>

                                {/* Footer — link buttons + year */}
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    flexWrap: "wrap", gap: "8px",
                                    marginTop: "auto", paddingTop: "12px",
                                    borderTop: `1px solid rgba(0,0,0,0.1)`
                                }}>
                                    {/* Left: link buttons */}
                                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                        {p.liveLink && (
                                            <a
                                                href={p.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="note-link-btn live"
                                                style={{ color: p.color.text }}
                                            >
                                                <IconExternalLink color={p.color.text} />
                                                Live
                                            </a>
                                        )}
                                        {p.githubLink && (
                                            <a
                                                href={p.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="note-link-btn github"
                                                style={{ color: p.color.text }}
                                            >
                                                <IconGithub color={p.color.text} />
                                                GitHub
                                            </a>
                                        )}
                                    </div>

                                    {/* Right: year */}
                                    <span style={{
                                        fontFamily: "sans-serif", fontSize: "10px",
                                        fontWeight: 600, letterSpacing: "0.06em", opacity: 0.4
                                    }}>{p.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer row */}
                    <div style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
                        marginTop: "clamp(24px, 3vw, 40px)",
                        paddingTop: "clamp(16px, 2vw, 24px)",
                        borderTop: "1px solid rgba(255,255,255,0.07)"
                    }}>
                        <p style={{
                            margin: 0, fontFamily: "sans-serif",
                            fontSize: "clamp(11px, 1.1vw, 13px)",
                            color: "rgba(255,255,255,0.25)", fontWeight: 300, letterSpacing: "0.02em"
                        }}>
                            Showing {filteredProjects.length} of {projects.length} projects
                        </p>
                        <a href="#contact" className="proj-cta-link" style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            fontFamily: "sans-serif", fontSize: "clamp(12px, 1.2vw, 14px)",
                            fontWeight: 600, color: "rgba(255,255,255,0.45)",
                            textDecoration: "none", letterSpacing: "0.04em"
                        }}>
                            Got a project in mind?
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}