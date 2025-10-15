import React from "react";
import { StylesSection1 } from "./Styles";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import img from "../../assets/profile.png";

function Section1() {
  return (
    <StylesSection1 id="inicio">
      <div className="content-section">
        <div className="social-medias">
          <a href="https://www.linkedin.com/in/grodriguess10/" target="_blank">
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/5521965476339"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a href="https://github.com/GRodrigues10" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="content-text">
          <h1>Olá, eu sou o Gabriel</h1>
          <h2>Front-end Developer</h2>
          <p>
            Desenvolvedor Front-end formado em Análise e Desenvolvimento de
            Sistemas pela Universidade La Salle. Tenho experiência prática em
            projetos web utilizando tecnologias como{" "}
            <span className="tech react">React</span>,{" "}
            <span className="tech js">JavaScript</span>,{" "}
            <span className="tech html">HTML</span>,{" "}
            <span className="tech css">CSS</span> e{" "}
            <span className="tech node">Node</span>, com foco em criar
            interfaces modernas, responsivas e centradas na experiência do
            usuário.
          </p>
          <div className="btn">
            <a
              href="/Portfolio-Front-end-Developer/Curriculo_Gabriel_Rodrigues_Frontend_Developer_.pdf"
              download="Gabriel_Rodrigues_Curriculo.pdf"
            >
              <button>Currículo</button>
            </a>
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
