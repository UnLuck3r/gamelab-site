import React from "react";
import "../styles/app.css";


export const Community: React.FC = () => {
return (
<section id="community" className="container">
<h3 className="section-title">Присоединяйся 🤝</h3>
<div className="card" style={{ background: "var(--sand)" }}>
<p style={{ marginBottom: 16 }}>
Хочешь делать игры вместе с нами? Присоединяйся к GameLab!
</p>
<button className="btn" style={{ background: "var(--primary)", color: "white" }}>
Вступить в сообщество
</button>
</div>
</section>
);
};