import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to CodeGrive</h1>
      <p>Your go-to platform for insightful coding articles and tutorials.</p>
      <div className="home-sections">
        <div className="home-card">
          <h2>Latest Articles</h2>
          <p>Explore the newest articles on software development and best practices.</p>
        </div>
        <div className="home-card">
          <h2>Watch on YouTube</h2>
          <p>Check out our latest tutorials and coding discussions.</p>
        </div>
      </div>
    </div>
  );
};