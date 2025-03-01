import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { Links } from "./pages/Links";
import { About } from "./pages/About";
import "./styles/global.css";


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">CodeGrive</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/links">Links</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/links" element={<Links />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="footer">&copy; 2025 CodeGrive. All rights reserved.</footer>
      </div>
    </Router>
  );
};

export default App;