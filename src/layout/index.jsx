// src/layout/index.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";


export default function Layout() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'

        }}>
            <Navbar />
            <main className="main-content" style={{ flex: 1 }}>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
}