import React from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/shanithecoder", icon: "🔗" },
  { name: "Twitter", url: "https://twitter.com/codegrive", icon: "🐦" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shani-mishra-553680278", icon: "💼" },
  { name: "YouTube", url: "https://www.youtube.com/@codegrive", icon: "🎥" },
];

export const Links: React.FC = () => {
  return (
    <div className="links glassmorphism">
      <h1>Follow Me</h1>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
            {link.icon} {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};