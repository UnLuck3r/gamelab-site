import React from "react";
import "../styles/app.css";

export const Hero: React.FC = () => {
  return (
    <section className="container">
      <h2 className="hero-title">
        Создаём <span className="hero-gradient">игры</span> и идеи
      </h2>
      <p className="hero-subtitle">
        GameLab — современное сообщество разработчиков, дизайнеров 
        и гейм-дев энтузиастов в Кыргызстане.
      </p>
    </section>
  );
};
