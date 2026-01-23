import React from "react";
import "../styles/app.css";


export const Hero: React.FC = () => {
return (
<section style={{ background: "var(--sand)", textAlign: "center" }} className="container">
<h2 style={{ fontSize: 42, marginBottom: 16 }}>Мы создаём игры 🚀</h2>
<p style={{ fontSize: 18, maxWidth: 700, margin: "0 auto" }}>
GameLab — сообщество разработчиков игр, дизайнеров и энтузиастов.
</p>
</section>
);
};