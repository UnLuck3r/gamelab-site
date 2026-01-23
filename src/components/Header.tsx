import React from "react";
import "../styles/app.css";
import logo from "../assets/logo.jpg";

export const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="container header-inner">
        <div className="logo-block">
          <img src={logo} alt="GameLab logo" className="logo-img" />
          <h1>GameLab Alatoo</h1>
        </div>

        <nav>
          <a href="#about" onClick={handleNavClick}>О нас</a>
          <a href="#games" onClick={handleNavClick}>Игры</a>
          <a href="#community" onClick={handleNavClick}>Вступить</a>
        </nav>
      </div>
    </header>
  );
};
