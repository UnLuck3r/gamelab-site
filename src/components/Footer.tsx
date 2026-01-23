import React from "react";
import "../styles/app.css";


export const Footer: React.FC = () => {
return (
<footer style={{ background: "var(--primary)", color: "white", textAlign: "center" }} className="container">
© {new Date().getFullYear()} GameLab — Game Dev Community
</footer>
);
};