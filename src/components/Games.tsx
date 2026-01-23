import React from "react";
import { games } from "../data/games";
import "../styles/app.css";


export const Games: React.FC = () => {
return (
<section id="games" className="container">
<h3 className="section-title">Игры GameLab</h3>
<div className="grid-games">
{games.map((game, index) => (
<a
key={index}
href={game.url}
target="_blank"
rel="noreferrer"
className="card glass"
style={{ textDecoration: "none", color: "inherit" }}
>
<h4 style={{ fontSize: 22, marginBottom: 10 }}>{game.title}</h4>
<p style={{ opacity: 0.75 }}>{game.description}</p>
</a>
))}
</div>
</section>
);
};