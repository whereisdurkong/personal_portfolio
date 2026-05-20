import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap');`;

const NAV_TABS = [
    { label: "Home", anchor: "home" },
    { label: "About", anchor: "about" },
    { label: "Projects", anchor: "projects" },
    { label: "Contact", anchor: "contact" },
];

function Logo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
                src="/av.png"
                alt="Logo"
                style={{ height: "36px", width: "auto", objectFit: "contain", cursor: "pointer" }}
            />
            <div>
                <span style={{
                    fontSize: "30px", fontWeight: 500,
                    fontFamily: "Sansita, sans-serif", color: "#494949", letterSpacing: "1px",
                }}>Adrian</span>
                <span style={{
                    fontSize: "30px", fontWeight: 100,
                    fontFamily: "Sansita, sans-serif", color: "#808080", letterSpacing: "1px",
                }}>Ventura</span>
            </div>
        </div>
    );
}

function HamburgerIcon({ open }) {
    return (
        <div style={{
            width: "24px", height: "18px", position: "relative",
            cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
            {[0, 1, 2].map((i) => (
                <span key={i} style={{
                    display: "block", height: "2px",
                    width: i === 1 ? (open ? "100%" : "75%") : "100%",
                    backgroundColor: "#494949", borderRadius: "2px",
                    transition: "all 0.25s ease", transformOrigin: "center",
                    transform: open
                        ? i === 0 ? "translateY(8px) rotate(45deg)"
                            : i === 2 ? "translateY(-8px) rotate(-45deg)"
                                : "scaleX(0)"
                        : "none",
                    opacity: open && i === 1 ? 0 : 1,
                }} />
            ))}
        </div>
    );
}

export default function Navbar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeAnchor, setActiveAnchor] = useState("home");

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Highlight active nav item based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const offsets = NAV_TABS.map(({ anchor }) => {
                const el = document.getElementById(anchor);
                if (!el) return { anchor, top: Infinity };
                return { anchor, top: Math.abs(el.getBoundingClientRect().top - 80) };
            });
            const closest = offsets.reduce((a, b) => a.top < b.top ? a : b);
            setActiveAnchor(closest.anchor);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (anchor) => {
        setMenuOpen(false);

        // If not on home page, navigate there first then scroll
        if (pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(anchor);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
            return;
        }

        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <style>{FONT_IMPORT}</style>

            <nav style={{
                background: "#ffffff",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                width: "100%",
                boxSizing: "border-box",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
            }}>
                <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                    <Logo />
                </button>

                {/* Desktop links */}
                {!isMobile && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {NAV_TABS.map(({ anchor, label }) => (
                            <NavLink
                                key={anchor}
                                label={label}
                                isActive={activeAnchor === anchor}
                                onClick={() => scrollTo(anchor)}
                            />
                        ))}
                    </div>
                )}

                {/* Hamburger */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        style={{
                            background: "none", border: "none", padding: "8px",
                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                    >
                        <HamburgerIcon open={menuOpen} />
                    </button>
                )}
            </nav>

            {/* Spacer */}
            <div style={{ height: "64px" }} />

            {/* Mobile drawer */}
            {isMobile && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        style={{
                            position: "fixed", inset: 0, top: "64px",
                            background: "rgba(0,0,0,0.18)", zIndex: 998,
                            opacity: menuOpen ? 1 : 0,
                            pointerEvents: menuOpen ? "auto" : "none",
                            transition: "opacity 0.25s ease",
                        }}
                    />
                    <div style={{
                        position: "fixed", top: "64px", left: 0, right: 0,
                        background: "#ffffff", zIndex: 999,
                        transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                        opacity: menuOpen ? 1 : 0,
                        pointerEvents: menuOpen ? "auto" : "none",
                        transition: "transform 0.25s ease, opacity 0.25s ease",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        padding: "12px 0 20px",
                    }}>
                        {NAV_TABS.map(({ anchor, label }) => (
                            <button
                                key={anchor}
                                onClick={() => scrollTo(anchor)}
                                style={{
                                    display: "block", width: "100%", textAlign: "left",
                                    padding: "14px 32px",
                                    color: activeAnchor === anchor ? "#222222" : "#4a5568",
                                    background: "none", border: "none",
                                    borderLeft: activeAnchor === anchor ? "3px solid #494949" : "3px solid transparent",
                                    fontSize: "17px", fontFamily: "Sansita, sans-serif",
                                    fontWeight: activeAnchor === anchor ? 500 : 300,
                                    letterSpacing: "1px", cursor: "pointer",
                                    transition: "all 0.15s ease",
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

function NavLink({ label, isActive, onClick }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            onClick={onClick}
            style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "8px 20px", borderRadius: "12px",
                color: isActive ? "#222222" : hovered ? "#2d3748" : "#4a5568",
                backgroundColor: "transparent", border: "none",
                fontSize: "15px", fontFamily: "Sansita, sans-serif",
                fontWeight: isActive ? 500 : 200,
                textDecoration: isActive ? "underline" : "none",
                cursor: "pointer", transition: "all 0.2s ease",
                whiteSpace: "nowrap", letterSpacing: "1px",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
        </button>
    );
}