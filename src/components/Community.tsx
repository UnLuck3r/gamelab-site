import React from "react";
import "../styles/app.css";

export const Community: React.FC = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/RPX9nJ5iyHW1Nhcs9", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="community" className="container">
      <h3 className="section-title">Присоединяйся</h3>

      <div className="card glass community-card">
        <p>
          Хочешь создавать игры вместе с нами? Стань частью GameLab.
        </p>

        <button className="btn" onClick={handleJoinClick}>
          Вступить
        </button>
      </div>
    </section>
  );
};

