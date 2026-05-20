// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/index";
import Home from "./views/home";
import Projects from "./views/projects";
import Contact from "./views/contact";
import About from "./views/about";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}