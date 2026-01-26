import React from "react";
import "../styles/app.css";

export const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <h3 className="section-title">О GameLab</h3>
      <div className="card glass">
        <p className="about-text">
          GameLab — это лаборатория идей, экспериментов и игр. Мы объединяем 
          людей, которым интересны технологии, творчество и разработка игр в Кыргызстане.
        </p>
      </div>
    </section>
  );
};
