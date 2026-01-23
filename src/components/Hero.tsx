import React from "react";
import "../styles/app.css";


export const Hero: React.FC = () => {
return (
<section className="container">
<h2 className="hero-title">
Создаём <span className="hero-gradient">игры</span> и идеи
</h2>
<p style={{ fontSize: 20, maxWidth: 720, marginTop: 20, opacity: 0.8 }}>
GameLab — современное сообщество разработчиков, дизайнеров и гейм-дев энтузиастов.
</p>
<div style={{ marginTop: 32 }}>
</div>
</section>
);
};