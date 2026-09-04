import React from "react";
import "../styles/app.css";
import mascot from "../assets/Маскот.jpg";
import joinImage from "../assets/Вступить.png";

export const Community: React.FC = () => {
  const handleJoinClick = () => {
    window.open(
      "https://forms.gle/RPX9nJ5iyHW1Nhcs9",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="community" className="container">
      <h3 className="section-title">Присоединяйся</h3>

      <div className="community-grid">
        <div className="card glass community-card">
          <img
            src={joinImage}
            alt="Присоединиться к GameLab"
            className="join-card-image"
          />

          <button
            className="btn"
            onClick={handleJoinClick}
            aria-label="Открыть форму присоединения"
          >
            Вступить
          </button>
        </div>

        <div className="card glass mascot-card">
          <h4 className="article-title">Наш Маскот</h4>
          <img src={mascot} alt="Маскот GameLab" className="mascot-card-image" />
        </div>
      </div>
    </section>
  );
};
