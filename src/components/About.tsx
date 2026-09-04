import React from "react";
import "../styles/app.css";

export const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <h3 className="section-title">О GameLab</h3>
      <div className="card glass">
        <p className="about-text">
          Играем во всё подряд: от компьютерных игр до настолок. Иногда спорим о
          любимых играх, иногда пробуем сделать свою. Здесь можно просто
          пообщаться, найти компанию и хорошо провести время в Международном
          Университете Ала-Тоо.
        </p>
      </div>
    </section>
  );
};
