import React from "react";
import "../styles/app.css";


export const Footer: React.FC = () => {
return (
<footer>
<div className="container">
© {new Date().getFullYear()} GameLab — Indie Game Community
</div>
</footer>
);
};