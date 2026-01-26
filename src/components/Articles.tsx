import React from "react";
import { articles } from "../data/articles";
import "../styles/app.css";

export const Articles: React.FC = () => {
  return (
    <section id="articles" className="container">
      <h3 className="section-title">Статьи</h3>
      <div className="articles-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <article
              key={`article-${index}`}
              className="card glass article-card"
            >
              {article.image && (
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
              )}

              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>

                <h4 className="article-title">{article.title}</h4>
                <p className="article-excerpt">{article.excerpt}</p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Читать дальше →
                </a>
              </div>
            </article>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1" }}>Статьи скоро появятся...</p>
        )}
      </div>
    </section>
  );
};
