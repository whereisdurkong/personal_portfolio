import { useEffect, useRef, useState } from 'react';
import {
    Search,
    MoreHorizontal,

} from 'lucide-react';

export default function MessengerIcon() {
    const [open, setOpen] = useState(false);

    // reference for outside click
    const wrapperRef = useRef(null);

    // close when clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside
            );
        };
    }, []);

    const chats = [
        {
            name: 'Employer',
            message: 'The client will hire you for sure',
            time: '55m',
            avatar: 'https://i.pravatar.cc/100?img=32',
            unread: true,
        },

    ];

    return (
        <div
            ref={wrapperRef}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Messenger Icon */}
            <img
                src="/messengericon.png"
                alt="Messenger"
                width={20}
                height={20}
                style={{ cursor: 'pointer' }}
                onClick={() => setOpen((prev) => !prev)}
            />

            {/* Messenger Card */}
            {open && (
                <div
                    style={{
                        position: 'absolute',
                        top: '35px',
                        right: '-110px',
                        width: '360px',
                        height: '280px',
                        background: '#1f1f1f',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        color: '#fff',
                        fontFamily: 'Arial, sans-serif',
                        zIndex: 9999,
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '16px',
                            borderBottom: '1px solid #333',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: '30px',
                                    fontWeight: '700',
                                }}
                            >
                                Chats
                            </h2>

                            <div
                                style={{
                                    display: 'flex',
                                    gap: '10px',
                                }}
                            >
                                <MoreHorizontal size={20} />

                            </div>
                        </div>

                        {/* Search */}
                        <div
                            style={{
                                marginTop: '14px',
                                background: '#3a3b3c',
                                borderRadius: '999px',
                                padding: '10px 14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: '#b0b3b8',
                                fontSize: '14px',
                            }}
                        >
                            <Search size={16} />
                            Search Messenger
                        </div>

                        {/* Tabs */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '18px',
                                marginTop: '16px',
                                fontSize: '15px',
                                fontWeight: '600',
                                alignItems: 'center'
                            }}
                        >
                            <div
                                style={{
                                    background: '#2374e1',
                                    padding: '8px 14px',
                                    borderRadius: '999px',
                                }}
                            >
                                All
                            </div>

                            <div style={{ color: '#d0d0d0' }}>
                                Unread
                            </div>

                            <div style={{ color: '#d0d0d0' }}>
                                Groups
                            </div>

                            <div style={{ color: '#d0d0d0' }}>
                                Communities
                            </div>
                        </div>
                    </div>

                    {/* Chat List */}
                    <div
                        style={{
                            overflowY: 'auto',
                            height: '520px',
                        }}
                    >
                        {chats.map((chat, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    cursor: 'pointer',
                                }}
                            >
                                <img
                                    src={chat.avatar}
                                    alt={chat.name}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        {chat.name}
                                    </div>

                                    <div
                                        style={{
                                            color: '#b0b3b8',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {chat.message} · {chat.time}
                                    </div>
                                </div>

                                {chat.unread && (
                                    <div
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            background: '#2d88ff',
                                            borderRadius: '50%',
                                        }}
                                    />
                                )}

                                {chat.muted && <div>🔕</div>}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            textAlign: 'center',
                            padding: '16px',
                            borderTop: '1px solid #333',
                            color: '#2d88ff',
                            fontWeight: '600',
                            fontSize: '15px',
                            cursor: 'pointer',
                        }}
                    >
                        See all in Messenger
                    </div>
                </div>
            )}
        </div>
    );
}