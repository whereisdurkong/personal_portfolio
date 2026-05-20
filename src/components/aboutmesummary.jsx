export default function AboutSummary() {
    return (
        <>
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .summary-in { animation: fadeUp 0.7s ease 0.1s both; }
                .about-stat:hover {
                    border-color: rgba(255,255,255,0.2) !important;
                    background: rgba(255,255,255,0.07) !important;
                }
                .about-link:hover { color: #ffffff !important; }
                .about-link:hover svg { transform: translateX(3px); }
                .about-link svg { transition: transform 0.2s ease; }
            `}</style>

            <section style={{
                background: "#0a0a0a",
                padding: "clamp(32px, 5vw, 64px) clamp(24px, 6vw, 80px)",
                boxSizing: "border-box"
            }}>
                <div style={{
                    maxWidth: "960px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px"
                }}>

                    {/* Top row — label + link */}
                    <div className="summary-in" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "12px"
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                            <span style={{
                                fontFamily: "sans-serif",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)"
                            }}>About</span>
                        </div>

                        <a
                            href="#about"
                            className="about-link"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                fontFamily: "sans-serif",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.4)",
                                textDecoration: "none",
                                letterSpacing: "0.02em",
                                transition: "color 0.2s ease"
                            }}
                        >
                            Full profile
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Bio text */}
                    <div className="summary-in" style={{ animationDelay: "0.15s" }}>
                        <p style={{
                            margin: 0,
                            fontFamily: "sans-serif",
                            fontSize: "clamp(16px, 2.2vw, 22px)",
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.6)",
                            lineHeight: 1.65,
                            letterSpacing: "0.01em",
                            maxWidth: "720px"
                        }}>
                            I'm a{" "}
                            <span style={{ color: "#ffffff", fontWeight: 500 }}>developer & creative</span>
                            {" "}based in Baguio City. I build fast, polished websites, edit videos and photos
                            that tell real stories, and keep IT systems running smoothly —
                            all driven by one thing:{" "}
                            <span style={{ color: "#ffffff", fontWeight: 500 }}>making things work beautifully.</span>
                        </p>
                    </div>

                    {/* Stats + divider */}
                    <div
                        className="summary-in"
                        style={{
                            animationDelay: "0.25s",
                            display: "flex",
                            alignItems: "stretch",
                            gap: "0",
                            borderTop: "1px solid rgba(255,255,255,0.07)",
                            paddingTop: "28px",
                            flexWrap: "wrap"
                        }}
                    >
                        {[
                            { value: "3+", label: "Years Experience" },
                            { value: "20+", label: "Projects Delivered" },
                            { value: "10+", label: "Happy Clients" },
                            { value: "4", label: "Core Disciplines" },
                        ].map(({ value, label }, i, arr) => (
                            <div
                                key={label}
                                className="about-stat"
                                style={{
                                    flex: "1 1 120px",
                                    padding: "16px 24px",
                                    borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                                    transition: "background 0.2s, border-color 0.2s",
                                    borderRadius: "0",
                                    cursor: "default"
                                }}
                            >
                                <div style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "clamp(26px, 3.5vw, 38px)",
                                    fontWeight: 800,
                                    color: "#ffffff",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1
                                }}>
                                    {value}
                                </div>
                                <div style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "11px",
                                    fontWeight: 400,
                                    color: "rgba(255,255,255,0.4)",
                                    marginTop: "6px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase"
                                }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}