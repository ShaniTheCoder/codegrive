import React from "react";
import { useParams } from "react-router-dom";

const articles: Record<string, { title: string; content: string }> = {
  "1": { title: "Difference between C and C++", content: "React Hooks allow you to use state and other React features without writing a class..." },
  "2": { title: "Setup WSL/WSL2", content: "TypeScript is a strongly typed programming language that builds on JavaScript..." },
  "3": { title: "Optimizing React Performance", content: "To improve performance in React apps, consider memoization, lazy loading..." },
};

export const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles[id || ""];

  if (!article) return <h2>Article not found!</h2>;

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};