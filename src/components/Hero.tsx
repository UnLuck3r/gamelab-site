import React from "react";
import "../styles/app.css";

export const Hero: React.FC = () => {
  return (
    <section className="container">
      <h2 className="hero-title">
        Играем, веселимся и иногда делаем <span className="hero-gradient">игры</span>
      </h2>
      <p className="hero-subtitle">
        GameLab — это место, где можно поиграть во что угодно, найти своих людей
        и вместе придумать что-нибудь интересное.
      </p>
    </section>
  );
};
