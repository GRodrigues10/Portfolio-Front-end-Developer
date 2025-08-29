import React, { useState, useEffect } from "react";
import { StylesHeader, StylesSidebar, Overlay, CloseBtn } from "./Styles";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <StylesHeader scrolled={scrolled}>
        <h1>Portfólio</h1>

        <div className="menu-desktop">
          <a href="#">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Hamburger / X */}
        <div className="menu-hamburger" onClick={toggleMenu}>
          {menuOpen ? "" : "☰"}
        </div>
      </StylesHeader>

      {/* Overlay */}
      <Overlay open={menuOpen} onClick={toggleMenu} />

      {/* Sidebar */}
      <StylesSidebar open={menuOpen}>
        <CloseBtn onClick={toggleMenu}>×</CloseBtn>
        <a href="#" onClick={toggleMenu}>Início</a>
        <a href="#sobre" onClick={toggleMenu}>Sobre</a>
        <a href="#habilidades" onClick={toggleMenu}>Habilidades</a>
        <a href="#projetos" onClick={toggleMenu}>Projetos</a>
        <a href="#contato" onClick={toggleMenu}>Contato</a>
      </StylesSidebar>
    </>
  );
}

export default Header;
