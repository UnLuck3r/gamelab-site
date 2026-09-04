import React from "react";
import { games } from "../data/games";
import "../styles/app.css";

export const Games: React.FC = () => {
  return (
    <section id="games" className="container">
      <h3 className="section-title">Во что мы играем</h3>
      <div className="grid-games">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div key={`game-${index}`} className="card glass game-card">
              {game.itchEmbedId ? (
                <div className="game-embed">
                  <iframe
                    frameBorder="0"
                    src={`https://itch.io/embed/${game.itchEmbedId}?dark=true`}
                    width="100%"
                    height="167"
                    allowFullScreen
                  >
                    <a href={game.url}>{game.title}</a>
                  </iframe>
                </div>
              ) : game.image ? (
                <div className="game-image">
                  <img src={game.image} alt={game.title} />
                </div>
              ) : null}
              <div className="game-content">
                <h4 className="game-title">{game.title}</h4>
                <p className="game-description">{game.description}</p>
              </div>
              {!game.itchEmbedId && (
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-small"
                  style={{ marginTop: "auto" }}
                >
                  Перейти
                </a>
              )}
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1" }}>Игры скоро появятся...</p>
        )}
      </div>
    </section>
  );
};
