import { useState, useRef, useEffect } from "react";

const NOTIFICATIONS = [
    {
        id: 1,
        avatar: "AJ",
        color: "#1877F2",
        text: "Alex Johnson invited you to join the team.",
        time: "2m ago",
        unread: true,
        type: "invite",
    },
    {
        id: 2,
        avatar: "SR",
        color: "#e41e3f",
        text: "Sara replied to your comment on the project.",
        time: "15m ago",
        unread: true,
        type: "reply",
    },
    {
        id: 3,
        avatar: "KM",
        color: "#f5a623",
        text: "Kevin mentioned you in a post.",
        time: "1h ago",
        unread: true,
        type: "mention",
    },
    {
        id: 4,
        avatar: "TL",
        color: "#7ed321",
        text: "Team Lead approved your request.",
        time: "3h ago",
        unread: false,
        type: "approval",
    },
    {
        id: 5,
        avatar: "MN",
        color: "#9b59b6",
        text: "Maria liked your project update.",
        time: "5h ago",
        unread: false,
        type: "like",
    },
];

export default function BellIcon() {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("all");
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const containerRef = useRef(null);

    const unreadCount = notifications.filter((n) => n.unread).length;
    const filtered =
        tab === "all" ? notifications : notifications.filter((n) => n.unread);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const markAllRead = () =>
        setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));

    return (
        <div
            ref={containerRef}
            style={{ position: "relative", flexShrink: 0 }}
        >
            {/* Bell Button */}
            <div
                onClick={() => setOpen((v) => !v)}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: open ? "#3a3b3c" : "#3a3b3c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#e4e6eb",
                    position: "relative",
                    outline: open ? "2px solid #1877F2" : "none",
                    transition: "outline 0.15s",
                }}
            >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>

                {unreadCount > 0 && (
                    <span
                        style={{
                            position: "absolute",
                            top: -2,
                            right: -2,
                            background: "#e41e3f",
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 700,
                            borderRadius: 10,
                            minWidth: 16,
                            height: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 4px",
                            border: "2px solid #242526",
                            zIndex: 1,
                        }}
                    >
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                )}
            </div>

            {/* Dropdown Card */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        right: 0,
                        width: 360,
                        background: "#242526",
                        borderRadius: 12,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",
                        border: "1px solid #3a3b3c",
                        zIndex: 9999,
                        overflow: "hidden",
                        animation: "dropIn 0.18s ease",
                    }}
                >
                    <style>{`
            @keyframes dropIn {
              from { opacity: 0; transform: scale(0.95) translateY(-6px); }
              to   { opacity: 1; transform: scale(1)    translateY(0);    }
            }
            .notif-item:hover { background: #3a3b3c !important; }
            .mark-read-btn:hover { background: #3a3b3c !important; }
            .tab-btn:hover { background: #3a3b3c !important; }
          `}</style>

                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "14px 16px 10px",
                        }}
                    >
                        <span
                            style={{
                                color: "#e4e6eb",
                                fontWeight: 700,
                                fontSize: 20,
                                fontFamily: "system-ui, sans-serif",
                            }}
                        >
                            Notifications
                        </span>
                        <button
                            onClick={markAllRead}
                            className="mark-read-btn"
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "#1877F2",
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: "pointer",
                                padding: "4px 8px",
                                borderRadius: 6,
                                transition: "background 0.15s",
                            }}
                        >
                            Mark all as read
                        </button>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: "flex", gap: 4, padding: "0 16px 8px" }}>
                        {["all", "unread"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className="tab-btn"
                                style={{
                                    background: tab === t ? "#1877F2" : "#3a3b3c",
                                    color: tab === t ? "#fff" : "#b0b3b8",
                                    border: "none",
                                    borderRadius: 20,
                                    padding: "5px 14px",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "background 0.15s, color 0.15s",
                                    textTransform: "capitalize",
                                }}
                            >
                                {t === "all" ? "All" : "Unread"}
                            </button>
                        ))}
                    </div>

                    {/* Notification List */}
                    <div style={{ maxHeight: 360, overflowY: "auto" }}>
                        {filtered.length === 0 ? (
                            <div
                                style={{
                                    padding: "32px 16px",
                                    textAlign: "center",
                                    color: "#b0b3b8",
                                    fontSize: 14,
                                }}
                            >
                                No notifications
                            </div>
                        ) : (
                            filtered.map((n) => (
                                <div
                                    key={n.id}
                                    className="notif-item"
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 12,
                                        padding: "10px 16px",
                                        cursor: "pointer",
                                        background: n.unread ? "rgba(24,119,242,0.07)" : "transparent",
                                        transition: "background 0.15s",
                                        borderLeft: n.unread ? "3px solid #1877F2" : "3px solid transparent",
                                    }}
                                >
                                    {/* Avatar */}
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "50%",
                                            background: n.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            color: "#fff",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            fontFamily: "system-ui, sans-serif",
                                        }}
                                    >
                                        {n.avatar}
                                    </div>

                                    {/* Text */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <p
                                            style={{
                                                margin: 0,
                                                color: "#e4e6eb",
                                                fontSize: 13.5,
                                                lineHeight: 1.45,
                                                fontFamily: "system-ui, sans-serif",
                                            }}
                                        >
                                            {n.text}
                                        </p>
                                        <span
                                            style={{
                                                color: n.unread ? "#1877F2" : "#8a8d91",
                                                fontSize: 12,
                                                fontWeight: n.unread ? 600 : 400,
                                                fontFamily: "system-ui, sans-serif",
                                            }}
                                        >
                                            {n.time}
                                        </span>

                                        {/* Invite action buttons */}
                                        {n.type === "invite" && (
                                            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                                                <button
                                                    style={{
                                                        background: "#1877F2",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: 6,
                                                        padding: "5px 14px",
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Join
                                                </button>
                                                <button
                                                    style={{
                                                        background: "#3a3b3c",
                                                        color: "#e4e6eb",
                                                        border: "none",
                                                        borderRadius: 6,
                                                        padding: "5px 14px",
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Unread dot */}
                                    {n.unread && (
                                        <div
                                            style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: "50%",
                                                background: "#1877F2",
                                                flexShrink: 0,
                                                marginTop: 6,
                                            }}
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            borderTop: "1px solid #3a3b3c",
                            padding: "10px 16px",
                            textAlign: "center",
                        }}
                    >
                        <span
                            style={{
                                color: "#1877F2",
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "system-ui, sans-serif",
                            }}
                        >
                            See all notifications
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}