import React from "react";
import "../styles/app.css";
import logo from "../assets/logo.jpg";
import alatooLogo from "../assets/alatoo-logo-2048x2048.png";

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
        <div className="brand-block">
          <div className="logo-block">
            <img src={logo} alt="GameLab logo" className="logo-img" />
            <h1>GameLab</h1>
          </div>
          <div className="logo-block alatoo-brand">
            <img
              src={alatooLogo}
              alt="Ala-Too International University logo"
              className="logo-img"
            />
            <h2>Ala-Too International University</h2>
          </div>
        </div>

        <nav>
          <a href="#about" onClick={handleNavClick}>О нас</a>
          <a href="#games" onClick={handleNavClick}>Игры</a>
          <a href="#hackathons" onClick={handleNavClick}>Наши Хакатоны</a>
          <a href="#articles" onClick={handleNavClick}>Статьи</a>
          <a href="#community" onClick={handleNavClick}>Вступить</a>
        </nav>
      </div>
    </header>
  );
};
