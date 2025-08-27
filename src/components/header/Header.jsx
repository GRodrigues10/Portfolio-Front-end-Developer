import React, { useState, useEffect } from "react";
import { StylesHeader } from "./Styles";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StylesHeader scrolled={scrolled}>
      <h1>Portfólio</h1>
      <div className="menu-desktop">
        <a href="#">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
      <div className="menu-hamburger">☰</div>
    </StylesHeader>
  );
}

export default Header;
