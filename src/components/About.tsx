import React from "react";
import "../styles/app.css";


export const About: React.FC = () => {
return (
<section id="about" className="container">
<h3 className="section-title">О нашем сообществе</h3>
<div className="card" style={{ background: "var(--blue)", color: "white" }}>
<p>
GameLab — место, где рождаются идеи, прототипы и полноценные игры.
</p>
</div>
</section>
);
};