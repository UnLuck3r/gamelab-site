import React from "react";
import "../styles/app.css";
import logo from "../assets/logo.jpg";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-inner">
        <div className="logo-block">
          <img src={logo} alt="GameLab" className="logo-img" />
          <h1>GameLab Alatoo</h1>
        </div>

        <nav>
          <a href="#about">О нас</a>
          <a href="#games">Игры</a>
          <a href="#community">Вступить</a>
        </nav>
      </div>
    </header>
  );
};
