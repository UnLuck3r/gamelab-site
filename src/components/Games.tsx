import React from "react";
import { games } from "../data/games";
import "../styles/app.css";


export const Games: React.FC = () => {
return (
<section id="games" className="container">
<h3 className="section-title">Наши игры 🎮</h3>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
{games.map((game, index) => (
<a
key={index}
href={game.url}
target="_blank"
rel="noreferrer"
className="card"
style={{ background: "var(--primary)", color: "white", textDecoration: "none" }}
>
<h4 style={{ fontSize: 20, marginBottom: 8 }}>{game.title}</h4>
<p style={{ fontSize: 14, opacity: 0.9 }}>{game.description}</p>
</a>
))}
</div>
</section>
);
};