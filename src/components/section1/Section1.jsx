import React from "react";
import { StylesSection1 } from "./Styles";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import img from "../../assets/profile.png";

function Section1() {
  return (
    <StylesSection1 id="inicio">
      <div className="content-section">
        <div className="social-medias">
          <FaLinkedin />
          <FaWhatsapp />
          <FaGithub />
        </div>
        <div className="content-text">
          <h1>Olá, eu sou o Gabriel</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Desenvolvedor Full Stack formado em Análise e Desenvolvimento de
            Sistemas pela Universidade La Salle. Tenho experiência prática em
            projetos web utilizando tecnologias como{" "}
            <span className="tech react">React JS</span>,{" "}
            <span className="tech js">JavaScript</span>,{" "}
            <span className="tech html">HTML</span> e{" "}
            <span className="tech css">CSS</span>, com foco em criar interfaces
            modernas, responsivas e centradas na experiência do usuário.
          </p>
          <div className="btn">
            <button>Currículo</button>
          </div>
        </div>

        <div className="perfil">
          <img src={img} alt="Imagem do Perfil" />
        </div>
      </div>
    </StylesSection1>
  );
}

export default Section1;
