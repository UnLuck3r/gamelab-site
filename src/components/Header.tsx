import React from "react";
import "../styles/app.css";


export const Header: React.FC = () => {
return (
<header
style={{ background: "var(--primary)", color: "white" }}
className="container"
>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<h1>GameLab</h1>
<nav style={{ display: "flex", gap: 24 }}>
<a href="#about" style={{ color: "white" }}>О нас</a>
<a href="#games" style={{ color: "white" }}>Игры</a>
<a href="#community" style={{ color: "white" }}>Сообщество</a>
</nav>
</div>
</header>
);
};