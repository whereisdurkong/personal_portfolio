import LightRays from "../components/LightRays";
import PixelBlast from "../components/PixelBlast";
import ScrollReveal from "../components/ScrollStack";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {


    return (
        <>


            {/* ─── HERO ─── */}
            <section id='home' style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                padding: "clamp(6px, 1vw, 12px)",
                boxSizing: "border-box",
                background: "#000"
            }}>
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "clamp(10px, 1.2vw, 16px)",
                    background: "#111"
                }}>
                    {/* Pixel background */}
                    <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                        <PixelBlast
                            variant="square"
                            pixelSize={4}
                            color="#ffffff"
                            patternScale={2}
                            patternDensity={1}
                            pixelSizeJitter={0}
                            enableRipples
                            rippleSpeed={0.4}
                            rippleThickness={0.12}
                            rippleIntensityScale={1.5}
                            liquid={false}
                            liquidStrength={0.12}
                            liquidRadius={1.2}
                            liquidWobbleSpeed={5}
                            speed={0.5}
                            edgeFade={0.25}
                            transparent
                        />
                    </div>

                    {/* Overlays */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.62) 100%)", zIndex: 5 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)", zIndex: 3 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 55%)", zIndex: 3 }} />

                    {/* Portrait */}
                    <img
                        src="/bg-front.png"
                        alt="Adrian"
                        style={{
                            position: "absolute", inset: 0, width: "100%", height: "100%",
                            objectFit: "cover", zIndex: 4, pointerEvents: "none"
                        }}
                    />

                    {/* Hero content */}
                    <div style={{
                        position: "absolute", inset: 0, zIndex: 10,
                        display: "flex", flexDirection: "column",
                        justifyContent: "flex-end", alignItems: "flex-start",
                        padding: "clamp(24px, 4vw, 56px)",
                        pointerEvents: "none", marginBottom: "30px"
                    }}>
                        <div className="hero-label" style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "10px 18px", borderRadius: "100px",
                            background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.22)",
                            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                            fontFamily: "sans-serif", fontSize: "clamp(10px, 1.1vw, 12px)",
                            fontWeight: 500, color: "rgba(255,255,255,0.85)",
                            marginBottom: "clamp(16px, 2.5vw, 28px)"
                        }}>
                            <span className="badge-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                            Available for new projects
                        </div>

                        <h1 className="hero-name" style={{
                            margin: "0 0 clamp(4px, 0.8vw, 10px) 0",
                            fontSize: "clamp(44px, 8vw, 110px)", fontWeight: 800,
                            lineHeight: 1, color: "#ffffff", fontFamily: "sans-serif", letterSpacing: "-0.03em"
                        }}>
                            Hi, I'm Adrian
                        </h1>

                        <p className="hero-sub" style={{
                            margin: "0 0 clamp(20px, 3vw, 32px) 0",
                            fontSize: "clamp(14px, 1.8vw, 22px)", fontWeight: 300,
                            color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif", letterSpacing: "0.01em"
                        }}>
                            Turning ideas into powerful digital solutions through creative design and smart development,
                            helping businesses bring their vision into reality.
                        </p>

                        <div className="hero-badges" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "clamp(24px, 3vw, 36px)" }}>
                            {["Web Development", "Video/Photo Editor", "IT Help Desk", "IT Support"].map(s => (
                                <span key={s} style={{
                                    display: "inline-flex", alignItems: "center",
                                    padding: "6px 14px", borderRadius: "100px",
                                    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)",
                                    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                                    fontFamily: "sans-serif", fontSize: "clamp(10px, 1.1vw, 12px)",
                                    fontWeight: 500, color: "rgba(255,255,255,0.75)", letterSpacing: "0.03em"
                                }}>{s}</span>
                            ))}
                        </div>

                        <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: "12px", pointerEvents: "auto" }}>
                            <a href="#contact" className="cta-primary" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 28px", borderRadius: "100px",
                                fontFamily: "sans-serif", fontSize: "clamp(13px, 1.3vw, 15px)", fontWeight: 600,
                                cursor: "pointer", border: "none",
                                textDecoration: "none", background: "#ffffff", color: "#0a0a0a"
                            }}>
                                Work with me
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#portfolio" className="cta-ghost" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 28px", borderRadius: "100px",
                                fontFamily: "sans-serif", fontSize: "clamp(13px, 1.3vw, 15px)", fontWeight: 600,
                                cursor: "pointer",
                                textDecoration: "none",
                                background: "rgba(255,255,255,0.08)", color: "#ffffff",
                                border: "1px solid rgba(255,255,255,0.25)",
                                backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)"
                            }}>
                                View my projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ABOUT ─── */}
            <section id="about" style={{ scrollMarginTop: "64px" }}>
                <About />
            </section>

            {/* ─── PROJECTS ─── */}
            <section id="projects" style={{ scrollMarginTop: "64px" }}>
                <Projects />
            </section>

            {/* ─── CONTACT ─── */}
            <section id="contact" style={{ scrollMarginTop: "64px" }}>
                <Contact />
            </section>
        </>
    );
}