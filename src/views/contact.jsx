import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
    { Icon: Mail, label: "Email", value: "adrian@email.com" },
    { Icon: Phone, label: "Phone", value: "+63 912 345 6789" },
    { Icon: MapPin, label: "Location", value: "Baguio City, Philippines" },
];

export default function Contact() {
    return (
        <section id="contact" style={{
            background: "#0a0a0a",
            padding: "clamp(40px, 8vw, 100px) clamp(16px, 5vw, 60px)",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        }}>

            {/* Grid texture */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px"
            }} />

            {/* Layout wrapper — default: single column; 900px+: two columns */}
            <div className="contact-layout" style={{
                position: "relative",
                maxWidth: "1100px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr)",       /* ← mobile-first default */
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "end"
            }}>

                {/* ── Left: content ── */}
                {/* ── Left: content ── */}
                <div style={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                        <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                        <span style={{
                            fontFamily: "sans-serif", fontSize: "11px", fontWeight: 600,
                            letterSpacing: "0.15em", textTransform: "uppercase",
                            color: "rgba(255,255,255,0.35)"
                        }}>Get In Touch</span>
                    </div>

                    <h2 style={{
                        margin: "0 0 16px", fontFamily: "sans-serif",
                        fontSize: "clamp(36px, 8vw, 72px)", fontWeight: 800,
                        color: "#fff", letterSpacing: "-0.03em", lineHeight: 1
                    }}>Let's work<br />together.</h2>

                    <p style={{
                        margin: "0 0 40px", fontFamily: "sans-serif",
                        fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 300,
                        color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
                        maxWidth: "420px"
                    }}>
                        Have a project in mind? Reach out — I'm always open to new opportunities and collaborations.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {contacts.map(({ Icon, label, value }) => (
                            <div key={label}
                                className="contact-card"
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                    e.currentTarget.style.transform = "translateX(4px)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                    e.currentTarget.style.transform = "translateX(0)";
                                }}
                                style={{
                                    display: "flex", alignItems: "center", gap: "16px",
                                    padding: "18px 22px",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "16px",
                                    background: "rgba(255,255,255,0.02)",
                                    transition: "border-color 0.25s, background 0.25s, transform 0.25s",
                                    cursor: "default",
                                    minWidth: 0,
                                    overflow: "hidden"
                                }}
                            >
                                <div style={{
                                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)"
                                }}>
                                    <Icon size={18} color="rgba(255,255,255,0.7)" strokeWidth={1.6} />
                                </div>

                                <div style={{ minWidth: 0, flex: 1 }}>
                                    <div style={{
                                        fontFamily: "sans-serif", fontSize: "10px", fontWeight: 600,
                                        letterSpacing: "0.12em", textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.3)", marginBottom: "3px"
                                    }}>{label}</div>
                                    <div style={{
                                        fontFamily: "sans-serif",
                                        fontSize: "clamp(13px, 2vw, 15px)",
                                        color: "rgba(255,255,255,0.85)",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    }}>{value}</div>
                                </div>

                                <ArrowUpRight size={15} color="white" style={{ opacity: 0.2, flexShrink: 0 }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: portrait — hidden on mobile via CSS class only ── */}
                <div className="contact-image-col" style={{
                    position: "relative",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}>
                    <div style={{
                        position: "absolute", bottom: "-20px", right: "-40px",
                        width: "500px", height: "500px", borderRadius: "50%",
                        background: "radial-gradient(ellipse at 40% 60%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                        border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none"
                    }} />
                    <div style={{
                        position: "absolute", bottom: "20px", right: 0,
                        width: "380px", height: "380px", borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.04)", pointerEvents: "none"
                    }} />

                    <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "520px" }}>
                        <div style={{
                            position: "absolute", top: "20px", left: 0, zIndex: 3,
                            display: "flex", alignItems: "center", gap: "8px",
                            padding: "10px 18px", borderRadius: "100px",
                            background: "rgba(0,0,0,0.6)", border: "1px solid rgba(74,222,128,0.3)",
                            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                            fontFamily: "sans-serif", fontSize: "12px", fontWeight: 500,
                            color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap"
                        }}>
                            <span style={{
                                width: "7px", height: "7px", borderRadius: "50%",
                                background: "#4ade80", flexShrink: 0,
                                animation: "contactPulse 2s ease infinite"
                            }} />
                            Available for hire
                        </div>
                        <img src="/1.png" alt="Adrian" style={{
                            width: "100%", height: "auto", display: "block",
                            objectFit: "contain",
                            filter: "drop-shadow(0 32px 80px rgba(0,0,0,0.8))"
                        }} />
                    </div>
                </div>
            </div>

            <style>{`
    @keyframes contactPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0.5; transform: scale(1.4); }
    }

    .contact-image-col {
        display: none;
    }

    @media (min-width: 900px) {
        .contact-layout {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
        }
        .contact-image-col {
            display: flex !important;
            min-height: 520px;
        }
    }

    @media (max-width: 480px) {
        .contact-card {
            gap: 10px !important;
            padding: 12px 14px !important;
        }
    }
`}</style><style>{`
    @keyframes contactPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0.5; transform: scale(1.4); }
    }

    .contact-image-col {
        display: none;
    }

    @media (min-width: 900px) {
        .contact-layout {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
        }
        .contact-image-col {
            display: flex !important;
            min-height: 520px;
        }
    }

    @media (max-width: 480px) {
        .contact-card {
            gap: 10px !important;
            padding: 12px 14px !important;
        }
    }
`}</style>
        </section>
    );
}