import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: "1", title: "Understanding React Hooks", summary: "A beginner’s guide to using React Hooks effectively." },
  { id: "2", title: "Setup WSL/WSL2", summary: "Learn how TypeScript can improve your JavaScript development." },
  { id: "3", title: "Optimizing React Performance", summary: "Tips and tricks to make your React apps faster." },
];

export const Articles: React.FC = () => {
  return (
    <div className="articles">
      <h1>Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={`/codegrive/articles/${article.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};