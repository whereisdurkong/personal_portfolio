import { useState, useEffect, useRef } from "react";

const recentItems = [
    { id: 0, type: "hash", label: "Adrian's Experience" },
    { id: 1, type: "clock", label: "Who is Adrian?" },
    { id: 2, type: "clock", label: "What are Adrian's Age?" },
    { id: 3, type: "clock", label: "Adrian Resume" },
    { id: 4, type: "clock", label: "How to contact Adrian" },
];


function HashIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#b0b3b8">
            <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" stroke="#b0b3b8" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18">
            <circle cx="12" cy="12" r="9" stroke="#b0b3b8" strokeWidth="2" fill="none" />
            <path d="M12 7v5l3 3" stroke="#b0b3b8" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M18 6L6 18M6 6l12 12" stroke="#b0b3b8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

export default function SearchBar() {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(recentItems);
    const wrapperRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const removeItem = (e, id) => {
        e.stopPropagation();
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div ref={wrapperRef} style={{ position: "relative", width: 260, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
            {/* Search Bar */}
            <div
                onClick={() => setOpen((o) => !o)}
                style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "#3a3b3c", borderRadius: 20,
                    height: 36, padding: "0 12px", cursor: "text",
                    width: "100%",
                }}
            >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#b0b3b8">
                    <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#b0b3b8" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 14, color: "#b0b3b8" }}>Search Adrian Ventura</span>
            </div>

            {/* Dropdown */}
            {open && (
                <div style={{
                    position: "absolute", top: "calc(100% + 6px)",
                    left: "50%", transform: "translateX(-50%)",
                    width: 340, background: "#242526",
                    borderRadius: 8,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                    padding: "8px 0 4px", zIndex: 100,
                }}>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 12px 8px" }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#e4e6eb" }}>Recent</span>
                        <span style={{ fontSize: 14, color: "#2d88ff", fontWeight: 500, cursor: "pointer" }}>Edit</span>
                    </div>

                    {/* Items */}
                    {items.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: "flex", alignItems: "center", gap: 12,
                                padding: "6px 12px", cursor: "pointer",
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = "#3a3b3c"}
                            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                            <div style={{
                                width: 36, height: 36, borderRadius: "50%",
                                background: "#3a3b3c",
                                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                            }}>
                                {item.type === "hash" ? <HashIcon /> : <ClockIcon />}
                            </div>
                            <span style={{ fontSize: 15, color: "#e4e6eb", flex: 1 }}>{item.label}</span>
                            <button
                                onClick={(e) => removeItem(e, item.id)}
                                style={{
                                    width: 28, height: 28, borderRadius: "50%",
                                    background: "transparent", border: "none",
                                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                }}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}