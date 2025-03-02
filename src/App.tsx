import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { Links } from "./pages/Links";
import { About } from "./pages/About";
import { ArticleDetails } from "./pages/ArticleDetails";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">CodeGrive</div>
          <ul>
            <li><Link to="/codegrive">Home</Link></li>
            <li><Link to="/codegrive/articles">Articles</Link></li>
            <li><Link to="/codegrive/links">Links</Link></li>
            <li><Link to="/codegrive/about">About</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/codegrive" element={<Home />} />
            <Route path="/codegrive/articles" element={<Articles />} />
            <Route path="/codegrive/articles/:id" element={<ArticleDetails />} />
            <Route path="/codegrive/links" element={<Links />} />
            <Route path="/codegrive/about" element={<About />} />
          </Routes>
        </div>
        <footer className="footer">&copy; 2025 CodeGrive. All rights reserved.</footer>
      </div>
    </Router>
  );
};

export default App;